import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faMinus, faPlus, faSpinner, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import dataTestIds from '../tests/data-test-ids'
import './stylesheets/styles.scss'

const plugin = {
	install (Vue, options) {
		Vue.prototype.$dataTestIds = dataTestIds; 
	}
}

library.add(faLinkedin, faGithubSquare, faMinus, faPlus, faSpinner, faEye, faArrowLeft)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
