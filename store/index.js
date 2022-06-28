import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
import filter from './modules/filter'
import layout from './modules/layout'

import admin_employee from './admin/modules/employee.js'
import admin_menu from './admin/modules/menu.js'
import admin_order from './admin/modules/order.js'
import admin_product from './admin/modules/product.js'
import admin_adminauth from './admin/modules/adminauth'
import admin_digitalProducts from './admin/modules/digital-products.js';
import admin_coupon from './admin/modules/coupon.js';
import admin_pages from './admin/modules/pages.js'
import admin_media from './admin/modules/media.js'
import admin_user from './admin/modules/user.js'
import admin_vendor from './admin/modules/vendor.js'
import admin_localization from './admin/modules/localization.js'
import admin_invoice from './admin/modules/invoice.js'
import { authentication } from './admin/modules/authentication.js'
import admin_reports from './admin/modules/reports.js';
import category from './admin/modules/category.js';
import sub_category from './admin/modules/sub_category.js';
import Products from './admin/modules/Products.js';
import setCoupons from './admin/modules/setCoupons.js';
import brand from './admin/modules/brand.js';
import { setAuthToken, resetAuthToken } from "@/config/auth";


if (process.browser) {
  const token = localStorage.getItem("x-access-token");
  if (token) {
    setAuthToken(token);
  } else {
    resetAuthToken();
  }
}
Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      blog,
      menu,
      products,
      cart,
      filter,
      layout,
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
      authentication,
      admin_reports,
      admin_adminauth,
      category,
      sub_category,
      Products,
      setCoupons,
      brand
    }
  })
}
export default createStore
