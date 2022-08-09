import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'
import gloable from './modules/gloable'
import menu from './modules/menu'
import products from './modules/products'
import cart from './modules/cart'
import filter from './modules/filter'
import layout from './modules/layout'
import saveAddress from './modules/saveAddress'

import dashboard from './admin/modules/dashboard.js';
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
import subCategory from './admin/modules/subcategory.js';
import Products from './admin/modules/Products.js';
import coupon from './admin/modules/coupon.js';
import brand from './admin/modules/brand.js';
import order from './admin/modules/order.js';
import types from './admin/modules/types.js';
import banner from './admin/modules/banner.js';
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
      gloable,
      layout,
      saveAddress,
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
      subCategory,
      Products,
      coupon,
      brand,
      order,
      types,
      banner,
      dashboard
    }
  })
}
export default createStore
