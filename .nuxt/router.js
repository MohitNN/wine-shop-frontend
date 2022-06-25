import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _08311caa = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _10c5978b = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _37eecdde = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _6d1ffbcc = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _f22eab76 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _60cbe072 = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _4c25196c = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _433ff48d = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _0bfbbcfe = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _b24a4964 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _24a2734e = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _766b38d2 = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _b3107a8c = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _28e04fe2 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _61f9040c = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _929ec66e = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _52686598 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _7436b014 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _280858f4 = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _7a7c8a74 = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _096d8116 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _4bcbcbc6 = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _3e31caf8 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _74452458 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _2b8a4bb8 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _04fe804a = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _506ff62f = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _5a32258f = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _23b7b135 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _b440c8fe = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _c63e0c96 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _2315a148 = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _7b86388a = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _11710fcc = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _a3f1d6ec = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _66be9c12 = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _8a2c7b98 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _6b58d032 = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _6b66e7b3 = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _fa5cffac = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _4498037c = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _685e6a2d = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _14c6e401 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _3212dbb5 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _60ba7bf3 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _0da654fd = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _7797abcc = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _4e9441b2 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _4105507e = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _1732ba90 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _1740d211 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _174ee992 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _c4eef574 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _31ccf447 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _73dd3970 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _c040b308 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _7041dea2 = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _938b739e = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _02c1e18d = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _da812bf4 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _73bc66ce = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _0d27fa9f = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _2d4057d0 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _6957cb4e = () => interopDefault(import('..\\pages\\shop\\watch\\parent\\index.vue' /* webpackChunkName: "pages/shop/watch/parent/index" */))
const _523434a0 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _9a9ef37c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _284d419e = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _70d2d9c8 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _87c3af0e = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _8ccb9d7c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _31b187f6 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _7333db51 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _2566e4fe = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _5110f601 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _f63e0bf4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _7b9529ae = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _329ad8e2 = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _fd57f584 = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _6876a703 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _73c4c65c = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _ffb2ed0c = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _ace98a80 = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _462d4e0b = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _136cc798 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _8b28b810 = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _77fb23c6 = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _9abe3308 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _4e95d0af = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _2d162202 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _2bb5d606 = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _3467aa7e = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _4769586b = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _1672c580 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _3c94558a = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _2e8df17a = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _194c096e = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _f89c0e36 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _3c528012 = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _17870916 = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _3ae841c5 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _59d6eb4c = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _5da46675 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _888f4b76 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _a150e5b2 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _186cf20a = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _54d3e1a0 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _500d1200 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _bf1605b4 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _15408d70 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _9065a838 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _538e7b6a = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _4108da39 = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _725e4b4b = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _1d680679 = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _39082ffa = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _37a70e25 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _f375fb3e = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _f359cc3c = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _6da3145b = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _7d556126 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _6d88fd5c = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _256f4670 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _42bb3e24 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _651e6764 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _ee85afa4 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _6ecfd4ea = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _4816d116 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _76833aef = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _1c5d4dbf = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _1c6b6540 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _1c797cc1 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _ba99cf16 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _36f78776 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _69881312 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _27f9292b = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _4ee448c0 = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _6628dfbc = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _5f221884 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _7ab49df5 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _4659d2ec = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _f1314364 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _0a252bfe = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _7a002dbd = () => interopDefault(import('..\\pages\\shop\\watch\\parent\\index.vue' /* webpackChunkName: "pages/shop/watch/parent/index" */))
const _1c5bd042 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _2dc75973 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _6f15d762 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _d578b566 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _7d69cce8 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _1e6cb4b1 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _61669fb4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _ec35b57c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _74e290a2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _61bfc0f2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _528e0c37 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _49423bdf = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _8a9748de = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _6c25996f = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _049e8598 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> a517371a9076709b428cb6b5a7243e85c3f7d732

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
<<<<<<< HEAD
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
    path: "/collection/leftsidebar/:id?",
    component: _329ad8e2,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _fd57f584,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _6876a703,
=======
    component: _73c4c65c,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _ffb2ed0c,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _ace98a80,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _462d4e0b,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _136cc798,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _8b28b810,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _77fb23c6,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _9abe3308,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _4e95d0af,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _2d162202,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _2bb5d606,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _3467aa7e,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _4769586b,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _1672c580,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _3c94558a,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _2e8df17a,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _194c096e,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _f89c0e36,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _3c528012,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _17870916,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _3ae841c5,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _59d6eb4c,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _5da46675,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _888f4b76,
    name: "product-four-image"
  }, {
    path: "/shop/watch",
    component: _a150e5b2,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _186cf20a,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _54d3e1a0,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _500d1200,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _bf1605b4,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _15408d70,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _9065a838,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _538e7b6a,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _4108da39,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _725e4b4b,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _1d680679,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _39082ffa,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _37a70e25,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _f375fb3e,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _f359cc3c,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _6da3145b,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _7d556126,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _6d88fd5c,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _256f4670,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _42bb3e24,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _651e6764,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _ee85afa4,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _6ecfd4ea,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _4816d116,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _76833aef,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _1c5d4dbf,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _1c6b6540,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _1c797cc1,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _ba99cf16,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _36f78776,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _69881312,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _27f9292b,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _4ee448c0,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _6628dfbc,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _5f221884,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _7ab49df5,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _4659d2ec,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _f1314364,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _0a252bfe,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/shop/watch/parent",
    component: _7a002dbd,
    name: "shop-watch-parent"
  }, {
    path: "/page/account/auth/auth",
    component: _1c5bd042,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/watch/components/blog",
    component: _2dc75973,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _6f15d762,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _d578b566,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _7d69cce8,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _1e6cb4b1,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _61669fb4,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _ec35b57c,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _74e290a2,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _61bfc0f2,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _528e0c37,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _49423bdf,
    name: "shop-watch-components-top_products"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _8a9748de,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _6c25996f,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _049e8598,
>>>>>>> a517371a9076709b428cb6b5a7243e85c3f7d732
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
