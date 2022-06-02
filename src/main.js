import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'tinymce-4/tinymce/tinymce.js';
import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import store from './store'

createApp(App).use(store).mount('#app')
