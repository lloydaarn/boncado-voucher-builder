import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

createApp(App).use(store).mount('#app')

let installButton = document.createElement('button');

let prompt;
window.addEventListener('beforeinstallprompt', function(e){
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  prompt = e;
});

installButton.addEventListener('click', function(){
   prompt.prompt();
})

let installed = false;
installButton.addEventListener('click', async function(){
  prompt.prompt();
  let result = await that.prompt.userChoice;
  if (result&&result.outcome === 'accepted') {
     installed = true;
  }
})

window.addEventListener('appinstalled', async function(e) {
  alert("done");
});