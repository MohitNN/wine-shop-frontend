import Vue from 'vue'
import {mapActions} from 'vuex'
const mixin = {
   methods: {
    ...mapActions('products', ['allProduct']),
    loadProduct (type, name) {
        this.allProduct({type, name})
        this.$router.push({path: `/store/${type}`, query: { name }});
    }
  }
}

Vue.mixin(mixin)
