<template>
	<div id="app" v-if=data>
		<ChangeLanguageButton 
			v-bind:buttonAction="changeLanguage" 
			v-bind:buttonText=computedData.titles.switchlanguage
		/>
		<Main>
			<Header 
				v-bind:personal=computedData.personal 
				v-bind:personalLinks=computedData.links
			/>
			<ContentView 
				v-bind:data=computedData 
				v-bind:view=view
				v-bind:setView=setView
			/>
			<Footer />
		</Main>
	</div>
	<Loader v-else />
</template>

<script>

import Main from './components/Main'
import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'	
import ContentView from './components/ContentView'
import RandomColor from '../node_modules/randomcolor/randomColor'
import FirebaseConnection from './FirebaseConnection'
import ChangeLanguageButton from './components/ChangeLanguageButton'

export default {
	name: 'Portfolio',
	data () {
		return { 
			language: 'fi',
			view: 'FrontView',
			data: null
		}
	},
	components: {
		ChangeLanguageButton,
		Main,
		Header,
		Footer,
		Loader,
		ContentView
	},
	created() {
		let dataPromise = this.fetchData()
		this.setData(dataPromise)
	},
	methods: {
		async fetchData(){
			let connection = new FirebaseConnection()
			connection.initializeConnection()
			connection.initializeDatabase()
			return await connection.getSnapshot()
		},
		async setData(dataPromise){
			let data = await dataPromise
			data.knowledges = this.addColorsToKnowledges(data.knowledges)
			this.data = data
		},
		addColorsToKnowledges(knowledges){
			let colorArray = RandomColor({
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
		addColorToReference(references){
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
			return this.data.knowledges.find(obj => obj.knowledge === skillName).backgroundColor
		},
		changeLanguage(){
			this.language = this.language === 'fi' ? 'en' : 'fi'
		},
		setView(view){
			this.view = view
		}
	},
	computed: {
		computedData: function(){
			let selectedLanguageData = this.data.languages[this.language]
			selectedLanguageData.references = this.addColorToReference(selectedLanguageData.references)
			let allowedProperties = {
				"knowledges": this.data.knowledges,
				"links": this.data.links
			}
			return {...selectedLanguageData, ...allowedProperties}
		}
	}
}

</script>