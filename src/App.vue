<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>

import FirebaseConnection from './FirebaseConnection'	
import HelloWorld from './components/HelloWorld'

export default {
	name: 'Portfolio in VueJS',
	data () {
		return { 
			data: null,
			language: 'fin'
		}
	},
	components: {
		HelloWorld,
	},
	async created () {
		let connection = new FirebaseConnection()
		connection.initializeConnection()
		connection.initializeDatabase()
		connection.getSnapshot(this.language).then(data => this.setData(data))
	}, 
	methods: {
		setData(data) {
			this.data = data
		}
	}
}

</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>