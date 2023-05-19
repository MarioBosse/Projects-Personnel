import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
//import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  //components,
  //directives,
})

createApp(App).use(vuetify).mount('#app')






//import { createApp } from 'vue'
//import App from './App.vue'


//const { createApp } = Vue
//const { createVuetify } = Vuetify

//const vuetify = createVuetify()

//const app = createApp()
//app.use(vuetify).mount('#app')
