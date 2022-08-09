<template>
  <layout>
    <template v-slot:content>
      <div class="row">
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden widget-cards">
        <div class="bg-warning card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="navigation" class="font-warning"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Products</span>
              <h3 class="mb-0">
                Total <span class="counter">{{getAllDataTotal.product}}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden  widget-cards">
        <div class="bg-secondary card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="box" class="font-secondary"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Brands</span>
              <h3 class="mb-0">
                Total <span class="counter">{{getAllDataTotal.brand}}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden widget-cards">
        <div class="bg-primary card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="message-square" class="font-primary"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Categorys</span>
              <h3 class="mb-0">
                Total <span class="counter">{{getAllDataTotal.category}}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden widget-cards">
        <div class="bg-danger card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="users" class="font-danger"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Orders</span>
              <h3 class="mb-0">
                Total <span class="counter">{{getAllDataTotal.order}}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </template>
  </layout>
</template>


<script>

import layout from "@/components/admin/Body.vue";
import { mapGetters , mapActions } from "vuex";

export default {
  middleware: ["auth"],
  components: {
   layout
  },
  // middleware: ['admin/auth']
   computed: {
      ...mapGetters({
          getAllDataTotal: "dashboard/getAllDataCount",
      }),
    },
    mounted() {
        this.getCountData();
    },
    methods: {
      ...mapActions("dashboard", ["getCountData"]),
    }
};
</script>
