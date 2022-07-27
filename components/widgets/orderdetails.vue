<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Order Detail</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive datatable-vue">
                <b-table
                  show-empty
                  stacked="md"
                  striped
                  hover
                  id="my-table"
                  head-variant="light"
                  bordered
                  :items="getOrdersList.data"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                  <template #cell(order_id)="field">
                    <div
                      class="ImgUrl"
                      href="javascript:void(0)"
                      @click="sawData(field.item)"
                    >
                      {{ field.item.order_id }}
                    </div>
                  </template>
                  <template #cell(order_status)="field">
                    <div href="javascript:void(0)" @click="sawImg(field.item)">
                      <span
                        :class="getVariant('order', field.item.order_status)"
                      >
                        {{ getStatus("order", field.item.order_status) }}
                      </span>
                    </div>
                  </template>
                  <template #cell(payment_status)="field">
                    <div href="javascript:void(0)" @click="sawImg(field.item)">
                      <div
                        :class="
                          getVariant('payment', field.item.payment_status)
                        "
                      >
                        {{ getStatus("payment", field.item.payment_status) }}
                      </div>
                    </div>
                  </template>
                  <template #cell(file)="field">
                    <a
                      class="ImgUrl"
                      href="javascript:void(0)"
                      @click="sawImg(field.item.file)"
                    >
                      {{ field.item.file }}
                    </a>
                  </template>
                </b-table>
                <!-- <b-col
                md="12"
                v-if="getOrdersList"
                class="my-1 p-0 pagination-justify justify-content-center"
              >
                
              </b-col> -->
                <!-- <b-pagination
                  v-model="getOrdersList.current_page"
                  :total-rows="getOrdersList.total"
                  @input="updateData"
                  :per-page="getOrdersList.per_page"
                  aria-controls="my-table"
                  class="mt-4"
                ></b-pagination> -->
              </div>
              <b-col md="12" v-if="getOrdersList" class="pagination-self my-1 p-0 pagination-justify">
                <b-pagination
                  v-model="getOrdersList.current_page"
                  :total-rows="getOrdersList.total"
                  :per-page="getOrdersList.per_page"
                  @input="updateData"
                  class="mt-4"
                ></b-pagination>
                <!-- <pagination v-model="currentPage" :records="500" @paginate="updateData"/> -->
              </b-col>

              <ordershow :order="orderData" v-model="openModel"></ordershow>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ordershow from "./ordershow";
import config from "@/config.json";

export default {
  components: {
    ordershow,
  },
  middleware: ["login"],
  props: ["categoryType"],
  data() {
    return {
      openModel: false,
      orderData: [],
      tablefields: [
        {
          key: "order_id",
          label: "Order id",
          sortable: true,
        },
        {
          key: "order_status",
          label: "Order Status",
          sortable: false,
        },
        {
          key: "payment_status",
          label: "Payment Status",
          sortable: true,
        },
        {
          key: "total",
          label: "Total",
          sortable: true,
        },
        {
          key: "file",
          label: "Image",
          sortable: true,
        },
        {
          key: "created_at",
          label: "Order Date",
          sortable: false,
        },
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
    };
  },
  created() {
    this.$store.dispatch("order/getOrderList");
  },
  computed: {
    ...mapGetters({
      orders: "order/getOrdersList",
    }),
    getOrdersList() {
      return this.orders;
    },
    sortOptions() {
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return {
            text: f.label,
            value: f.key,
          };
        });
    },
    getOrders() {
      this.totalRows = this.orders.total;
      return this.orders;
    },
  },
  mounted() {
    this.totalRows = this.orders.length;
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = this.getOrders.current_page;
    },
    sawData(item) {
      this.openModel = true;
      this.orderData = item;
    },
    sawImg(url) {
      window.open(config.baseUrl + "orders/" + url);
    },
    getStatus(type, status) {
      if (type == "order") {
        if (status == 1) {
          return "Pendding";
        } else if (status == 2) {
          return "Confirm";
        } else {
          return "Success";
        }
      } else {
        if (status == 1) {
          return "Not Verified";
        } else {
          return "Verified";
        }
      }
    },
    getVariant(type, status) {
      if (type == "order") {
        if (status == 1) {
          return "pandding-Ticket-dropdown";
        } else if (status == 2) {
          return "open-Ticket-dropdown";
        } else {
          return "success-Ticket-dropdown";
        }
      } else {
        if (status == 1) {
          return "notvarified-Ticket-dropdown";
        } else {
          return "success-Ticket-dropdown";
        }
      }
    },
    updateData(page) {
      this.$store.dispatch("order/getOrderList", page);
    },
  },
};
</script>

<style lang="scss" scoped>
.ImgUrl {
  color: blue !important;
  cursor: pointer !important;
  text-decoration: underline !important;
}

.pandding-Ticket-dropdown {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 10px;
  padding: 5px 10px;
  margin: 0 auto;
  color: #ffa800;
  background: #ffe6b3;
}

.open-Ticket-dropdown {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 10px;
  padding: 5px 10px;
  margin: 0 auto;
  color: #2966f0;
  background: #b7ccfa;
}

.success-Ticket-dropdown {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 10px;
  padding: 5px 10px;
  margin: 0 auto;
  color: #29a329;
  background: #70db70;
}

.notvarified-Ticket-dropdown {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 10px;
  padding: 5px 10px;
  margin: 0 auto;

  color: #ff0000;
  background: #ff9999;
}
.pagination-custome {
    ul{
        margin-bottom: 0 !important;
    padding-right: 0px !important;
        li{
            &:before {
                display: inline-block !important;
            }
        }
    }
}
</style>
<style  >
.pagination-self ul li:before {
    display: none !important;
}
</style>
