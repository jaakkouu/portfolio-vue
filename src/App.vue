<template>
	<div id="app" v-if=data>
		<ChangeLanguageButton v-bind:buttonAction="changeLanguage" v-bind:buttonText=data[this.language].titles.switchlanguage />
		<Main>
			<Header v-bind:personal=data[this.language].personal v-bind:personalLinks=links />
			<Content>
				<ContentLeft>
					<Section v-bind:title=data[this.language].titles.introduction>
						<Introduction v-bind:description=data[this.language].personal.description />
					</Section>
					<Section v-bind:title=data[this.language].titles.experience>
						<JobList v-bind:jobs=data[this.language].jobs />
					</Section>
					<Section v-bind:title=data[this.language].titles.education>
						<EducationList v-bind:educations=data[this.language].education />
					</Section>
				</ContentLeft>
				<ContentDivider />
				<ContentRight>
					<Section v-bind:title=data[this.language].titles.knowledge>
						<BadgeList v-bind:skills=computedKnowledges />
					</Section>
					<Section v-bind:title=data[this.language].titles.references>
						<ReferenceList v-bind:references=computedReferences />
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
import RandomColor from '../node_modules/randomcolor/randomColor'

export default {
	name: 'Portfolio',
	data () {
		return { 
			data: null,
			language: 'fi',
			links: [{
				href: "https://github.com/jaakkouu/",
				iconPrefix: 'fab',
				icon: "github-square",
				name: "Github"
			}, {
				href: "https://www.linkedin.com/in/jaakko-uusitalo/",
				iconPrefix: 'fab',
				icon: "linkedin",
				name: "LinkedIn"
			}]
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
		},
		generateColorsToKnowledges(){
			let knowledges = this.data.knowledges,
				colorArray = RandomColor({
					count: knowledges.length,
					luminosity: 'light',
					format: 'rgba',
					alpha: 1
				})
			return knowledges.map((knowledge, i) => {
				return {
					knowledge: knowledge,
					backgroundColor: colorArray[i]
				}
			})
		},
		addColorToReference(){
			let references = this.data[this.language].references
			references.forEach(reference => {	
				reference.skills = reference.skills.map(skill => {
					return {
						skill: skill,
						backgroundColor: this.getColorFromKnowledgesBySkillName(skill)
					}
				})
			})
			return references
		},
		getColorFromKnowledgesBySkillName(skillName){
			return this.computedKnowledges.find(obj => obj.knowledge === skillName).backgroundColor
		},
		changeLanguage(){
			this.language = this.language === 'fi' ? 'en' : 'fi'
		}
	},
	computed: {
		computedKnowledges: function() {
			return this.generateColorsToKnowledges()
		},
		computedReferences: function(){
			return this.addColorToReference()
		}
	}
}

</script>