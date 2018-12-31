export default {
	data() {
		return {
			name: window.localStorage.getItem('remembered-nickname'),
		}
	},

	watch: {
		name() {
			window.localStorage.setItem('remembered-nickname', this.name)
		},
	},
}
