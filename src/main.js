// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueGtag from 'vue-gtag'
import router from './router'

var VueCookie = require('vue-cookie');

Vue.use(VueGtag, {
  config: {
    id: 'UA-167215120-1'
  }
});
Vue.use(VueCookie);
Vue.config.productionTip = false

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function() { console.log("Service Worker Registered."); });
  });
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
