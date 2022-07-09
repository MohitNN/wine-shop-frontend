<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteCoupons(selectedSku)">
                    <p class="my-4">Are you sure!</p>
                </b-modal>
            </div>

            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Coupon List</h5>
                        <b-button @click="$router.push('/admin/coupon/create-coupon')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Create Coupon</b-button>
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
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getCouponList.data" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
                                <template #cell(paymentStatus)="field">
                                    <div>
                                        {{ field.item.name }}
                                    </div>
                                    <div v-if="field.item.paymentStatus == 'Payment Failed'" class="badge badge-glow badge-danger">
                                        {{ field.item.coupon_code }}
                                    </div>
                                    <div>
                                        {{ field.item.status }}
                                    </div>   
                                    <div>
                                        {{ field.item.start_date }}
                                    </div>                                      
                                    <div>
                                        {{ field.item.end_date }}
                                    </div>
                                </template>
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>
                            </b-table>
                        </div>
                        <b-col md="12" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" aria-controls="my-table" class="mt-4"></b-pagination>
                        </b-col>
                    </div>
                </div>
            </div>
        </div>
    </template>
</layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    components: {
        layout
    },
    props: ["categoryType"],
    data() {
        return {
            value: "",
            selectedSku: "",
            tablefields: [{
                    key: "name",
                    label: "Coupon Name",
                    sortable: true
                },
                {
                    key: "coupon_code",
                    label: "Coupon Code",
                    sortable: false
                },
                {
                    key: "status",
                    label: "Status",
                    sortable: true
                },               
                {
                    key: "start_date",
                    label: "Start Date",
                    sortable: true
                },
                {
                    key: "end_date",
                    label: "End Date",
                    sortable: true
                },
                {
                    key: "actions",
                    label: "actions",
                    class: "text-center"
                }
            ],

            filter: null,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100]
        };
    },
    computed: {
        ...mapGetters({
            coupons: "coupon/getCoupon"
        }),
        sortOptions() {
            // Create an options list from our fields
            return this.tablefields
                .filter(f => f.sortable)
                .map(f => {
                    return {
                        text: f.label,
                        value: f.key
                    };
                });
        },
        getCouponList() {
            return this.coupons;
        }
    },
    created() {
        this.$store.dispatch("coupon/getCoupon", 1);
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = 12;
    },
    methods: {
        ...mapActions({
            get_single_order: "order/get_single_order",
            deleteCoupon: "coupon/deleteCoupon"
        }),
        getImgUrl(path) {
            return require("@/assets/admin/images/dashboard/product/" + path);
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        goToEdit(item) {
            this.get_single_order(item)
            this.$router.push('/admin/order/' + item.id);
        },
        deleteCoupons(OrderID) {
            this.deleteCoupon(OrderID).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Deleted Coupon Successfully..!");
                }
            })

        },
        getIndex(id) {
            this.selectedSku = id
        },
    }
}
</script>

<style>

</style>
