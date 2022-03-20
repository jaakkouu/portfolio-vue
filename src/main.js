import { createApp } from 'vue';
import App from './App.vue'
import dataTestIds from '../tests/data-test-ids'
import './stylesheets/styles.scss'
import FontAwesomeIcon from "./utils/fontawesome"

const app = createApp(App)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.config.globalProperties.$dataTestIds = dataTestIds

app.mount("#app")
