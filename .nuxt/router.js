import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f5b1756 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0dbe3198 = () => interopDefault(import('..\\pages\\admin\\addpage.vue' /* webpackChunkName: "pages/admin/addpage" */))
const _16d5fa97 = () => interopDefault(import('..\\pages\\admin\\brand\\index.vue' /* webpackChunkName: "pages/admin/brand/index" */))
const _3c559d18 = () => interopDefault(import('..\\pages\\admin\\category\\index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _5efe1fae = () => interopDefault(import('..\\pages\\admin\\coupnes\\index.vue' /* webpackChunkName: "pages/admin/coupnes/index" */))
const _72b3d218 = () => interopDefault(import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _6eeb1516 = () => interopDefault(import('..\\pages\\admin\\login\\index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _39f36c70 = () => interopDefault(import('..\\pages\\admin\\order\\index.vue' /* webpackChunkName: "pages/admin/order/index" */))
const _493fecf2 = () => interopDefault(import('..\\pages\\admin\\products\\index.vue' /* webpackChunkName: "pages/admin/products/index" */))
const _1f2f7299 = () => interopDefault(import('..\\pages\\admin\\sub_category\\index.vue' /* webpackChunkName: "pages/admin/sub_category/index" */))
const _719df22b = () => interopDefault(import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _7805d857 = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _a98f0742 = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _8c52ba36 = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _7d59b7c6 = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _215b8f19 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _98e57f1a = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _6f78ffd0 = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _449a4d3e = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _6c4eb7aa = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _072dd5fa = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _0b1f05bc = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _10de1da6 = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _468d9566 = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _4508a08a = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _1b45d040 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _32cf0375 = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _1b038f78 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _6a23a0ca = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _4bc9819c = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _0e50d89a = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _54fc9eea = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _6a7e2df1 = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _d65e5fa0 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _98064d00 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _3338ba8c = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _94bcbbc0 = () => interopDefault(import('..\\pages\\admin\\brand\\add-brand.vue' /* webpackChunkName: "pages/admin/brand/add-brand" */))
const _b03a0058 = () => interopDefault(import('..\\pages\\admin\\category\\add-category.vue' /* webpackChunkName: "pages/admin/category/add-category" */))
const _23d33bee = () => interopDefault(import('..\\pages\\admin\\coupnes\\create-coupon.vue' /* webpackChunkName: "pages/admin/coupnes/create-coupon" */))
const _5437d563 = () => interopDefault(import('..\\pages\\admin\\products\\add-product.vue' /* webpackChunkName: "pages/admin/products/add-product" */))
const _2eb5890e = () => interopDefault(import('..\\pages\\admin\\products\\category.vue' /* webpackChunkName: "pages/admin/products/category" */))
const _61c1fc60 = () => interopDefault(import('..\\pages\\admin\\products\\list-product.vue' /* webpackChunkName: "pages/admin/products/list-product" */))
const _226a1b7b = () => interopDefault(import('..\\pages\\admin\\products\\sub-category.vue' /* webpackChunkName: "pages/admin/products/sub-category" */))
const _fd13c1c0 = () => interopDefault(import('..\\pages\\admin\\sub_category\\add-sub-category.vue' /* webpackChunkName: "pages/admin/sub_category/add-sub-category" */))
const _0c1403d6 = () => interopDefault(import('..\\pages\\admin\\sub_category\\edit-sub-category.vue' /* webpackChunkName: "pages/admin/sub_category/edit-sub-category" */))
const _726480a2 = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _3022144a = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _4851913b = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _50bd323e = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _40528055 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _662df989 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _9b1fffa0 = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _5154425e = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _a9f58674 = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _4879f95e = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _1aa851be = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _6ed377e0 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _34a5d006 = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _34b3e787 = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _66c4b0d6 = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _0efc8db0 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _18e85601 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _82598256 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _47c192ee = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _0f8d08c2 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _7d37ccae = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _5bb329c6 = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _7328c3fb = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _430fe42a = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _7086b338 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _706a8436 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _704e5534 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _4e12711a = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _3b523fca = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _769b4f1c = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _0f7ec760 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _f9834b4a = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _7789b846 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _a7138b8e = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _1f9626da = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _57baab76 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _4c6fdc73 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _52169f08 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _13642622 = () => interopDefault(import('..\\pages\\shop\\watch\\parent\\index.vue' /* webpackChunkName: "pages/shop/watch/parent/index" */))
const _bf9a34f8 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _666e4aee = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _edfe5f6c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _714aebc8 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _52e25b4d = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _6f587816 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _266f1dd9 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _fd968e06 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _f3cb18ac = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _0c703fad = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _2e9552b2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _2549825a = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _4202adc9 = () => interopDefault(import('..\\pages\\admin\\brand\\_editbrand.vue' /* webpackChunkName: "pages/admin/brand/_editbrand" */))
const _c02a82a6 = () => interopDefault(import('..\\pages\\admin\\category\\_editcategory.vue' /* webpackChunkName: "pages/admin/category/_editcategory" */))
const _ea086294 = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _654735ea = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _614ea0a2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7f5b1756,
    name: "admin"
  }, {
    path: "/admin/addpage",
    component: _0dbe3198,
    name: "admin-addpage"
  }, {
    path: "/admin/brand",
    component: _16d5fa97,
    name: "admin-brand"
  }, {
    path: "/admin/category",
    component: _3c559d18,
    name: "admin-category"
  }, {
    path: "/admin/coupnes",
    component: _5efe1fae,
    name: "admin-coupnes"
  }, {
    path: "/admin/dashboard",
    component: _72b3d218,
    name: "admin-dashboard"
  }, {
    path: "/admin/login",
    component: _6eeb1516,
    name: "admin-login"
  }, {
    path: "/admin/order",
    component: _39f36c70,
    name: "admin-order"
  }, {
    path: "/admin/products",
    component: _493fecf2,
    name: "admin-products"
  }, {
    path: "/admin/sub_category",
    component: _1f2f7299,
    name: "admin-sub_category"
  }, {
    path: "/admin/user",
    component: _719df22b,
    name: "admin-user"
  }, {
    path: "/blog/blog-detail",
    component: _7805d857,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _a98f0742,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _8c52ba36,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _7d59b7c6,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _215b8f19,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _98e57f1a,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _6f78ffd0,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _449a4d3e,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _6c4eb7aa,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _072dd5fa,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _0b1f05bc,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _10de1da6,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _468d9566,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _4508a08a,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _1b45d040,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _32cf0375,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _1b038f78,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _6a23a0ca,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _4bc9819c,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _0e50d89a,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _54fc9eea,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _6a7e2df1,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _d65e5fa0,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _98064d00,
    name: "product-four-image"
  }, {
    path: "/shop/watch",
    component: _3338ba8c,
    name: "shop-watch"
  }, {
    path: "/admin/brand/add-brand",
    component: _94bcbbc0,
    name: "admin-brand-add-brand"
  }, {
    path: "/admin/category/add-category",
    component: _b03a0058,
    name: "admin-category-add-category"
  }, {
    path: "/admin/coupnes/create-coupon",
    component: _23d33bee,
    name: "admin-coupnes-create-coupon"
  }, {
    path: "/admin/products/add-product",
    component: _5437d563,
    name: "admin-products-add-product"
  }, {
    path: "/admin/products/category",
    component: _2eb5890e,
    name: "admin-products-category"
  }, {
    path: "/admin/products/list-product",
    component: _61c1fc60,
    name: "admin-products-list-product"
  }, {
    path: "/admin/products/sub-category",
    component: _226a1b7b,
    name: "admin-products-sub-category"
  }, {
    path: "/admin/sub_category/add-sub-category",
    component: _fd13c1c0,
    name: "admin-sub_category-add-sub-category"
  }, {
    path: "/admin/sub_category/edit-sub-category",
    component: _0c1403d6,
    name: "admin-sub_category-edit-sub-category"
  }, {
    path: "/blog/widgets/blog-list",
    component: _726480a2,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _3022144a,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _4851913b,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _50bd323e,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _40528055,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _662df989,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _9b1fffa0,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _5154425e,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _a9f58674,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _4879f95e,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _1aa851be,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _6ed377e0,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _34a5d006,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _34b3e787,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _66c4b0d6,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _0efc8db0,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _18e85601,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _82598256,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _47c192ee,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _0f8d08c2,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _7d37ccae,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _5bb329c6,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _7328c3fb,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _430fe42a,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _7086b338,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _706a8436,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _704e5534,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _4e12711a,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _3b523fca,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _769b4f1c,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _0f7ec760,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _f9834b4a,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _7789b846,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _a7138b8e,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _1f9626da,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _57baab76,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _4c6fdc73,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _52169f08,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/shop/watch/parent",
    component: _13642622,
    name: "shop-watch-parent"
  }, {
    path: "/page/account/auth/auth",
    component: _bf9a34f8,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/watch/components/blog",
    component: _666e4aee,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _edfe5f6c,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _714aebc8,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _52e25b4d,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _6f587816,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _266f1dd9,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _fd968e06,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _f3cb18ac,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _0c703fad,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _2e9552b2,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _2549825a,
    name: "shop-watch-components-top_products"
  }, {
    path: "/admin/brand/:editbrand",
    component: _4202adc9,
    name: "admin-brand-editbrand"
  }, {
    path: "/admin/category/:editcategory",
    component: _c02a82a6,
    name: "admin-category-editcategory"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _ea086294,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _654735ea,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _614ea0a2,
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
