import { combineRgb } from '@companion-module/base'

export function getPresets() {
	const ColorWhite = combineRgb(255, 255, 255)
	const ColorBlack = combineRgb(0, 0, 0)
	const ColorRed = combineRgb(200, 0, 0)
	const ColorGreen = combineRgb(0, 200, 0)

	// Variables for Base64 image data do not edit
	let image_up =
		'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIFJREFUKM+90EEKgzAQRmFDFy49ghcp5FquVPBighcRegHBjWDJ68D8U6F7m00+EnhkUlW3ru6rdyCV0INQzSg1zFLLKmU2aeCQQMEEJXIQORRsTLNyKJhNm3IoaPBg4mQorp2Mh1+00kKN307o/bZrpt5O/FlPU/c75X91/fPd6wPRD1eHyHEL4wAAAABJRU5ErkJggg=='
	let image_down =
		'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIlJREFUKM/F0DEOwyAMBVAjDxk5Qo7CtdiClIv1KJF6gUpZIhXxY2zTDJ2benoS8LFN9MsKbYjxF2XRS1UZ4bCeGFztFmNqphURpidm146kpwFvLDYJpPQtLSLNoySyP2bRpoqih2oSFW8K3lYAxmJGXA88XMnjeuDmih7XA8vXvNeeqX6U6aY6AacbWAQNWOPUAAAAAElFTkSuQmCC'
	let image_left =
		'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUKM+1kTEOgCAQBM9Q2JjwA/mJPA2fxlN4giWF8TRBBhMpbKSaZie3i8gPb4Y8FNZKGm8YIAONkNWacIruQLejy+gyug1dQhfRqZa0v6gYA6QfqSWapZnto1B6XdUuFaVHoJunr2MD21nIdJYUEhLYfoGmP777BKKIXC0eYSD5AAAAAElFTkSuQmCC'
	let image_right =
		'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHhJREFUKM+10LERgCAMQFE4CktHcBRWcRMYzVEcwdKCI+od+fGksVCq3/AuiXOfvZnaNXzRClVrEKtMLdSqP2RTRQAFMAFGwAlw7MAk0sAzGnhVoerLKg/F5Pv4NoFNZZNGpk9sxJYeLsDdL5T7S8IFOM/R3OZ+fQeQZV9pMy+bVgAAAABJRU5ErkJggg=='

	let presets = {}

	if (this.states.endpoints) {
		this.states.endpoints.forEach((endpoint) => {
			let id = endpoint.id
			let name = endpoint.name
			let variableName = name.replace(/[\W]/gi, '_')

			presets[`endpoint_${name}_status`] = {
				type: 'button',
				category: 'Endpoint Status',
				name: `Endpoint ${name} Status`,
				options: {},
				style: {
					text: `${name}\\n$(birddog-connect:endpoint_status_${variableName})`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'endpointOnline',
						options: {
							endpoint: `${id}`,
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
					{
						feedbackId: 'endpointOnline',
						options: {
							endpoint: `${id}`,
						},
						style: {
							bgcolor: ColorRed,
						},
						isInverted: true,
					},
				],
			}
		})
	}

	if (this.states.connections) {
		this.states.connections.forEach((connection) => {
			let id = connection.id
			let name = connection.id
			name = this.getConnectionDisplayName(connection)
			let variableName = name.replace(/[\W]/gi, '_')
			presets[`connection_${name}_header`] = {
				category: 'Connection Control',
				name: `Connection Control - ${name}`,
				type: 'text',
			}
			presets[`connection_${name}_toggle`] = {
				type: 'button',
				category: 'Connection Control',
				name: `Start/Stop ${name}`,
				options: {},
				style: {
					text: `START/STOP\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'connectionControl',
								options: {
									connection: id,
									command: 'TOGGLE',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'connectionStatus',
						options: {
							connection: `${id}`,
						},
						style: {},
					},
				],
			}
			presets[`connection_${name}_start`] = {
				type: 'button',
				category: 'Connection Control',
				name: `Start ${name}`,
				options: {},
				style: {
					text: `START\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'connectionControl',
								options: {
									connection: id,
									command: 'START',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`connection_${name}_stop`] = {
				type: 'button',
				category: 'Connection Control',
				name: `Stop ${name}`,
				options: {},
				style: {
					text: `STOP\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'connectionControl',
								options: {
									connection: id,
									command: 'STOP',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`connection_${name}_status`] = {
				type: 'button',
				category: 'Connection Status',
				name: `Status ${name}`,
				options: {},
				style: {
					text: `${name}\\n$(birddog-connect:connection_status_${variableName})`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'connectionStatus',
						options: {
							connection: `${id}`,
						},
						style: {},
					},
				],
			}
		})
	}

	if (this.states.recordings) {
		this.states.recordings.forEach((recording) => {
			let id = recording.id
			let name = recording.parameters.input
			let variableName = name.replace(/[\W]/gi, '_')

			presets[`recording_${name}_start`] = {
				type: 'button',
				category: 'Recording Actions',
				name: `Start ${name}`,
				options: {},
				style: {
					text: `START\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'recordingControl',
								options: {
									recordings: [id],
									command: 'START',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`recording_${name}_stop`] = {
				type: 'button',
				category: 'Recording Actions',
				name: `Stop ${name}`,
				options: {},
				style: {
					text: `STOP\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'recordingControl',
								options: {
									recordings: [id],
									command: 'STOP',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`recording_${name}_status`] = {
				type: 'button',
				category: 'Recording Status',
				name: `Status ${name}`,
				options: {},
				style: {
					text: `${name}\\n$(birddog-connect:recording_status_${variableName})`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'recordingActive',
						options: {
							recording: `${id}`,
						},
						style: {
							bgcolor: ColorRed,
						},
					},
				],
			}
		})
	}

	if (this.choices.encoderSessions) {
		this.choices.encoderSessions.forEach((encoder) => {
			let id = encoder.id
			let name = encoder.label
			let type = encoder.type

			presets[`encoder_session_${id}_start`] = {
				type: 'button',
				category: `${type === 'encode' ? 'Encode' : 'Decode'} Actions`,
				name: `Start ${name}`,
				options: {},
				style: {
					text: `START\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'encoderSessionControl',
								options: {
									encoderSession: id,
									command: 'START',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`encoder_session_${id}_stop`] = {
				type: 'button',
				category: `${type === 'encode' ? 'Encode' : 'Decode'} Actions`,
				name: `Stop ${name}`,
				options: {},
				style: {
					text: `STOP\\n${name}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'encoderSessionControl',
								options: {
									encoderSession: id,
									command: 'STOP',
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`encoder_session_${id}_status`] = {
				type: 'button',
				category: `${type === 'encode' ? 'Encode' : 'Decode'} Status`,
				name: `Status ${name}`,
				options: {},
				style: {
					text: `${name}\\n$(birddog-connect:${type}_status_${id})`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'encoderSessionActive',
						options: {
							encoderSession: `${id}`,
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
		})
	}

	if (this.choices.presenters) {
		presets[`presenter_ptz_basic`] = {
			category: 'Presenter PTZ Control',
			name: `PTZ Controls`,
			type: 'text',
		}
		presets[`presenter_ptz_up`] = {
			type: 'button',
			category: 'Presenter PTZ Control',
			name: 'PTZ - Up',
			options: {},
			style: {
				text: '',
				png64: image_up,
				pngalignment: 'center:center',
				size: 'auto',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'up',
								speed: 0.5,
							},
						},
					],
					up: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'stop',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
		presets[`presenter_ptz_down`] = {
			type: 'button',
			category: 'Presenter PTZ Control',
			name: 'PTZ - Down',
			options: {},
			style: {
				text: '',
				png64: image_down,
				pngalignment: 'center:center',
				size: 'auto',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'down',
								speed: 0.5,
							},
						},
					],
					up: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'stop',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
		presets[`presenter_ptz_left`] = {
			type: 'button',
			category: 'Presenter PTZ Control',
			name: 'PTZ - Left',
			options: {},
			style: {
				text: '',
				png64: image_left,
				pngalignment: 'center:center',
				size: 'auto',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'left',
								speed: 0.5,
							},
						},
					],
					up: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'stop',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
		presets[`presenter_ptz_right`] = {
			type: 'button',
			category: 'Presenter PTZ Control',
			name: 'PTZ - Right',
			options: {},
			style: {
				text: '',
				png64: image_right,
				pngalignment: 'center:center',
				size: 'auto',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'right',
								speed: 0.5,
							},
						},
					],
					up: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'stop',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
		presets[`presenter_ptz_in`] = {
			type: 'button',
			category: 'Presenter PTZ Control',
			name: 'PTZ - In',
			options: {},
			style: {
				text: 'ZOOM\\nIN',
				size: 'auto',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'in',
								speed: 0.5,
							},
						},
					],
					up: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'stop',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
		presets[`presenter_ptz_out`] = {
			type: 'button',
			category: 'Presenter PTZ Control',
			name: 'PTZ - Out',
			options: {},
			style: {
				text: 'ZOOM\\nOUT',
				size: 'auto',
				color: ColorWhite,
				bgcolor: ColorBlack,
			},
			steps: [
				{
					down: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'out',
								speed: 0.5,
							},
						},
					],
					up: [
						{
							actionId: 'presenterPtz',
							options: {
								local: true,
								ptz: 'stop',
							},
						},
					],
				},
			],
			feedbacks: [],
		}
		presets[`presenter_ptz_preset_recall`] = {
			category: 'Presenter PTZ Control',
			name: `PTZ Recall Presets`,
			type: 'text',
		}

		for (let i = 1; i <= 9; i++) {
			presets[`presenter_ptz_preset_${i}`] = {
				type: 'button',
				category: 'Presenter PTZ Control',
				name: `Presenter Preset Recall ${i}`,
				options: {},
				style: {
					text: `RECALL\\n${i}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterPtzPreset',
								options: {
									local: true,
									ptz: 'loadPreset',
									preset: i,
									speed: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presetActive',
						options: {
							local: true,
							preset: i,
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
		}

		presets[`presenter_ptz_preset_store`] = {
			category: 'Presenter PTZ Control',
			name: `PTZ Store Presets`,
			type: 'text',
		}
		for (let i = 1; i <= 9; i++) {
			presets[`presenter_ptz_preset_${i}_store`] = {
				type: 'button',
				category: 'Presenter PTZ Control',
				name: `Presenter Preset Store ${i}`,
				options: {},
				style: {
					text: `STORE\\n${i}`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterPtzPreset',
								options: {
									local: true,
									ptz: 'storePreset',
									preset: i,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
		}
		this.choices.presenters.forEach((presenter) => {
			let id = presenter.id
			let name = presenter.label

			presets[`presenter_${name}_layout_header`] = {
				category: 'Presenter Layout Control',
				name: `Layout Control - ${name}`,
				type: 'text',
			}
			presets[`presenter_${name}_main_full`] = {
				type: 'button',
				category: 'Presenter Layout Control',
				name: `Presenter ${name} Main Full`,
				options: {},
				style: {
					text: `${name}\\nMAIN`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterLayout',
								options: {
									connection: id,
									layout: 'setFullscreenMain',
									fade: false,
									duration: 1,
									custom: false,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterLayout',
						options: {
							connection: `${id}`,
							layout: 'setFullscreenMain',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_video_full`] = {
				type: 'button',
				category: 'Presenter Layout Control',
				name: `Presenter ${name} Video Full`,
				options: {},
				style: {
					text: `${name}\\nVIDEO`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterLayout',
								options: {
									connection: id,
									layout: 'setFullscreenVideo',
									fade: false,
									duration: 1,
									custom: false,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterLayout',
						options: {
							connection: `${id}`,
							layout: 'setFullscreenVideo',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_video_mix`] = {
				type: 'button',
				category: 'Presenter Layout Control',
				name: `Presenter ${name} Video Mix`,
				options: {},
				style: {
					text: `${name}\\nMIX`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterLayout',
								options: {
									connection: id,
									layout: 'setMixed',
									fade: false,
									duration: 1,
									custom: false,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterLayout',
						options: {
							connection: `${id}`,
							layout: 'setMixed',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_main_full_fade`] = {
				type: 'button',
				category: 'Presenter Layout Control',
				name: `Presenter ${name} Main Full w/ Fade`,
				options: {},
				style: {
					text: `${name}\\nFADE MAIN`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterLayout',
								options: {
									connection: id,
									layout: 'setFullscreenMain',
									fade: true,
									duration: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterLayout',
						options: {
							connection: `${id}`,
							layout: 'setFullscreenMain',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_video_full_fade`] = {
				type: 'button',
				category: 'Presenter Layout Control',
				name: `Presenter ${name} Video Full w/ Fade`,
				options: {},
				style: {
					text: `${name}\\nFADE VIDEO`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterLayout',
								options: {
									connection: id,
									layout: 'setFullscreenVideo',
									fade: true,
									duration: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterLayout',
						options: {
							connection: `${id}`,
							layout: 'setFullscreenVideo',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_video_mix_fade`] = {
				type: 'button',
				category: 'Presenter Layout Control',
				name: `Presenter ${name} Video Mix w/ Fade`,
				options: {},
				style: {
					text: `${name}\\nFADE\\nMIX`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterLayout',
								options: {
									connection: id,
									layout: 'setMixed',
									fade: true,
									duration: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterLayout',
						options: {
							connection: `${id}`,
							layout: 'setMixed',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_header`] = {
				category: 'Presenter Overlay Control',
				name: `Overlay Control - ${name}`,
				type: 'text',
			}
			presets[`presenter_${name}_overlay_toggle`] = {
				type: 'button',
				category: 'Presenter Overlay Control',
				name: `Presenter ${name} Overlay Toggle`,
				options: {},
				style: {
					text: `${name}\\nTOGGLE OVERLAY`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterOverlay',
								options: {
									connection: id,
									overlay: 'toggle',
									duration: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterOverlayActive',
						options: {
							connection: `${id}`,
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			presets[`presenter_${name}_overlay_on`] = {
				type: 'button',
				category: 'Presenter Overlay Control',
				name: `Presenter ${name} Overlay On`,
				options: {},
				style: {
					text: `${name}\\nOVERLAY\\nON`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterOverlay',
								options: {
									connection: id,
									overlay: 'fadeIn',
									duration: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`presenter_${name}_overlay_off`] = {
				type: 'button',
				category: 'Presenter Overlay Control',
				name: `Presenter ${name} Overlay Off`,
				options: {},
				style: {
					text: `${name}\\nOVERLAY\\nOFF`,
					size: 'auto',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [
							{
								actionId: 'presenterOverlay',
								options: {
									connection: id,
									overlay: 'fadeOut',
									duration: 1,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [],
			}
			presets[`presenter_${name}_audio_header`] = {
				category: 'Presenter Audio Control',
				name: `Audio Control - ${name}`,
				type: 'text',
			}
			this.choices.audioDevices.forEach((audioDevice) => {
				let audioId = audioDevice.id
				presets[`presenter_${name}_audio_${audioId}`] = {
					type: 'button',
					category: 'Presenter Audio Control',
					name: `Presenter ${name} Audio Source ${audioId}`,
					options: {},
					style: {
						text: `${name} 🔊\\n${audioId}`,
						size: 'auto',
						color: ColorWhite,
						bgcolor: ColorBlack,
					},
					steps: [
						{
							down: [
								{
									actionId: 'presenterAudioDevice',
									options: {
										connection: id,
										audio: audioId,
									},
								},
							],
							up: [],
						},
					],
					feedbacks: [
						{
							feedbackId: 'presenterAudioDevice',
							options: {
								connection: `${id}`,
								audio: audioId,
							},
							style: {
								bgcolor: ColorGreen,
							},
						},
					],
				}
			})
			presets[`presenter_${name}_header`] = {
				category: 'Presenter Thumbnails',
				name: `Thumbnail - ${name}`,
				type: 'text',
			}
			presets[`presenter_${name}_thumbnail`] = {
				type: 'button',
				category: 'Presenter Thumbnails',
				name: `Presenter ${name} Thumbnail`,
				options: {},
				style: {
					text: `${name}`,
					size: '14',
					alignment: 'center:bottom',
					pngalignment: 'center:top',
					color: ColorWhite,
					bgcolor: ColorBlack,
				},
				steps: [
					{
						down: [],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'presenterThumbnail',
						options: {
							connection: `${id}`,
							source: false,
							sourceName: '',
						},
						style: {
							bgcolor: ColorGreen,
						},
					},
				],
			}
			this.choices.presentersSources.forEach((videoSource) => {
				let sourceName = videoSource.id
				presets[`presenter_${name}_video_${sourceName}`] = {
					type: 'button',
					category: 'Presenter Thumbnails',
					name: `Presenter ${name} Video Source ${sourceName}`,
					options: {},
					style: {
						text: `${sourceName}`,
						size: '10',
						alignment: 'center:bottom',
						pngalignment: 'center:top',
						color: ColorWhite,
						bgcolor: ColorBlack,
					},
					steps: [
						{
							down: [],
							up: [],
						},
					],
					feedbacks: [
						{
							feedbackId: 'presenterThumbnail',
							options: {
								connection: `${id}`,
								source: true,
								sourceName: `${sourceName}`,
							},
							style: {
								bgcolor: ColorGreen,
							},
						},
					],
				}
			})
		})
	}

	return presets
}
