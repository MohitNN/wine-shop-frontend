(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1097:function(t,e,r){"use strict";r.r(e);r(8),r(7),r(5),r(4),r(9),r(6),r(10);var o=r(1),l=r(958),n=r(29),c=r(964);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{layout:l.a,ValidationProvider:c.b,ValidationObserver:c.a},data:function(){return{type:{type_name:"",category_id:""}}},computed:v(v({},Object(n.e)("category",["Category"])),{},{getCategoryList:function(){var t=this.Category;return 0!=t.length||this.getCategory(),t}}),methods:v(v({},Object(n.b)({setTypes:"types/setType",getCategory:"category/getCategory"})),{},{addType:function(){var t=this;this.setTypes(this.type).then((function(e){e.data.status&&(t.$toast.success("Add type Successfully..!"),t.$router.push("/admin/type"))}))}})},m=r(34),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout",{scopedSlots:t._u([{key:"content",fn:function(){return[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h5",[t._v("Add Types")])]),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row product-adding"},[r("div",{staticClass:"col-xl-7"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[r("form",{staticClass:"needs-validation add-product-form",attrs:{novalidate:""}},[r("div",{staticClass:"form"},[r("ValidationProvider",{attrs:{rules:"required",name:"Category"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group mb-0 row"},[r("label",{staticClass:"col-xl-3 pl-4 col-sm-4 mb-0",attrs:{for:"exampleFormControlSelect1"}},[t._v("Select Category :")]),t._v(" "),r("v-select",{staticClass:"col-xl-8 col-sm-7",attrs:{name:"Category",placeholder:"Select Type",options:t.getCategoryList.data,reduce:function(t){return t.id},label:"name",index:"id"},model:{value:t.type.category_id,callback:function(e){t.$set(t.type,"category_id",e)},expression:"type.category_id"}})],1),t._v(" "),r("div",{staticClass:"form-group mb-3 row"},[r("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),r("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-2 validation"},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)}),t._v(" "),r("ValidationProvider",{attrs:{rules:"required",name:"type name"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("div",{staticClass:"form-group m-0 row"},[r("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}},[t._v("Type Name :")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.type.type_name,expression:"type.type_name"}],staticClass:"form-control col-xl-8 col-sm-7",attrs:{name:"type name",id:"validationCustom01",type:"text",required:"",placeholder:"Name"},domProps:{value:t.type.type_name},on:{input:function(e){e.target.composing||t.$set(t.type,"type_name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group mb-3 row"},[r("label",{staticClass:"col-xl-3 col-sm-4 mb-0",attrs:{for:"validationCustom01"}}),t._v(" "),r("div",{staticClass:"col-xl-8 col-sm-7 p-0 ml-2 validation"},[r("span",{staticClass:"validate-error"},[t._v(t._s(o[0]))])])])]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-xl-3 col-md-4"}),t._v(" "),r("button",{staticClass:"btn btn-primary",class:o?"btn-solid-disabled":"btn-solid",attrs:{type:"button",disabled:o},on:{click:t.addType}},[t._v("\r\n                                                Add\r\n                                            ")]),t._v(" "),r("button",{staticClass:"btn btn-light ml-1",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/admin/type")}}},[t._v("\r\n                                                Discard\r\n                                            ")])])])]}}])})],1)])])])])])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);