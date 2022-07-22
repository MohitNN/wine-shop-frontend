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
                            <b-table show-empty stacked="md" striped hover head-variant="light" bordered :items="getOrdersList.data" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
                            <template #cell(order_id)="field"> 
                            <div style="cursor:pointer;" href="#" @click="sawData(field.item)">
                                {{field.item.order_id}}
                            </div>
                            </template>
                            </b-table>
                        </div>
                        <!-- <b-col md="12" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" aria-controls="my-table" class="mt-4"></b-pagination>
                        </b-col> -->
                        <ordershow  :order="orderData" v-model="openModel"></ordershow>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import ordershow from './ordershow'
export default {
    components : {
        ordershow
    },
    middleware: ["auth"],
    props: ["categoryType"],
    data() {
        return {
            openModel : false,
            orderData : [],
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
                    key: "created_at",
                    label: "created_at",
                    sortable: false,
                },
            ],

            filter: null,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [5, 10, 15]
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
                .filter(f => f.sortable)
                .map(f => {
                    return {
                        text: f.label,
                        value: f.key
                    };
                });
        }
    },
    mounted() {
        this.totalRows = this.orders.length;
    },
    methods: {
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        sawData(item){
            this.openModel = true
            this.orderData = item
        }
    }
};
</script>

<style>

</style>
