<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteBrand(selectedSku)">
                    <p class="my-4">Are you sure?</p>
                </b-modal>
            </div>
            {{getPayment}}
            <div class="col-md-12">
                <div class="card">
                    <!-- <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Payment Details</h5>
                        <b-button @click="$router.push('/admin/paymentDetails/add-payment')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Payment Address</b-button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive datatable-vue text-center">
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getPayment" :fields="tablefields">
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>
                            </b-table>
                        </div>
                    </div> -->
                    
                </div>
            </div>
        </div>
    </template>
</layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import {
    mapState,
    mapActions
} from "vuex";

export default {
    middleware: ["auth"],
    components: {
        layout
    },
    props: ["categoryType"],
    data() {
        return {
            value: "",
            selectedSku: "",
            tablefields: [
                {
                    key: "bank_name",
                    label: "Bank Name",
                    sortable: false
                }, {
                    key: "acc_no",
                    label: "Account No.",
                    sortable: true
                },
                {
                    key: "branch",
                    label: "Branch",
                    sortable: true
                }, 
                {
                    key: "acc_name",
                    label: "Account Name",
                    sortable: true
                }, 
                {
                    key: "actions",
                    label: "actions",
                    class: "text-center"
                }
            ],
        };
    },
    created() {
        this.getPaymentData()
    },
    computed: {        
        ...mapState('payment', ['getPayment']),
    },
    methods: {
        ...mapActions({
            delete: "storeAddress/deleteAddress",
            getPaymentData: "payment/getPayment",
            get_single_address: "storeAddress/get_single_address",
        }),
        goToEdit(item) {
            this.get_single_address(item);
            this.$router.push('/admin/storeAddress/' + item.id);
        },
        deleteBrand(brandID) {
            this.delete(brandID).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Deleted Brand Successfully..!");
                }
            })

        },
        getIndex(id) {
            this.selectedSku = id
        },

    },
}
</script>

<style>

</style>
