<template>
	<div id="app" v-if=this.data>
		<Header v-bind:personal=this.data[this.language].personal />
		<ContentLeft>
			<Introduction v-bind:description=this.data[this.language].personal.description />
			<JobList v-bind:jobs=this.data[this.language].jobs />
			<EducationList v-bind:educations=this.data[this.language].education />
		</ContentLeft>
		<ContentDivider />
		<ContentRight>
			<SkillList v-bind:skills=this.data.knowledges />
			<ReferenceList v-bind:references=this.data[this.language].references />
		</ContentRight>
		<Footer />
	</div>
</template>

<script>

import FirebaseConnection from './FirebaseConnection'
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import Introduction from './components/Introduction'
import JobList from './components/JobList'
import EducationList from './components/EducationList'
import ContentDivider from './components/ContentDivider'
import ContentRight from './components/ContentRight'
import SkillList from './components/SkillList'
import ReferenceList from './components/ReferenceList'
import Footer from './components/Footer'	

export default {
	name: 'Portfolio',
	data () {
		return { 
			data: null,
			language: 'fi'
		}
	},
	components: {
		Header,
		ContentLeft,
		Introduction,
		JobList,
		EducationList,
		ContentDivider,
		ContentRight,
		SkillList,
		ReferenceList,
		Footer
	},
	created() {
		this.getData()
	},
	methods: {
		async getData(){
			let connection = new FirebaseConnection()
			connection.initializeConnection()
			connection.initializeDatabase()
			this.data = await connection.getSnapshot()
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