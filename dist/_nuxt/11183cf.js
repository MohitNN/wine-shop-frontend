(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1079:function(t,e,r){"use strict";r.r(e);r(8),r(7),r(9),r(6),r(10);var c=r(1),o=(r(5),r(4),r(81),r(116),r(27)),l=r(962),n=r(214),d=r(957),v=r(958),f=r(967),m=r(960),h=r(961),_=r(963);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{Header:n.a,Footer:d.a,Breadcrumbs:v.a,productBox1:l.a,sidebar:f.a,quickviewModel:m.a,compareModel:h.a,cartModel:_.a},data:function(){return{bannerimagepath:r(341),col2:!1,col3:!0,col4:!1,col6:!1,listview:!1,priceArray:[],allfilters:[],items:[],current:1,paginate:12,paginateRange:3,pages:[],paginates:"",showquickviewmodel:!1,showcomparemodal:!1,showcartmodal:!1,quickviewproduct:{},comapreproduct:{},cartproduct:{},dismissSecs:5,dismissCountDown:0,swiperOption:{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:y(y({},Object(o.e)({productslist:function(t){return t.products.productslist},currency:function(t){return t.products.currency}})),Object(o.c)({filterProduct:"filter/filterProducts",tags:"filter/setTags",curr:"products/changeCurrency"})),mounted:function(){this.updatePaginate(1)},methods:{getCategoryProduct:function(t){return this.productslist.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))},getImgUrl:function(path){return r(340)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100},onChangeSort:function(t){this.$store.dispatch("filter/sortProducts",t.target.value)},gridView:function(){this.col4=!0,this.col2=!1,this.col3=!1,this.col6=!1,this.listview=!1},listView:function(){this.listview=!0,this.col4=!1,this.col2=!1,this.col3=!1,this.col6=!1},grid2:function(){this.col2=!0,this.col3=!1,this.col4=!1,this.col6=!1,this.listview=!1},grid3:function(){this.col3=!0,this.col2=!1,this.col4=!1,this.col6=!1,this.listview=!1},grid4:function(){this.col4=!0,this.col2=!1,this.col3=!1,this.col6=!1,this.listview=!1},grid6:function(){this.col6=!0,this.col2=!1,this.col3=!1,this.col4=!1,this.listview=!1},removeTags:function(t){this.allfilters.splice(this.allfilters.indexOf(t),1)},removeAllTags:function(){this.allfilters.splice(0,this.allfilters.length)},getCategoryFilter:function(){this.updatePaginate(1),this.$store.dispatch("filter/getCategoryFilter",this.$route.params.id)},allfilter:function(t){this.allfilters=t,this.$store.dispatch("filter/setTags",t),this.getPaginate(),this.updatePaginate(1)},pricefilterArray:function(t){this.getCategoryFilter(),this.$store.dispatch("filter/priceFilter",t),this.getPaginate(),this.updatePaginate(1)},getPaginate:function(){this.paginates=Math.round(this.filterProduct.length/this.paginate),this.pages=[];for(var i=0;i<this.paginates;i++)this.pages.push(i+1)},setPaginate:function(i){return 1===this.current?i<this.paginate:i>=this.paginate*(this.current-1)&&i<this.current*this.paginate},updatePaginate:function(i){this.current=i;var t=0,e=0;this.current<this.paginateRange-1?e=(t=1)+this.paginateRange-1:(t=this.current-1,e=this.current+1),t<1&&(t=1),e>this.paginates&&(e=this.paginates),this.pages=[];for(var r=t;r<=e;r++)this.pages.push(r);return this.pages},alert:function(t){this.dismissCountDown=t},showQuickview:function(t,e){this.showquickviewmodel=t,this.quickviewproduct=e},showCoampre:function(t,e){this.showcomparemodal=t,this.comapreproduct=e},closeCompareModal:function(t){this.showcomparemodal=t},showCart:function(t,e){this.showcartmodal=t,this.cartproduct=e},closeCartModal:function(t){this.showcartmodal=t}}},k=r(34),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("Breadcrumbs",{attrs:{title:"collection"}}),t._v(" "),c("section",{staticClass:"section-b-space ratio_asos"},[c("div",{staticClass:"collection-wrapper"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-3"},[c("sidebar",{on:{allFilters:t.allfilter,priceVal:t.pricefilterArray,categoryfilter:t.getCategoryFilter}})],1),t._v(" "),c("div",{staticClass:"collection-content col"},[c("div",{staticClass:"page-main-content"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-12"},[c("div",{staticClass:"top-banner-wrapper"},[c("a",{attrs:{href:"#"}},[c("img",{staticClass:"img-fluid",attrs:{src:r(345),alt:""}})]),t._v(" "),t._m(0)]),t._v(" "),c("ul",{staticClass:"product-filter-tags"},[t._l(t.allfilters,(function(e,r){return c("li",{key:r,staticClass:"mr-1"},[c("a",{staticClass:"filter_tag",attrs:{href:"javascript:void(0)"}},[t._v(t._s(e)),c("i",{staticClass:"ti-close",on:{click:function(r){return t.removeTags(e)}}})])])})),t._v(" "),t.allfilters.length>0?c("li",{staticClass:"clear_filter"},[c("a",{staticClass:"clear_filter",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.removeAllTags()}}},[t._v("Clear all")])]):t._e()],2),t._v(" "),c("div",{staticClass:"collection-product-wrapper"},[c("div",{staticClass:"product-top-filter"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("div",{staticClass:"product-filter-content"},[c("div",{staticClass:"search-count"},[c("h5",[t._v("Showing Products 1-12 of "+t._s(t.filterProduct.length)+" Result")])]),t._v(" "),c("div",{staticClass:"collection-view"},[c("ul",[c("li",{on:{click:function(e){return t.gridView()}}},[c("i",{staticClass:"fa fa-th grid-layout-view"})]),t._v(" "),c("li",{on:{click:function(e){return t.listView()}}},[c("i",{staticClass:"fa fa-list-ul list-layout-view"})])])]),t._v(" "),c("div",{staticClass:"collection-grid-view"},[c("ul",[c("li",[c("img",{staticClass:"product-2-layout-view",attrs:{src:r(346)},on:{click:function(e){return t.grid2()}}})]),t._v(" "),c("li",[c("img",{staticClass:"product-3-layout-view",attrs:{src:r(347)},on:{click:function(e){return t.grid3()}}})]),t._v(" "),c("li",[c("img",{staticClass:"product-4-layout-view",attrs:{src:r(348)},on:{click:function(e){return t.grid4()}}})]),t._v(" "),c("li",[c("img",{staticClass:"product-6-layout-view",attrs:{src:r(349)},on:{click:function(e){return t.grid6()}}})])])]),t._v(" "),c("div",{staticClass:"product-page-filter"},[c("select",{on:{change:function(e){return t.onChangeSort(e)}}},[c("option",{attrs:{value:"all"}},[t._v("Sorting Items")]),t._v(" "),c("option",{attrs:{value:"a-z"}},[t._v("Alphabetically, A-Z")]),t._v(" "),c("option",{attrs:{value:"z-a"}},[t._v("Alphabetically, Z-A")]),t._v(" "),c("option",{attrs:{value:"low"}},[t._v("price, low to high")]),t._v(" "),c("option",{attrs:{value:"high"}},[t._v("price, high to low")])])])])])])]),t._v(" "),c("div",{staticClass:"product-wrapper-grid",class:{"list-view":1==t.listview}},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-sm-12"},[0==t.filterProduct.length?c("div",{staticClass:"text-center section-t-space section-b-space"},[c("img",{staticClass:"img-fluid",attrs:{src:r(344),alt:""}}),t._v(" "),c("h3",{staticClass:"mt-3"},[t._v("Sorry! Couldn't find the product you were looking For!!!")]),t._v(" "),c("div",{staticClass:"col-12 mt-3"},[c("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/"}}},[t._v("continue shopping")])],1)]):t._e()]),t._v(" "),t._l(t.filterProduct,(function(e,r){return c("div",{directives:[{name:"show",rawName:"v-show",value:t.setPaginate(r),expression:"setPaginate(index)"}],key:r,staticClass:"col-grid-box",class:{"col-lg-3 col-md-4 col-sm-6":1==t.col4,"col-lg-4 col-sm-6":1==t.col3,"col-sm-6":1==t.col2,"col-lg-2 col-md-4 col-sm-6":1==t.col6,"col-lg-12":1==t.listview}},[c("div",{staticClass:"product-box"},[c("productBox1",{attrs:{product:e,index:r},on:{opencartmodel:t.showCart,showCompareModal:t.showCoampre,openquickview:t.showQuickview,showalert:t.alert,alertseconds:t.alert}})],1)])}))],2)]),t._v(" "),t.filterProduct.length>this.paginate?c("div",{staticClass:"product-pagination mb-0"},[c("div",{staticClass:"theme-paggination-block"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[c("nav",{attrs:{"aria-label":"Page navigation"}},[c("ul",{staticClass:"pagination"},[c("li",{staticClass:"page-item"},[c("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updatePaginate(t.current-1)}}},[t._m(1)])]),t._v(" "),t._l(this.pages,(function(e,r){return c("li",{key:r,staticClass:"page-item",class:{active:e==t.current}},[c("a",{staticClass:"page-link",attrs:{href:"javascrip:void(0)"},on:{click:function(r){return r.preventDefault(),t.updatePaginate(e)}}},[t._v(t._s(e))])])})),t._v(" "),c("li",{staticClass:"page-item"},[c("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.updatePaginate(t.current+1)}}},[t._m(2)])])],2)])]),t._v(" "),c("div",{staticClass:"col-xl-6 col-md-6 col-sm-12"},[c("div",{staticClass:"product-search-count-bottom"},[c("h5",[t._v("Showing Products 1-12 of "+t._s(t.filterProduct.length)+" Result")])])])])])]):t._e()])])])])])])])])]),t._v(" "),c("b-alert",{attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.alert}},[c("p",[t._v("Product Is successfully added to your wishlist.")])]),t._v(" "),c("quickviewModel",{attrs:{openModal:t.showquickviewmodel,productData:t.quickviewproduct}}),t._v(" "),c("compareModel",{attrs:{openCompare:t.showcomparemodal,productData:t.comapreproduct},on:{closeCompare:t.closeCompareModal}}),t._v(" "),c("cartModel",{attrs:{openCart:t.showcartmodal,productData:t.cartproduct,products:t.filterProduct},on:{closeCart:t.closeCartModal}}),t._v(" "),c("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top-banner-content small-section"},[r("h4",[t._v("fashion")]),t._v(" "),r("h5",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")]),t._v(" "),r("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports},957:function(t,e,r){"use strict";var c={},o=r(34),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  Heyy\n")])}),[],!1,null,null,null);e.a=component.exports},958:function(t,e,r){"use strict";var c={props:["title"]},o=r(34),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"breadcrumb-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"page-title"},[r("h2",[t._v(t._s(t.title))])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("nav",{staticClass:"theme-breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("nuxt-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),t.title?r("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.title))]):t._e()])])])])])])])}),[],!1,null,null,null);e.a=component.exports},960:function(t,e,r){"use strict";r(7),r(5),r(9),r(10);var c=r(1),o=(r(4),r(6),r(8),r(27)),l=r(19);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={props:["openModal","productData"],data:function(){return{imageSrc:"",swiperOption:{slidesPerView:1,spaceBetween:20,freeMode:!0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({curr:"products/changeCurrency"})),watch:{"productData.product_images":{deep:!0,handler:function(t){var e=this;this.productData.product_images&&this.productData.product_images.length&&this.productData.product_images.forEach((function(t){if(t.image)return console.log("item.image",t.image),e.imageSrc=t.image,!1}))}}},methods:{Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},Size:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].size)&&e.push(t[i].size);return e},addToCart:function(t){this.$store.dispatch("cart/addToCart",t)},getImgUrl:function(path){return l.baseUrl+"products/"+path},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=d,f=r(34),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openModal?r("b-modal",{attrs:{id:"modal-lg",size:"lg",centered:"",title:"Quickview","hide-footer":!0}},[r("div",{staticClass:"row quickview-modal"},[r("div",{staticClass:"col-lg-6 col-xs-12"},[r("div",{staticClass:"quick-view-img"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[r("div",{staticClass:"swiper-wrapper"},[r("img",{staticClass:"img-fluid bg-img",attrs:{src:t.getImgUrl(t.imageSrc?t.imageSrc:"165710779030.png"),alt:"imag.alt"}})]),t._v(" "),r("ul",{staticClass:"product-thumb-list mt-3"},t._l(t.productData.product_images,(function(image,e){return r("li",{key:e,staticClass:"grid_thumb_img mr-2",class:{active:t.imageSrc===image.image},on:{click:function(e){return t.productVariantChange(image.image)}}},[r("a",{attrs:{href:"javascript:void(0);"}},[r("img",{attrs:{src:t.getImgUrl(image.image),width:"50px"}})])])})),0)])])]),t._v(" "),r("div",{staticClass:"col-lg-6 rtl-text"},[r("div",{staticClass:"product-right"},[r("h2",[t._v(t._s(t.productData.title))]),t._v(" "),t.productData.sale?r("h3",[t._v("\n            "+t._s(t._f("currency")(t.discountedPrice(t.productData)*t.curr.curr,t.curr.symbol))+"\n      "),r("del",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))])]):r("h3",[t._v(t._s(t._f("currency")(t.productData.price*t.curr.curr,t.curr.symbol)))]),t._v(" "),r("div",{staticClass:"border-product"},[r("h6",{staticClass:"product-title"},[t._v("product details")]),t._v(" "),t.productData.description?r("p",[t._v(t._s(t.productData.description.substring(0,250)+"...."))]):t._e()]),t._v(" "),r("div",{staticClass:"product-buttons"},[r("a",{staticClass:"btn btn-solid",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("add to cart")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-solid",attrs:{to:{path:"/product/sidebar/"+t.productData.id}}},[t._v("view detail")])],1)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},961:function(t,e,r){"use strict";var c={props:["openCompare","productData"],methods:{getImgUrl:function(path){return r(340)("./"+path)},closeCompare:function(t){this.$emit("closeCompare",false)}}},o=r(34),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.openCompare?r("b-modal",{attrs:{id:"modal-compare",size:"lg",centered:"",title:"Compare","hide-footer":!0,"hide-header":!0}},[r("div",{staticClass:"row compare-modal"},[r("div",{staticClass:"col-lg-12"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCompare(t.openCompare)}}},[r("span",[t._v("×")])]),t._v(" "),r("div",{staticClass:"media"},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),r("div",{staticClass:"media-body align-self-center text-center"},[r("h5",[r("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),r("span",[t._v(t._s(t.productData.title))]),t._v(" "),r("span",[t._v("successfully added to your Compare list")])]),t._v(" "),r("div",{staticClass:"buttons d-flex justify-content-center"},[r("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/page/compare/compare-1"}}},[t._v("View Compare list")])],1)])])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},962:function(t,e,r){"use strict";r(7),r(5),r(4),r(9),r(6),r(10);var c=r(1),o=(r(8),r(18),r(27)),l=r(19);r(964);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["product","index"],data:function(){return{imageSrc:"",quickviewProduct:{},compareProduct:{},cartProduct:{},showquickview:!1,showCompareModal:!1,cartval:!1,variants:{productId:"",image:""},dismissSecs:5,dismissCountDown:0}},computed:d(d({},Object(o.e)({productslist:function(t){return t.products.productslist}})),Object(o.c)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return l.baseUrl+"products/"+path},addToCart:function(t){this.cartval=!0,this.cartProduct=t,this.cartProduct.quantity=1,this.$emit("opencartmodel",this.cartval,this.cartProduct),this.$store.dispatch("cart/addToCart",t)},addToWishlist:function(t){this.dismissCountDown=this.dismissSecs,this.$emit("showalert",this.dismissCountDown),this.$store.dispatch("Products/addToWishlist",t)},showQuickview:function(t){this.showquickview=!0,this.quickviewProduct=t,this.$emit("openquickview",this.showquickview,this.quickviewProduct)},addToCompare:function(t){this.showCompareModal=!0,this.compareProduct=t,this.$emit("showCompareModal",this.showCompareModal,this.compareProduct),this.$store.dispatch("products/addToCompare",t)},Color:function(t){for(var e=[],i=0;i<Object.keys(t).length;i++)-1===e.indexOf(t[i].color)&&e.push(t[i].color);return e},productColorchange:function(t,e){var r=this;e.variants.map((function(c){c.color===t&&e.images.map((function(img){img.image_id===c.image_id&&(r.imageSrc=img.src)}))}))},productVariantChange:function(t){console.log("I am calll"),this.imageSrc=t},countDownChanged:function(t){this.dismissCountDown=t,this.$emit("alertseconds",this.dismissCountDown)},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},f=r(34),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"img-wrapper",staticStyle:{position:"relative"}},[r("div",{staticClass:"lable-block"},[t.product.onsell?r("span",{staticClass:"lable4"},[t._v("on sale")]):t._e()]),t._v(" "),r("div",{staticClass:"front"},[r("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+t.product.id}}},[t.product.product_images?r("img",{key:t.index,staticClass:"img-fluid bg-img",attrs:{src:t.imageSrc?t.getImgUrl(t.imageSrc):t.getImgUrl(t.product.product_images[0].image),id:t.product.id,alt:t.product.title}}):t._e()])],1),t._v(" "),r("ul",{staticClass:"product-thumb-list"},t._l(t.product.product_images,(function(image,e){return t.product.product_images?r("li",{key:e,staticClass:"grid_thumb_img",class:{active:t.imageSrc===image.image},on:{click:function(e){return t.productVariantChange(image.image)}}},[r("a",{attrs:{href:"javascript:void(0);"}},[r("img",{attrs:{src:t.getImgUrl(image.image)}})])]):t._e()})),0),t._v(" "),r("div",{staticClass:"cart-info cart-wrap",staticStyle:{position:"absolute",top:"-9px"}},[r("a",{attrs:{href:"javascript:void(0)",title:"Wishlist"}},[r("i",{staticClass:"ti-heart",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.addToWishlist(t.product)}}})]),t._v(" "),r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-cart",modifiers:{"modal-cart":!0}}],attrs:{"data-toggle":"modal","data-target":"#addtocart",title:"Add to cart",variant:"primary"},on:{click:function(e){return t.addToCart(t.product)}}},[r("i",{staticClass:"ti-shopping-cart"})]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],staticClass:"d-none",attrs:{href:"javascript:void(0)",title:"Quick View",variant:"primary"},on:{click:function(e){return t.showQuickview(t.product)}}},[r("i",{staticClass:"ti-search",attrs:{"aria-hidden":"true"}})]),t._v(" "),r("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-compare",modifiers:{"modal-compare":!0}}],staticClass:"d-none",attrs:{href:"javascript:void(0)",title:"Comapre",variant:"primary"},on:{click:function(e){return t.addToCompare(t.product)}}},[r("i",{staticClass:"ti-reload",attrs:{"aria-hidden":"true"}})])])])])}),[],!1,null,null,null);e.a=component.exports},963:function(t,e,r){"use strict";r(8),r(7),r(9),r(6),r(10);var c=r(1),o=(r(5),r(4),r(81),r(27));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["openCart","productData","products","category"],computed:n(n({},Object(o.e)({currency:function(t){return t.products.currency}})),Object(o.c)({curr:"products/changeCurrency"})),methods:{getImgUrl:function(path){return r(340)("./"+path)},closeCart:function(t){this.$emit("closeCart",false)},cartRelatedProducts:function(t,e){return this.products.filter((function(r){if(r.collection.find((function(i){return i===t}))&&r.id!==e)return r}))},discountedPrice:function(t){return t.price-t.price*t.discount/100}}},v=r(34),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.openCart?c("b-modal",{attrs:{id:"modal-cart",size:"lg",centered:"",title:"Add-to-cart","hide-footer":!0,"hide-header":!0}},[c("div",{staticClass:"row cart-modal"},[c("div",{staticClass:"col-lg-12"},[c("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){return t.closeCart(t.openCart)}}},[c("span",[t._v("×")])]),t._v(" "),c("div",{staticClass:"media"},[c("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(t.productData.images[0].src),alt:t.productData.images[0].alt}}),t._v(" "),c("div",{staticClass:"media-body align-self-center text-center"},[c("h5",[c("i",{staticClass:"fa fa-check"}),t._v("Item\n              "),c("span",[t._v(t._s(t.productData.title))]),t._v(" "),c("span",[t._v("successfully added to your Cart.")])]),t._v(" "),c("div",{staticClass:"buttons d-flex justify-content-center"},[c("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/cart"}}},[t._v("View Cart")]),t._v(" "),c("nuxt-link",{staticClass:"btn-sm btn-solid mr-2",attrs:{to:{path:"/page/account/checkout"}}},[t._v("Checkout")]),t._v(" "),c("nuxt-link",{staticClass:"btn-sm btn-solid",attrs:{to:{path:"/"}}},[t._v("Continue Shopping")])],1),t._v(" "),c("div",{staticClass:"upsell_payment"},[c("img",{staticClass:"img-fluid w-auto mt-3",attrs:{alt:"",src:r(342)}})])])]),t._v(" "),c("div",{staticClass:"product-section"},[c("div",{staticClass:"col-12 product-upsell text-center"},[c("h4",[t._v("Customers who bought this item also.")])]),t._v(" "),c("div",{staticClass:"row"},t._l(t.cartRelatedProducts(t.productData.collection[0],t.productData.id).slice(0,4),(function(e,r){return c("div",{key:r,staticClass:"product-box col-sm-3 col-6"},[c("div",{staticClass:"img-wrapper"},[c("div",{staticClass:"front"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[c("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.images[0].src),alt:e.title}})])],1),t._v(" "),c("div",{staticClass:"product-detail"},[c("nuxt-link",{attrs:{to:{path:"/product/sidebar/"+e.id}}},[c("h6",[t._v(t._s(e.title))])]),t._v(" "),e.sale?c("h4",[t._v(t._s(t._f("currency")(t.discountedPrice(e)*t.curr.curr,t.curr.symbol))+"\n                        "),c("del",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])]):c("h4",[t._v(t._s(t._f("currency")(e.price*t.curr.curr,t.curr.symbol)))])],1)])])})),0)])])])]):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},967:function(t,e,r){"use strict";r(7),r(9),r(10);var c=r(1),o=(r(5),r(4),r(81),r(6),r(8),r(27)),l=r(971),n=r.n(l);r(972);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{bannerimagepath:r(341),value:[0,999998],applyFilter:[],activeItem:"category",filter:!0,swiperOption:{loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},components:{VueSlider:n.a},computed:v(v(v(v({},Object(o.e)({productslist:function(t){return t.products.productslist},currency:function(t){return t.products.currency}})),Object(o.e)("menu",["brand","categories","subCategories"])),Object(o.e)("filter",["filters"])),Object(o.c)({filterbyCategory:"filter/filterbyCategory",filterbyBrand:"filter/filterbyBrand",filterbycolor:"filter/filterbycolor",filterbysize:"filter/filterbysize"})),mounted:function(){this.$emit("priceVal",this.value)},methods:{getCategoryProduct:function(t){return this.productslist.filter((function(e){if(e.collection.find((function(i){return i===t})))return e}))},getImgUrl:function(path){return r(340)("./"+path)},discountedPrice:function(t){return t.price-t.price*t.discount/100},appliedFilter:function(t,e,r){var c=this,o=!1,data={};Object.keys(this.filters).forEach((function(l){if(c.filters[l].length)return o=!0,data.name=t,data.slug=e,data.type=r,!1})),this.$emit("allFilters",{filter:this.filters,isFilter:o,selected_name:data})}}},m=r(34),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12"},[r("div",{staticClass:"filter-main-btn",on:{click:function(e){t.filter=!t.filter}}},[t._m(0)])])]),t._v(" "),r("div",{staticClass:"collection-filter",class:{openFilterbar:t.filter}},[r("div",{staticClass:"collection-filter-block"},[t.categories.length?r("div",{staticClass:"collection-collapse-block open"},[r("h3",{directives:[{name:"b-toggle",rawName:"v-b-toggle.brand",modifiers:{brand:!0}}],staticClass:"collapse-block-title"},[t._v("Brands")]),t._v(" "),r("b-collapse",{attrs:{id:"brand",visible:"",accordion:"myaccordion2",role:"tabpanel"}},[r("div",{staticClass:"collection-collapse-block-content"},[r("div",{staticClass:"collection-brand-filter"},t._l(t.brand,(function(e,c){return r("div",{key:c,staticClass:"custom-control custom-checkbox collection-filter-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.brand_id,expression:"filters.brand_id"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"brand"+e.id},domProps:{value:e.id,checked:Array.isArray(t.filters.brand_id)?t._i(t.filters.brand_id,e.id)>-1:t.filters.brand_id},on:{change:[function(r){var c=t.filters.brand_id,o=r.target,l=!!o.checked;if(Array.isArray(c)){var n=e.id,d=t._i(c,n);o.checked?d<0&&t.$set(t.filters,"brand_id",c.concat([n])):d>-1&&t.$set(t.filters,"brand_id",c.slice(0,d).concat(c.slice(d+1)))}else t.$set(t.filters,"brand_id",l)},function(r){return t.appliedFilter(e.name,e.slug,"brand")}]}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"brand"+e.id}},[t._v(t._s(e.name))])])})),0)])])],1):t._e(),t._v(" "),t.categories.length?r("div",{staticClass:"collection-collapse-block open"},[r("h3",{directives:[{name:"b-toggle",rawName:"v-b-toggle.category",modifiers:{category:!0}}],staticClass:"collapse-block-title"},[t._v("Categories")]),t._v(" "),r("b-collapse",{attrs:{id:"category",visible:"",accordion:"myaccordion1",role:"tabpanel"}},[r("div",{staticClass:"collection-collapse-block-content"},[r("div",{staticClass:"collection-brand-filter"},t._l(t.categories,(function(e,c){return r("div",{key:c,staticClass:"custom-control custom-checkbox collection-filter-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.category_id,expression:"filters.category_id"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"category"+e.id},domProps:{value:e.id,checked:Array.isArray(t.filters.category_id)?t._i(t.filters.category_id,e.id)>-1:t.filters.category_id},on:{change:[function(r){var c=t.filters.category_id,o=r.target,l=!!o.checked;if(Array.isArray(c)){var n=e.id,d=t._i(c,n);o.checked?d<0&&t.$set(t.filters,"category_id",c.concat([n])):d>-1&&t.$set(t.filters,"category_id",c.slice(0,d).concat(c.slice(d+1)))}else t.$set(t.filters,"category_id",l)},function(r){return t.appliedFilter(e.name,e.slug,"category")}]}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"category"+e.id}},[t._v(t._s(e.name))])])})),0)])])],1):t._e(),t._v(" "),t.subCategories.length?r("div",{staticClass:"collection-collapse-block open"},[r("h3",{directives:[{name:"b-toggle",rawName:"v-b-toggle.subcategory",modifiers:{subcategory:!0}}],staticClass:"collapse-block-title"},[t._v("Sub Category")]),t._v(" "),r("b-collapse",{attrs:{id:"subcategory",visible:"",accordion:"myaccordion3",role:"tabpanel"}},[r("div",{staticClass:"collection-collapse-block-content"},[r("div",{staticClass:"collection-brand-filter"},t._l(t.subCategories,(function(e,c){return r("div",{key:c,staticClass:"custom-control custom-checkbox collection-filter-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.sub_category_id,expression:"filters.sub_category_id"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"subcategory"+e.id},domProps:{value:e.id,checked:Array.isArray(t.filters.sub_category_id)?t._i(t.filters.sub_category_id,e.id)>-1:t.filters.sub_category_id},on:{change:[function(r){var c=t.filters.sub_category_id,o=r.target,l=!!o.checked;if(Array.isArray(c)){var n=e.id,d=t._i(c,n);o.checked?d<0&&t.$set(t.filters,"sub_category_id",c.concat([n])):d>-1&&t.$set(t.filters,"sub_category_id",c.slice(0,d).concat(c.slice(d+1)))}else t.$set(t.filters,"sub_category_id",l)},function(e){return t.appliedFilter()}]}}),t._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"subcategory"+e.id}},[t._v(t._s(e.name))])])})),0)])])],1):t._e(),t._v(" "),r("div",{staticClass:"collection-collapse-block border-0 open"},[r("h3",{directives:[{name:"b-toggle",rawName:"v-b-toggle.price",modifiers:{price:!0}}],staticClass:"collapse-block-title"},[t._v("price")]),t._v(" "),r("b-collapse",{attrs:{id:"price",visible:"",accordion:"myaccordion4",role:"tabpanel"}},[r("div",{staticClass:"collection-collapse-block-content"},[r("div",{staticClass:"collection-brand-filter price-rangee-picker"},[r("vue-slider",{ref:"slider",attrs:{min:0,max:9999},on:{change:function(e){return t.appliedFilter()}},model:{value:t.filters.price,callback:function(e){t.$set(t.filters,"price",e)},expression:"filters.price"}})],1)])])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"filter-btn btn btn-theme"},[r("i",{staticClass:"fa fa-filter",attrs:{"aria-hidden":"true"}}),t._v(" Filter\n          ")])}],!1,null,null,null);e.a=component.exports}}]);