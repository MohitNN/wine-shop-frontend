import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading'
import firebase from 'firebase/app'
import PayPal from 'vue-paypal-checkout'
import VueLazyLoad from 'vue-lazyload'
import ProductZoomer from 'vue-product-zoomer'
import VueScrollTo from 'vue-scrollto'
import 'vue-select/dist/vue-select.css';
import VueFeather from 'vue-feather';
import { VueEditor } from "vue2-editor";
import VueSweetalert2 from 'vue-sweetalert2';
import Pagination from 'vue-pagination-2';
import VueMoment from 'vue-moment';
import moment from 'moment';

Vue.use(VueMoment, { moment });

Vue.component('pagination', Pagination);


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

Vue.use(VueAwesomeSwiper)
Vue.use(VueEditor)
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)
Vue.use(InfiniteLoading)
Vue.component('VueEditor', VueEditor);
Vue.component('paypal-checkout', PayPal)
Vue.use(VueLazyLoad)
Vue.use(ProductZoomer)
Vue.use(VueScrollTo)
Vue.use(VueFeather);
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
  position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
const config = {
  apiKey: "AIzaSyCY13OKHivdCZiGHpxs7iYGJbWhsfTNDmU",
  authDomain: "vuebeer-e4df5.firebaseapp.com",
  projectId: "vuebeer-e4df5",
  storageBucket: "vuebeer-e4df5.appspot.com",
  messagingSenderId: "612782721290",
  appId: "G-0Q39HLVR87"
};
firebase.initializeApp(config)