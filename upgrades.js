export const upgradeScripts = [
	function v1_1_0(context, props) {
		let changes = {
			updatedConfig: null,
			updatedActions: [],
			updatedFeedbacks: [],
		}

		for (const action of props.actions) {
			if (action.actionId === 'presenterLayout') {
				if (!action.options.fade) {
					action.options.fade = false
				}
				if (!action.options.duration) {
					action.options.duration = 1
				}
				changes.updatedActions.push(action)
			}
		}

		return changes
	},
]
