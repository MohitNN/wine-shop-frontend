<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="" title="Dashboard" />
      </div>
      <Widget></Widget>
      <div class="row">
        <!-- <MarketChart></MarketChart> -->
        <OrderTable :order="orderList"></OrderTable>
      </div>
      <!-- <SecondWidget></SecondWidget>
      <div class="row">
        <BuySellChart></BuySellChart>
        <GoodsReturnTable :data="orderList"></GoodsReturnTable>
        <EmployeeStatus :employee="employee"></EmployeeStatus>
        <SalesStatus></SalesStatus>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Widget from "../../components/admin/dashboard/widget.vue";
import MarketChart from "../../components/admin/dashboard/market-chart.vue";
import SecondWidget from "../../components/admin/dashboard/secondWidget/secondWidget.vue";
import OrderTable from "../../components/admin/dashboard/order-table.vue";
import BuySellChart from "../../components/admin/dashboard/buy-sell-chart.vue";
import GoodsReturnTable from "../../components/admin/dashboard/goods-returns-table.vue";
import EmployeeStatus from "../../components/admin/dashboard/employee-status-table.vue";
import SalesStatus from "../../components/admin/dashboard/sales-status/sales-status.vue";

export default {
  components: {
    Widget,
    MarketChart,
    SecondWidget,
    OrderTable,
    BuySellChart,
    GoodsReturnTable,
    EmployeeStatus,
    SalesStatus
  },

  data() {
    return {};
  },
  created() {
    this.$store.dispatch("order/getOrderList");
  },
  computed: {
    ...mapGetters({
      orderList: "order/getOrdersDashboard",
      employee: "employee/getEmployee"
    })
  },
  mounted() {}
};
</script>
