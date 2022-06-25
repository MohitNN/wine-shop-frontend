<template>
<layout />
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumbs from "../../components/admin/bread-crumbs.vue";
import layout from "../../components/admin/Body.vue";

export default {
  components: {
    Breadcrumbs,
    layout
  },
  data() {
    return {
      value: "",
      tablefields: [
        { key: "orderId", label: "Order Id", sortable: true },
        { key: "images", label: "Product", sortable: false },
        { key: "paymentStatus", label: "Payment status", sortable: true },
        { key: "paymentMethod", label: "Payment Method", sortable: true },
        { key: "orderStatus", label: "Order status", sortable: true },
        { key: "date", label: "Date", sortable: true },
        { key: "total", label: "Total", sortable: true }
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100]
    };
  },
  created() {
    this.$store.dispatch("admin_order/getOrders");
  },
  computed: {
    ...mapGetters({
      orders: "admin_order/getOrders"
    }),
    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = 2;
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/admin/images/dashboard/product/" + path);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style>

</style>