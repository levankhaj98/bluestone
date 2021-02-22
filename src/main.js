import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

Vue.directive('click-outside', {
  priority: 700,
  bind () {
    window.event = function (event) { 
        console.log('emitting event')
        this.vm.$emit(this.expression,event) 
      }
    this.el.addEventListener('click', this.stopProp)
    document.body.addEventListener('click',window.event)
  },
  
  unbind() {
    console.log('unbind')
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click',window.event)
  },
  stopProp(event) {event.stopPropagation() }
})

new Vue({
    el:'#app',
  render: h => h(App)
}).$mount('#app')
