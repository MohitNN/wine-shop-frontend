import Vue from 'vue'
import {mapActions} from 'vuex'
const mixin = {
   methods: {
    ...mapActions('products', ['allProduct']),
    loadProduct (type, name) {
        this.allProduct({type, name , pageIndex: "page=" + 1})
        this.$router.push({path: `/store/${type}`, query: { name }});
    }
  }
}

Vue.mixin(mixin)
