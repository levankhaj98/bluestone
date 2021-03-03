import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

new Vue({
    el:'#app',
  render: h => h(App)
}).$mount('#app')

module.exports = {
  build: {
    assetsPublicPath: '',
  },
  dev: {
    assetsPublicPath: '/',
  }
}