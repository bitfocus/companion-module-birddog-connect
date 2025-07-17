export function getActions() {
	const startStopOptions = [
		{ id: 'TOGGLE', label: 'Toggle' },
		{ id: 'START', label: 'Start' },
		{ id: 'STOP', label: 'Stop' },
	]

	const overlayOptions = [
		{ id: 'toggle', label: 'Toggle' },
		{ id: 'fadeIn', label: 'Overlay On' },
		{ id: 'fadeOut', label: 'Overlay Off' },
	]

	const presenterLayoutOptions = [
		{ id: 'setFullscreenMain', label: 'Main Source Fullscreen' },
		{ id: 'setFullscreenVideo', label: 'Video Source Fullscreen' },
		{ id: 'setMixed', label: 'Mix Sources' },
	]

	const ptzOptions = [
		{ id: 'left', label: 'Left' },
		{ id: 'right', label: 'Right' },
		{ id: 'up', label: 'Up' },
		{ id: 'down', label: 'Down' },
		{ id: 'in', label: 'Zoom In' },
		{ id: 'out', label: 'Zoom Out' },
		{ id: 'stop', label: 'Stop' },
	]

	const ptzPresetOptions = [
		{ id: 'loadPreset', label: 'Recall Preset' },
		{ id: 'storePreset', label: 'Store Preset' },
	]

	return {
		connectionControl: {
			name: 'Start/Stop Connection',
			options: [
				{
					type: 'dropdown',
					label: 'Connections',
					id: 'connection',
					choices: this.choices.connections,
					default: this.choices.connections?.[0]?.id,
				},
				{
					type: 'dropdown',
					label: 'Command',
					id: 'command',
					choices: startStopOptions,
					default: 'TOGGLE',
				},
			],
			callback: (action) => {
				let state

				if (action.options.command === 'TOGGLE') {
					let connection = this.states.connections.find(({ id }) => id === action.options.connection)
					if (connection) {
						state = connection.state === 'CONNECTED' ? 'STOP' : 'START'
					}
				} else {
					state = action.options.command
				}

				this.sendCommand(`connection/action`, 'POST', { id: action.options.connection, action: state })
			},
		},
		recordingControl: {
			name: 'Start/Stop Recordings',
			options: [
				{
					type: 'multidropdown',
					label: 'Recordings',
					id: 'recordings',
					choices: this.choices.recordings,
				},
				{
					type: 'dropdown',
					label: 'Action',
					id: 'command',
					choices: [
						{ id: 'START', label: 'Start' },
						{ id: 'STOP', label: 'Stop' },
					],
					default: 'START',
				},
			],
			callback: (action) => {
				let field
				let recordings
				let state

				if (action.options.recordings.length > 1) {
					field = 'ids'
					recordings = action.options.recordings
					state = action.options.command === 'START' ? 'START_MULTIPLE' : 'STOP_MULTIPLE'
				} else {
					field = 'id'
					recordings = action.options.recordings[0]
					state = action.options.command
				}

				this.sendCommand(`recording/action`, 'POST', {
					[`${field}`]: recordings,
					action: state,
				})
			},
		},
		recorderControl: {
			name: 'Start/Stop All Recordings on Recorder',
			options: [
				{
					type: 'dropdown',
					label: 'Recorder',
					id: 'recorder',
					choices: this.choices.recorders,
				},
				{
					type: 'dropdown',
					label: 'Action',
					id: 'command',
					choices: [
						{ id: 'START', label: 'Start All' },
						{ id: 'STOP', label: 'Stop All' },
					],
					default: 'START',
				},
			],
			callback: (action) => {
				let field
				let recordings = []
				let state
				let recorderSources = this.states.recordings.filter(
					(recording) => recording.recorderId === action.options.recorder,
				)

				if (recorderSources) {
					recorderSources.forEach((recording) => {
						let id = recording.id
						recordings.push(id)
						return recordings
					})

					if (recordings.length > 1) {
						field = 'ids'
						state = action.options.command === 'START' ? 'START_MULTIPLE' : 'STOP_MULTIPLE'
					} else {
						field = 'id'
						recordings = recordings[0]
						state = action.options.command
					}

					this.sendCommand(`recording/action`, 'POST', {
						[`${field}`]: recordings,
						action: state,
					})
				}
			},
		},
		encoderSessionControl: {
			name: 'Start/Stop Encode/Decode',
			options: [
				{
					type: 'dropdown',
					label: 'Encode/Decode',
					id: 'encoderSession',
					choices: this.choices.encoderSessions,
					default: this.choices.encoderSessions?.[0]?.id,
				},
				{
					type: 'dropdown',
					label: 'Action',
					id: 'command',
					choices: [
						{ id: 'START', label: 'Start' },
						{ id: 'STOP', label: 'Stop' },
					],
					default: 'START',
				},
			],
			callback: (action) => {
				this.sendCommand(`encoder-session/action`, 'POST', {
					id: action.options.encoderSession,
					action: action.options.command,
				})
			},
		},
		presenterLayout: {
			name: 'Set Presenter Layout',
			options: [
				{
					type: 'dropdown',
					label: 'Presenter Connection',
					id: 'connection',
					choices: this.choices.presenters,
					default: this.choices.presenters?.[0]?.id,
				},
				{
					type: 'dropdown',
					label: 'Layout',
					id: 'layout',
					choices: presenterLayoutOptions,
					default: 'setFullscreenMain',
				},
				{
					type: 'checkbox',
					label: 'Use Fade',
					id: 'fade',
					default: false,
				},
				{
					type: 'number',
					label: 'Fade Duration (seconds)',
					id: 'duration',
					default: 1,
					min: 0,
					max: 2,
					isVisibleExpression: '$(options:fade) === true',
				},
				{
					type: 'checkbox',
					label: 'Use Custom Source',
					id: 'custom',
					default: false,
					isVisibleExpression: `$(options:layout) === 'setFullscreenVideo' || $(options:layout) === 'setMixed'`,
				},
				{
					type: 'dropdown',
					label: 'Custom Source',
					id: 'source',
					choices: this.choices.presentersSources,
					default: this.choices.presentersSources?.[0]?.id,
					isVisibleExpression: `$(options:custom) === true`,
				},
			],
			callback: (action) => {
				let connection = this.states.connections.find(({ id }) => id === action.options.connection)
				let layout = action.options.layout === 'setMixed' ? 'setMixed' : 'setFullscreen'
				let sourceName

				if (action.options.layout === 'setMixed' || action.options.layout === 'setFullscreenVideo') {
					if (action.options.custom === true) {
						sourceName = action.options.source
					} else {
						sourceName = connection.parameters.multiView.firstVideoSource
					}
				} else {
					sourceName = connection.parameters.multiView.mainSource
				}

				let body = {
					sourceId: connection.sourceId,
					connectionId: connection.id,
					sourceName: sourceName,
					duration: action.options.fade ? action.options.duration : 0,
				}

				this.sendPresenterCommand(layout, body)
			},
		},
		presenterAudioDevice: {
			name: 'Set Presenter Audio Device',
			options: [
				{
					type: 'dropdown',
					label: 'Presenter Connection',
					id: 'connection',
					choices: this.choices.presenters,
					default: this.choices.presenters?.[0]?.id,
				},
				{
					type: 'dropdown',
					label: 'Audio Device',
					id: 'audio',
					choices: this.choices.audioDevices,
					default: this.choices.audioDevices?.[0]?.id,
				},
			],
			callback: (action) => {
				let connection = this.states.connections.find(({ id }) => id === action.options.connection)
				let endpoint = this.states.endpoints.find(({ id }) => id === connection.sourceId)
				let fieldType = 'deviceName'

				if (endpoint && endpoint?.ndiSources) {
					let source = endpoint.ndiSources.find((element) => element === action.options.audio)
					if (source) {
						fieldType = 'sourceName'
					}
				}

				let body = {
					sourceId: connection.sourceId,
					connectionId: connection.id,
					[`${fieldType}`]: action.options.audio,
				}

				this.sendPresenterCommand('setAudioReceiver', body)
			},
		},
		presenterPtz: {
			name: 'Presenter - PTZ Control',
			options: [
				{
					type: 'checkbox',
					label: 'Use Device Selected via Companion',
					id: 'local',
					default: false,
					tooltip: 'Select the device using the "Presenter - Select PTZ Device" action',
				},
				{
					type: 'dropdown',
					label: 'Presenter Connection',
					id: 'connection',
					choices: this.choices.presenters,
					default: this.choices.presenters?.[0]?.id,

					isVisibleExpression: '!$(options:local)',
				},
				{
					type: 'dropdown',
					label: 'Device',
					id: 'device',
					choices: this.choices.ndiSources,
					default: this.choices.ndiSources?.[0]?.id,

					isVisibleExpression: '!$(options:local)',
				},
				{
					type: 'dropdown',
					label: 'PTZ Action',
					id: 'ptz',
					choices: ptzOptions,
					default: 'left',
				},
				{
					type: 'number',
					label: 'PTZ Speed',
					id: 'speed',
					default: 0.5,
					min: 0,
					max: 1,
					step: 0.1,
					range: true,
					isVisibleExpression: '$(options:ptz) !== "stop"',
				},
			],
			callback: (action) => {
				let panVal = 0
				let tiltVal = 0
				let zoomVal = 0
				let speed = action.options.speed
				let body = {}
				switch (action.options.ptz) {
					case 'left':
						panVal = speed
						break
					case 'right':
						panVal = -speed
						break
					case 'up':
						tiltVal = speed
						break
					case 'down':
						tiltVal = -speed
						break
					case 'in':
						zoomVal = speed
						break
					case 'out':
						zoomVal = -speed
						break
					default:
						break
				}

				if (action.options.local) {
					if (!this.states.ptzDevice?.sourceId) {
						this.log('error', 'No PTZ device selected. Please use the "Presenter - Select PTZ Device" action first.')
						return
					}
					body = {
						sourceId: this.states.ptzDevice.sourceId,
						connectionId: this.states.ptzDevice.connectionId,
						sourceName: this.states.ptzDevice.sourceName,
						pan: panVal,
						tilt: tiltVal,
						zoom: zoomVal,
					}
				} else {
					let connection = this.states.connections.find(({ id }) => id === action.options.connection)
					body = {
						sourceId: connection.sourceId,
						connectionId: connection.id,
						sourceName: action.options.device,
						pan: panVal,
						tilt: tiltVal,
						zoom: zoomVal,
					}
				}

				this.sendPresenterCommand('ptz', body)
			},
		},
		presenterPtzPreset: {
			name: 'Presenter - PTZ Presets',
			options: [
				{
					type: 'checkbox',
					label: 'Use Device Selected via Companion',
					id: 'local',
					default: false,
					tooltip: 'Select the device using the "Presenter - Select PTZ Device" action',
				},
				{
					type: 'dropdown',
					label: 'Presenter Connection',
					id: 'connection',
					choices: this.choices.presenters,
					default: this.choices.presenters?.[0]?.id,

					isVisibleExpression: '!$(options:local)',
				},
				{
					type: 'dropdown',
					label: 'Device',
					id: 'device',
					choices: this.choices.ndiSources,
					default: this.choices.ndiSources?.[0]?.id,

					isVisibleExpression: '!$(options:local)',
				},
				{
					type: 'dropdown',
					label: 'Action',
					id: 'ptz',
					choices: ptzPresetOptions,
					default: 'loadPreset',
				},
				{
					type: 'number',
					label: 'Preset Number',
					id: 'preset',
					default: 1,
					min: 1,
					max: 9,
					step: 1,
				},
				{
					type: 'number',
					label: 'Preset Recall Speed',
					id: 'speed',
					default: 1,
					min: 0,
					max: 1,
					step: 0.1,
					range: true,
					isVisibleExpression: '$(options:ptz) !== "storePreset"',
				},
			],
			callback: (action) => {
				let preset = action.options.preset - 1
				let speed = action.options.speed
				let body = {}

				if (action.options.local) {
					if (!this.states.ptzDevice?.sourceId) {
						this.log('error', 'No PTZ device selected. Please use the "Presenter - Select PTZ Device" action first.')
						return
					}
					body = {
						sourceId: this.states.ptzDevice.sourceId,
						connectionId: this.states.ptzDevice.connectionId,
						sourceName: this.states.ptzDevice.sourceName,
					}
				} else {
					let connection = this.states.connections.find(({ id }) => id === action.options.connection)
					body = {
						sourceId: connection.sourceId,
						connectionId: connection.id,
						sourceName: action.options.device,
					}
				}
				if (action.options.ptz === 'storePreset') {
					body.slot = preset
				} else {
					body.slot = preset
					body.speed = speed
				}

				this.sendPresenterCommand(`${action.options.ptz}`, body)
			},
		},
		presenterPtzDevice: {
			name: 'Presenter - Select PTZ Device',
			options: [
				{
					type: 'dropdown',
					label: 'Presenter Connection',
					id: 'connection',
					choices: this.choices.presenters,
					default: this.choices.presenters?.[0]?.id,
				},
				{
					type: 'dropdown',
					label: 'Device',
					id: 'device',
					choices: this.choices.ndiSources,
					default: this.choices.ndiSources?.[0]?.id,
				},
			],
			callback: (action) => {
				let connection = this.states.connections.find(({ id }) => id === action.options.connection)

				this.states.ptzDevice = {
					sourceId: connection.sourceId,
					connectionId: connection.id,
					sourceName: action.options.device,
				}
				this.checkFeedbacks('presenterPTZDevice')
				this.setVariableValues({ presenter_ptz_device: action.options.device })
			},
		},
		presenterOverlay: {
			name: 'Set Presenter Overlay',
			options: [
				{
					type: 'dropdown',
					label: 'Presenter Connection',
					id: 'connection',
					choices: this.choices.presenters,
					default: this.choices.presenters?.[0]?.id,
				},
				{
					type: 'dropdown',
					label: 'Overlay Action',
					id: 'overlay',
					choices: overlayOptions,
					default: 'toggle',
				},
				{
					type: 'number',
					label: 'Overlay Fade Duration',
					id: 'duration',
					min: 0,
					max: 2,
					default: 1,
				},
			],
			callback: (action) => {
				let connection = this.states.connections.find(({ id }) => id === action.options.connection)
				let presenter = this.states.presenters[action.options.connection]
				if (!connection) {
					this.log('error', `Connection with ID ${action.options.connection} not found`)
					return
				}
				let command = 'fadeOut'
				if (action.options.overlay === 'toggle') {
					command = presenter.overlay === 'fadeIn' ? 'fadeOut' : 'fadeIn'
				} else {
					command = action.options.overlay
				}

				let body = {
					sourceId: connection.sourceId,
					connectionId: connection.id,
					duration: action.options.duration ?? 1,
				}

				this.sendPresenterCommand(command, body)
			},
		},
	}
}
