
import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import store from './store';
import VeeValidate from "vee-validate";
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import i18n from './i18n'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import CountryFlag from 'vue-country-flag'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false;

const options = {
  confirmButtonColor: '#f96332',
  cancelButtonColor: '#ff7674',
};

Vue.use(VeeValidate);
Vue.use(VueSweetalert2, options)
Vue.use(NowUiKit);
Vue.use(ElementUI);


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone, faHeadset, faUser, faUserGroup, faCode, faUsersViewfinder, faBlog, faBusinessTime, faGraduationCap, faPhoneVolume, faCrown)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
