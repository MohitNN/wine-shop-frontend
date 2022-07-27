<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteTypes(selectedSku)">
                    <p class="my-4">Are you sure!</p>
                </b-modal>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Type List</h5>
                        <b-button @click="$router.push('/admin/type/addType')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Type</b-button>
                    </div>
                    <div class="card-body">
                        <b-row>
                            <b-col xl="3" lg="4" md="6">
                            </b-col>
                            <b-col class="offset-xl-6 offset-lg-2 search-rs" xl="3" lg="5" md="6">
                                <b-form-group label-cols="3" label="search:" class="datatable-select">
                                    <b-form-input type="text" v-model="filter" placeholder="Search"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <div class="table-responsive datatable-vue text-center">
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getTypesList.data" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>

                            </b-table>
                        </div>
                        <b-col md="12" v-if="getTypesList" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="getTypesList.current_page" :total-rows="getTypesList.total" :per-page="getTypesList.per_page" @input="updateData" aria-controls="my-table" class="mt-4"></b-pagination>
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
                    key: "type_name",
                    label: "Type Name",
                    sortable: true
                },
                {
                    key: "category_id",
                    label: "Category Id",
                    class: "text-center"
                }, {
                    key: "actions",
                    label: "actions",
                    class: "text-center"
                },

            ],
            filter: null,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100]
        };
    },
    created() {
        this.$store.dispatch("types/getType");
    },
    computed: {
        ...mapGetters({
            getTypes: "types/getType"
        }),
        sortOptions() {
            return this.tablefields
                .filter(f => f.sortable)
                .map(f => {
                    return {
                        text: f.label,
                        value: f.key
                    };
                });
        },
        getTypesList() {
            this.totalRows = this.getTypes.total
            return this.getTypes;
        }
    },
    methods: {
        ...mapActions({
            delete: "types/deleteType",
            get_single_type: "types/get_single_type",
        }),
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = this.getTypesList.current_page;
        },
        updateData(page) {
            this.$store.dispatch("types/getType", page);
        },

        goToEdit(item) {
            this.get_single_type(item)
            this.$router.push('/admin/type/' + item.id);
        },
        deleteTypes(SubCategoryID) {
            alert(SubCategoryID)
            this.delete(SubCategoryID).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Deleted Type Successfully..!");
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
