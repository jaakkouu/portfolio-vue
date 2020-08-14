<template>
	<div id="app" v-if=this.data>
		<ChangeLanguageButton v-bind:buttonText=this.data[this.language].titles.switchlanguage />
		<Main>
			<Header v-bind:personal=this.data[this.language].personal />
			<Content>
				<ContentLeft>
					<Section v-bind:title=this.data[this.language].titles.introduction>
						<Introduction v-bind:description=this.data[this.language].personal.description />
					</Section>
					<Section v-bind:title=this.data[this.language].titles.experience>
						<JobList v-bind:jobs=this.data[this.language].jobs />
					</Section>
					<Section v-bind:title=this.data[this.language].titles.education>
						<EducationList v-bind:educations=this.data[this.language].education />
					</Section>
				</ContentLeft>
				<ContentDivider />
				<ContentRight>
					<Section v-bind:title=this.data[this.language].titles.knowledge>
						<BadgeList v-bind:skills=this.data.knowledges />
					</Section>
					<Section v-bind:title=this.data[this.language].titles.references>
						<ReferenceList v-bind:references=this.data[this.language].references />
					</Section>
				</ContentRight>
			</Content>
			<Footer />
		</Main>
	</div>
</template>

<script>

import FirebaseConnection from './FirebaseConnection'
import ChangeLanguageButton from './components/ChangeLanguageButton'
import Section from './components/Section'
import Main from './components/Main'
import Header from './components/Header'
import Content from './components/Content'
import ContentLeft from './components/ContentLeft'
import Introduction from './components/Introduction'
import JobList from './components/JobList'
import EducationList from './components/EducationList'
import ContentDivider from './components/ContentDivider'
import ContentRight from './components/ContentRight'
import BadgeList from './components/BadgeList'
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
		ChangeLanguageButton,
		Main,
		Section,
		Header,
		Content,
		ContentLeft,
		Introduction,
		JobList,
		EducationList,
		ContentDivider,
		ContentRight,
		BadgeList,
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