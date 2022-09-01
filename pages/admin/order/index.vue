<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteOrder(selectedSku)">
                    <p class="my-4">Are you sure?</p>
                </b-modal>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="
                card-header
                d-flex
                justify-content-between
                align-items-center
              ">
                        <h5>Order List</h5>
                    </div>
                    <div class="card-body">
                        <b-row>
                            <b-col xl="3" lg="4" md="6">
                                <b-form-group label-cols="3" label="show" class="datatable-select">
                                    <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col class="offset-xl-6 offset-lg-2 search-rs" xl="3" lg="5" md="6">
                                <b-form-group label-cols="3" label="search:" class="datatable-select">
                                    <b-form-input type="text" v-model="filter" placeholder="Search"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>

                        <div class="table-responsive datatable-vue text-center">
                            <b-table striped hover :fields="tablefields" :items="getOrdersList.data">
                                 <template #cell(file)="field">
                                    <a class="ImgUrl" href="javascript:void(0)" @click="sawImg(field.item.file)">
                                        {{ field.item.file }}
                                    </a>
                                </template>
                                 <template #cell(order_id)="field">
                                    <a class="ImgUrl" href="javascript:void(0)" @click="sawData(field.item)">
                                        {{ field.item.order_id }}
                                    </a>
                                </template>
                                  <template #cell(order_quantity)="field">
                                        {{ field.item.total_product }}
                                  </template>
                                <template #cell(order_status)="field">
                                    <b-dropdown class="m-md-2" :variant="getVariant('order',field.item.order_status)">
                                        <template #button-content>
                                            <span> {{getStatus('order',field.item.order_status)}} </span>
                                        </template>
                                        <b-dropdown-item-btn href="#" @click="updateStatus('order',1 , field.item.id)">
                                            <template #default>
                                                <div class="Pending-Ticket-dropdown">
                                                    Pending <span> </span>
                                                </div>
                                            </template>
                                        </b-dropdown-item-btn>
                                        <b-dropdown-item href="#" @click="updateStatus('order',2 , field.item.id)">
                                            <template #default>
                                                <div class="open-Ticket-dropdown">Confirm</div>
                                            </template>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="#" @click="updateStatus('order',3 , field.item.id)">
                                            <template #default>
                                                <div class="success-Ticket-dropdown">Success</div>
                                            </template>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </template>
                                <template #cell(payment_status)="field">
                                    <b-dropdown class="m-md-2" :variant="getVariant('payment',field.item.payment_status)">
                                        <template #button-content>
                                            <span> {{getStatus('payment',field.item.payment_status)}} </span>
                                        </template>
                                        <b-dropdown-item href="#" @click="updateStatus('payment',1 , field.item.id)">
                                            <template #default>
                                                <div class="notvarified-Ticket-dropdown">
                                                    Not Verified
                                                </div>
                                            </template>
                                        </b-dropdown-item>
                                        <b-dropdown-item href="#" @click="updateStatus('payment',2 , field.item.id)">
                                            <template #default>
                                                <div class="success-Ticket-dropdown">Verified</div>
                                            </template>
                                        </b-dropdown-item>
                                    </b-dropdown>
                                </template>

                                <template #cell(actions)="field">
                                    <div v-show="false">{{ field.item.id }}</div>
                                    <feather style="cursor: pointer" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor: pointer" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>
                            </b-table>
                        </div>
                        <b-col md="12" v-if="getOrdersList" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="getOrdersList.current_page" :total-rows="getOrdersList.total" :per-page="getOrdersList.per_page" aria-controls="my-table" class="mt-4" @input="updateData"></b-pagination>
                        </b-col>
                    </div>
                    <ordershow :order="orderData" v-model="openModel"></ordershow>
                </div>
            </div>
        </div>
    </template>
</layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import ordershow from "@/pages/admin/order/ordershowData.vue";
import {
    mapGetters,
    mapActions
} from "vuex";
import config from "@/config.json";

export default {
    middleware: ["auth"],
    components: {
        layout,
        ordershow
    },
    props: ["categoryType"],
    data() {
        return {
            openModel: false,
            orderData: [],
            value: "",
            selectedSku: "",
            tablefields: [{
                    key: "first_name",
                    label: "First Name",
                    sortable: true,
                },
                {
                    key: "last_name",
                    label: "Last Name",
                    sortable: true,
                },
                {
                    key: "phone",
                    label: "Contact",
                    sortable: true,
                },
                {
                    key: "address",
                    label: "Address",
                    sortable: true,
                },
                {
                    key: "file",
                    label: "Payment Slip",
                    sortable: true,
                },
                {
                    key: "order_quantity",
                    label: "Order Quantity",
                    sortable: true,
                },
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
                    key: "order_status",
                    label: "Address",
                    sortable: false,
                },
                {
                    key: "actions",
                    label: "actions",
                    class: "text-center",
                },
            ],

            filter: null,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            orderList: [{
                orderId: "1",
                orderStatus: "Panning",
                paymentStatus: "Unverified",
                name: "Deep Agravat",
                totleItem: 5,
                address: "Jay Ho",
                Actions: "",
            }, ],
        };
    },
    computed: {
        ...mapGetters({
            orders: "order/getOrders",
        }),
        sortOptions() {
            // Create an options list from our fields
            return this.tablefields
                .filter((f) => f.sortable)
                .map((f) => {
                    return {
                        text: f.label,
                        value: f.key,
                    };
                });
        },
        getOrdersList() {
            return this.orders;
        },
    },
    created() {
        this.$store.dispatch("order/getOrder", 1);
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = 12;
    },
    methods: {
        sawData(item) {
            this.openModel = true;
            this.orderData = item;
        },
        sawImg(url) {
            window.open(config.baseUrl + "orders/" + url);
        },
        updateData(page) {
            this.$store.dispatch("order/getOrder", page);
        },
        ...mapActions({
            get_single_order: "order/get_single_order",
            deleteOrders: "order/deleteOrder",
            getOrderUpdateStatus: "order/updateOrderStatus"
        }),
        updateStatus(type, status, id) {
            this.getOrderUpdateStatus({
                type: type,
                status: status,
                id: id
            }).then((resp) => {
                if (resp.data.status) {
                    this.$toast.success('update status')
                }
            })
        },
        getStatus(type, status) {
            if (type == 'order') {
                if (status == 1) {
                    return 'Pending'
                } else if (status == 2) {
                    return 'Confirm'
                } else {
                    return 'Success'
                }
            } else {
                if (status == 1) {
                    return 'Not Verified'
                } else {
                    return 'Verified'
                }
            }
        },
        getVariant(type, status) {
            if (type == 'order') {
                if (status == 1) {
                    return 'warning'
                } else if (status == 2) {
                    return 'secondary'
                } else {
                    return 'success'
                }
            } else {
                if (status == 1) {
                    return 'primary'
                } else {
                    return 'success'
                }
            }
        },
        getImgUrl(path) {
            return require("@/assets/admin/images/dashboard/product/" + path);
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        goToEdit(item) {
            this.get_single_order(item);
            this.$router.push("/admin/order/" + item.id);
        },
        deleteOrder(OrderID) {
            this.deleteOrders(OrderID).then((Response) => {
                if (Response.data.status) {
                    this.$toast.success("Deleted Brand Successfully..!");
                }
            });
        },
        getIndex(id) {
            this.selectedSku = id;
        },
    },
};
</script>

<style>
.Pending-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #ffa800;
    background: #ffe6b3;
}

.open-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #2966f0;
    background: #b7ccfa;
}

.success-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #29a329;
    background: #70db70;
}

.notvarified-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #ff0000;
    background: #ff9999;
}
</style>
