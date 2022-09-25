import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let main =  createApp(App);
main.use(store);
main.use(router);


main.mount('#app');
