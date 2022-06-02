import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'tinymce/tinymce.min.js';
import 'tinymce/themes/modern/theme.min.js';
import 'tinymce/skins/lightgray/skin.min.css';
import 'tinymce/skins/lightgray/content.inline.min.css';
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

createApp(App).use(store).mount('#app')
