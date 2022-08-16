import Vue from 'vue'
import {mapActions} from 'vuex'
const mixin = {
   methods: {
    ...mapActions('products', ['allProduct']),
    loadProduct (type, name,collect_id) {      
        this.allProduct({type, name ,multipleCollection:collect_id ,pageIndex: "page=" + 1})
        this.$router.push({path: `/store/filter`, query: { name }});
    }
  }
} 

Vue.mixin(mixin)
