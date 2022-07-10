import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'


const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _33cbf982,
    name: "admin"
  }, {
    path: "/admin/addpage",
    component: _54e1ee60,
    name: "admin-addpage"
  }, {
    path: "/admin/brand",
    component: _28b68eeb,
    name: "admin-brand"
  }, {
    path: "/admin/category",
    component: _bc3a8f78,
    name: "admin-category"
  }, {
    path: "/admin/changePassword",
    component: _18f60ab7,
    name: "admin-changePassword"
  }, {
    path: "/admin/coupon",
    component: _c52e0bc8,
    name: "admin-coupon"
  }, {
    path: "/admin/dashboard",
    component: _3b608378,
    name: "admin-dashboard"
  }, {
    path: "/admin/editProfile",
    component: _eed2159a,
    name: "admin-editProfile"
  }, {
    path: "/admin/login",
    component: _4b29ec6e,
    name: "admin-login"
  }, {
    path: "/admin/order",
    component: _4bd400c4,
    name: "admin-order"
  }, {
    path: "/admin/product",
    component: _9c087afa,
    name: "admin-product"
  }, {
    path: "/admin/sub_category",
    component: _752317c5,
    name: "admin-sub_category"
  }, {
    path: "/admin/type",
    component: _36e2b488,
    name: "admin-type"
  }, {
    path: "/admin/user",
    component: _69ef8357,
    name: "admin-user"
  }, {
    path: "/blog/blog-detail",
    component: _08311caa,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _10c5978b,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _37eecdde,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _6d1ffbcc,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _f22eab76,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _60cbe072,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _4c25196c,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _433ff48d,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _0bfbbcfe,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _b24a4964,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _24a2734e,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _766b38d2,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _b3107a8c,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _28e04fe2,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _61f9040c,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _929ec66e,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _52686598,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _7436b014,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _280858f4,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _7a7c8a74,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _096d8116,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _4bcbcbc6,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _3e31caf8,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _74452458,
    name: "product-four-image"
  }, {
    path: "/shop/watch",
    component: _2b8a4bb8,
    name: "shop-watch"
  }, {
    path: "/admin/brand/add-brand",
    component: _01b7ec74,
    name: "admin-brand-add-brand"
  }, {
    path: "/admin/category/add-category",
    component: _17b589b0,
    name: "admin-category-add-category"
  }, {
    path: "/admin/coupon/create-coupon",
    component: _a4d0ba3e,
    name: "admin-coupon-create-coupon"
  }, {
    path: "/admin/product/add-product",
    component: _eb310b98,
    name: "admin-product-add-product"
  }, {
    path: "/admin/sub_category/add-sub-category",
    component: _507c7318,
    name: "admin-sub_category-add-sub-category"
  }, {
    path: "/admin/type/addType",
    component: _d4f3799e,
    name: "admin-type-addType"
  }, {
    path: "/blog/widgets/blog-list",
    component: _04fe804a,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _506ff62f,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _5a32258f,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _23b7b135,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _b440c8fe,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _c63e0c96,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _2315a148,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _7b86388a,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _11710fcc,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _a3f1d6ec,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _66be9c12,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _8a2c7b98,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _6b58d032,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _6b66e7b3,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _fa5cffac,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _4498037c,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _685e6a2d,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _14c6e401,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _3212dbb5,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _60ba7bf3,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _0da654fd,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _7797abcc,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _4e9441b2,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _4105507e,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _1732ba90,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _1740d211,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _174ee992,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _c4eef574,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _31ccf447,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _73dd3970,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _c040b308,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _7041dea2,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _938b739e,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _02c1e18d,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _da812bf4,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _73bc66ce,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _0d27fa9f,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _2d4057d0,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/shop/watch/parent",
    component: _6957cb4e,
    name: "shop-watch-parent"
  }, {
    path: "/page/account/auth/auth",
    component: _523434a0,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/watch/components/blog",
    component: _9a9ef37c,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _284d419e,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _70d2d9c8,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _87c3af0e,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _8ccb9d7c,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _31b187f6,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _7333db51,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _2566e4fe,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _5110f601,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _f63e0bf4,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _7b9529ae,
    name: "shop-watch-components-top_products"
  }, {
    path: "/admin/brand/:editbrand",
    component: _78b5adf5,
    name: "admin-brand-editbrand"
  }, {
    path: "/admin/category/:editcategory",
    component: _4820244e,
    name: "admin-category-editcategory"
  }, {
    path: "/admin/coupon/:editCoupon",
    component: _2837f48e,
    name: "admin-coupon-editCoupon"
  }, {
    path: "/admin/order/:editOrder",
    component: _d6aac83a,
    name: "admin-order-editOrder"
  }, {
    path: "/admin/product/:editProduct",
    component: _e5c711b6,
    name: "admin-product-editProduct"
  }, {
    path: "/admin/sub_category/:editsubcategory",
    component: _1069dc92,
    name: "admin-sub_category-editsubcategory"
  }, {
    path: "/admin/type/:edittype",
    component: _6520d44e,
    name: "admin-type-edittype"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _329ad8e2,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _fd57f584,
    name: "product-sidebar-id"
  }, {
    path: "/product/:id?",
    component: _12fdf6de,
    name: "product-id"
  }, {
    path: "/store/:slug?",
    component: _e5b4d930,
    name: "store-slug"
  }, {
    path: "/",
    component: _6876a703,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
