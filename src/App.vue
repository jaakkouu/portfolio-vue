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
			<ContentView v-bind:computedData=computedData />
			<Footer />
		</Main>
	</div>
	<Loader v-else />
</template>

<script>
import Main from './components/Main'
import Loader from './components/Loader'
import Header from './components/Header'
import ContentView from './components/ContentView'
import Footer from './components/Footer'	
import RandomColor from '../node_modules/randomcolor/randomColor'
import FirebaseConnection from './FirebaseConnection'
import ChangeLanguageButton from './components/ChangeLanguageButton'

export default {
	name: 'Portfolio',
	data () {
		return { 
			language: 'fi',
			data: null
		}
	},
	components: {
		ChangeLanguageButton,
		Main,
		Header,
		ContentView,
		Footer,
		Loader,
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
		createKnowledgeColors(count) {
			return RandomColor({
				count: count,
				luminosity: 'light',
				format: 'rgba',
				alpha: 1
			})
		},
		addColorsToKnowledges(knowledges){
			let colorArray = this.createKnowledgeColors(knowledges.length)
			return knowledges.map((knowledge, i) => {
				return {
					name: knowledge,
					backgroundColor: colorArray[i]
				}
			})
		},	
		addColorToReference(references){
			references.forEach(reference => {	
				reference.skills = reference.skills.map(skill => ({
					name: skill,
					backgroundColor: this.getColorFromKnowledgesBySkillName(skill)
				}))
			})
			return references
		},
		getColorFromKnowledgesBySkillName(skillName){
			return this.data.knowledges.find(obj => obj.name === skillName).backgroundColor
		},
		changeLanguage(){
			this.language = this.language === 'fi' ? 'en' : 'fi'
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