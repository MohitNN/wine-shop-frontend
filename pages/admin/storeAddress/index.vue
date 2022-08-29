<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteBrand(selectedSku)">
                    <p class="my-4">Are you sure?</p>
                </b-modal>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Store Address Detail</h5>
                        <b-button @click="$router.push('/admin/storeAddress/add-address')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Store Address</b-button>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive datatable-vue text-center">
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getAddress" :fields="tablefields">
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>
                            </b-table>
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
import config from '@/config.json'
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
            tablefields: [{
                    key: "name",
                    label: "Name",
                    sortable: false
                }, {
                    key: "phone",
                    label: "Phone",
                    sortable: true
                },
                {
                    key: "address1",
                    label: "Address 1",
                    sortable: true
                }, 
                {
                    key: "address2",
                    label: "Address 2",
                    sortable: true
                }, 
                {
                    key: "zipcode",
                    label: "zipcode",
                    sortable: true
                }, 
                {
                    key: "state",
                    label: "state",
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
        this.getAddressData()
    },
    computed: {        
        ...mapState('storeAddress', ['getAddress']),
    },
    methods: {
        ...mapActions({
            delete: "storeAddress/deleteAddress",
            getAddressData: "storeAddress/getAddress",
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
