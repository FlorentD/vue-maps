import Vue from 'vue';
import VueFrom from 'vue-form';
import App from './App.vue';

Vue.use(VueFrom);

console.log(__IMAGE_PATH__);

new Vue(App).$mount('#app');
