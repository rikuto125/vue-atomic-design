import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

//import { library } from '@fortawesome/fontawesome-svg-core'
//import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//library.add(faExternalLinkAlt)

const app = createApp(App);

//app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);

app.mount('#app');