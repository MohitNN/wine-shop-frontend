(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1134:function(t,e,r){"use strict";r.r(e);var o=r(1),n=(r(28),r(7),r(62),r(8),r(5),r(4),r(9),r(6),r(10),r(956)),c=r(26),l=r(959);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{layout:n.a,ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{category:{name:"",description:"",id:this.$route.params.editcategory}}},created:function(){var t=this;this.getCategoryDetails(this.category.id).then((function(e){if(e.data.status){var data=e.data.data;t.category.name=data.name,t.category.description=data.description}}))},methods:v(v({},Object(c.b)({getCategoryDetails:"category/get_single_category",updateCategory:"category/updateCategory"})),{},{update:function(){var t=this;this.updateCategory(this.category).then((function(e){e.data.status&&(t.$toast.success("Update Brand Successfully..!"),t.$router.push("/admin/category"))}))}})},f=r(34),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout",{scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h5",[t._v("Edit category")])]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row product-adding"},[r("div",{staticClass:"col-xl-7"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[r("form",{staticClass:"needs-validation add-product-form",attrs:{novalidate:""}},[r("div",{staticClass:"form"},[r("ValidationProvider",{attrs:{rules:"required",name:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group mb-0 row"},[r("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("Name :")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],staticClass:"form-control col-xl-8 col-sm-7",attrs:{id:"validationCustom01",type:"text",required:""},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group mb-3 row"},[r("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),r("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-0 validation"},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"description"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group mb-0 row"},[r("label",{staticClass:"col-xl-3 col-md-4"},[t._v("Description :")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.category.description,expression:"category.description"}],staticClass:"form-control col-xl-8 col-sm-7",attrs:{name:"description",required:""},domProps:{value:t.category.description},on:{input:function(e){e.target.composing||t.$set(t.category,"description",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group mb-3 row"},[r("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),r("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-0 validation"},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"offset-xl-3 offset-sm-4"},[r("button",{staticClass:"btn btn-primary",class:o?"btn-solid-disabled":"btn-solid",attrs:{type:"button",disabled:o},on:{click:t.update}},[t._v("Update")]),t._v(" "),r("button",{staticClass:"btn btn-light ml-1",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/admin/category")}}},[t._v("\r\n                                                Discard\r\n                                            ")])])])]}}])})],1)])])])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);