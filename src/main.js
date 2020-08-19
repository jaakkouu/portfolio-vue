import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faMinus, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import './stylesheets/styles.scss'
library.add(faLinkedin, faGithubSquare, faMinus, faPlus, faSpinner)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
