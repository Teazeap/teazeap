/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import store from './store';
import VeeValidate from "vee-validate";
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.config.productionTip = false;

const options = {
  confirmButtonColor: '#f96332',
  cancelButtonColor: '#ff7674',
};

Vue.use(VeeValidate);
Vue.use(VueSweetalert2, options)
Vue.use(NowUiKit);

new Vue({
  router,
  store,
  created () {
    AOS.init()
},
  render: h => h(App)
}).$mount('#app');
