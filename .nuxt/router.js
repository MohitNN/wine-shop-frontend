import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47a4f25f = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _32a06757 = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _44a62846 = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _3a21a864 = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _ae790bde = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _0a80167b = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _d03acbc0 = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _651ac459 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _7b516c9c = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _5d366802 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _1e46c61a = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _cf73eec4 = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _9a699124 = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _30d8efc3 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _74ee9cd8 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _026e1d7d = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _5ebbda4c = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _ca7bf87c = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _3e5bf73a = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _269b9992 = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _6d475fe2 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _25e09a2e = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _0b337790 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _183d9188 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _577ce184 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _13e6cca7 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _43c9b43a = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _a6db6d7a = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _3d36dae9 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _708b2966 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _9971f2fe = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _12997328 = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _752a8b56 = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _7234ea64 = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _603c3754 = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _ff847474 = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _572e2830 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _fc824604 = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _fc661702 = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _8490f244 = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _5e172d30 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _1480eaf9 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _29dcedcd = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _4728e581 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _2334a8b2 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _4577309e = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _51df59ce = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _0adea21a = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _77a0e79c = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _79558948 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _79395a46 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _791d2b44 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _49ab0612 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _442115da = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _7233e414 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _70cb2570 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _28434663 = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _4490f036 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _644c0041 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _627921d2 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _24c1e366 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _2175952a = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _e26b12f8 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _7e6dd51a = () => interopDefault(import('..\\pages\\shop\\watch\\parent\\index.vue' /* webpackChunkName: "pages/shop/watch/parent/index" */))
const _25681b08 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _fb62ce14 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _007ada52 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _2920b1d0 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _255f1a45 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _31c0a1e4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _6d77125e = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _ca9dc5f6 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _04d7049c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _9d15a896 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _3329ce8c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _45c16f3c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _5a559fae = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _878be81c = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _418895b7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog/blog-detail",
    component: _47a4f25f,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _32a06757,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _44a62846,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _3a21a864,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _ae790bde,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _0a80167b,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _d03acbc0,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _651ac459,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _7b516c9c,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _5d366802,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _1e46c61a,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _cf73eec4,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _9a699124,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _30d8efc3,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _74ee9cd8,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _026e1d7d,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _5ebbda4c,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _ca7bf87c,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _3e5bf73a,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _269b9992,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _6d475fe2,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _25e09a2e,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _0b337790,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _183d9188,
    name: "product-four-image"
  }, {
    path: "/shop/watch",
    component: _577ce184,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _13e6cca7,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _43c9b43a,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _a6db6d7a,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _3d36dae9,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _708b2966,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _9971f2fe,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _12997328,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _752a8b56,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _7234ea64,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _603c3754,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _ff847474,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _572e2830,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _fc824604,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _fc661702,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _8490f244,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _5e172d30,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _1480eaf9,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _29dcedcd,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _4728e581,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _2334a8b2,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _4577309e,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _51df59ce,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _0adea21a,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _77a0e79c,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _79558948,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _79395a46,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _791d2b44,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _49ab0612,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _442115da,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _7233e414,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _70cb2570,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _28434663,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _4490f036,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _644c0041,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _627921d2,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _24c1e366,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _2175952a,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _e26b12f8,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/shop/watch/parent",
    component: _7e6dd51a,
    name: "shop-watch-parent"
  }, {
    path: "/page/account/auth/auth",
    component: _25681b08,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/watch/components/blog",
    component: _fb62ce14,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _007ada52,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _2920b1d0,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _255f1a45,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _31c0a1e4,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _6d77125e,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _ca9dc5f6,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _04d7049c,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _9d15a896,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _3329ce8c,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _45c16f3c,
    name: "shop-watch-components-top_products"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _5a559fae,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _878be81c,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _418895b7,
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
