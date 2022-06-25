
import admin_employee from './modules/employee.js'
import admin_menu from './modules/menu.js'
import admin_order from './modules/order.js'
import admin_product from './modules/product.js'
import admin_digitalProducts from './modules/digital-products.js';
import admin_coupon from './modules/coupon.js';
import admin_pages from './modules/pages.js'
import admin_media from './modules/media.js'
import admin_user from './modules/user.js'
import admin_vendor from './modules/vendor.js'
import admin_localization from './modules/localization.js'
import admin_invoice from './modules/invoice.js'
import { authentication } from './modules/authentication.js'
import admin_reports from './modules/reports.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {
        changeLang(state, payload) {
            localStorage.setItem('currentLanguage', payload.id)
            localStorage.setItem('currentLanguageIcon', payload.icon)
            window.location.reload();
        }
    },
    actions: {
        setLang({ commit }, payload) {
            commit('changeLang', payload)
        }
    },
    modules: {
        admin_menu,
        admin_product,
        admin_order,
        admin_employee,
        admin_digitalProducts,
        admin_coupon,
        admin_pages,
        admin_media,
        admin_user,
        admin_vendor,
        admin_localization,
        admin_invoice,
        admin_authentication,
        admin_reports
    }
})