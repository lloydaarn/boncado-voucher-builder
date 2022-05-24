import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

createApp(App).use(store).mount('#app')

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    alert('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;

  });