// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite'
// import Framework7 from 'framework7/lite-bundle'
import LoginScreen from 'framework7/components/login-screen'

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue'
// import Framework7Vue, { registerComponents } from 'framework7-vue/bundle'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue)
Framework7.use([LoginScreen])

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles

import './css/app.scss';

// Import App Component
import App from './app.vue';

// Init App
const app = createApp(App);

// registerComponents(app)

// app.component('f7Page', f7Page)
// app.component('f7Navbar', f7Navbar)
// app.component('f7Block', f7Block)
// app.component('f7LoginScreen', f7LoginScreen)

// Mount the app
app.mount('#app');
