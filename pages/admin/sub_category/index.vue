<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteSubCategory(selectedSku)">
                    <p class="my-4">Are you sure!</p>
                </b-modal>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>SubCategory List</h5>
                        <b-button @click="$router.push('/admin/sub_category/add-sub-category')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add SubCategory</b-button>
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
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getSubCategory.data" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>
                                <template #cell(category_id)="field">
                                    {{field.item.category.name}}
                                </template>
                                <template #cell(type_id)="field">
                                    {{field.item.type.type_name}}
                                </template>

                            </b-table>
                        </div>
                        <b-col md="12" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="getSubCategory.current_page" :total-rows="totalRows" :per-page="perPage" @input="updateData" aria-controls="my-table" class="mt-4"></b-pagination>
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
                    key: "name",
                    label: "Name",
                    sortable: true
                },
                {
                    key: "description",
                    label: "Description",
                    class: "text-center"
                },{
                    key: "category_id",
                    label: "Category Id",
                    class: "text-center"
                },
                {
                    key: "type_id",
                    label: "Type Id",
                    class: "text-center"
                },
                
                {
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
        this.$store.dispatch("subCategory/getSubCategory");
    },
    computed: {
        ...mapGetters({
            getSubCategoryDetails: "subCategory/getSubCategory"
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
        getSubCategory() {
            this.totalRows = this.getSubCategoryDetails.total
            return this.getSubCategoryDetails;
        }
    },
    methods: {
        ...mapActions({
            get_single_subcategory: "subCategory/get_single_subcategory",
            delete: "subCategory/deleteSubCategory",
        }),
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = this.getSubCategory.current_page;
        },
        updateData(page) {
            this.$store.dispatch("category/getCategory", page);
        },
        goToEdit(item) {
            this.get_single_subcategory(item)
            this.$router.push('/admin/sub_category/' + item.id);
        },
        deleteSubCategory(SubCategoryID) {
            this.delete(SubCategoryID).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Deleted SubCategory Successfully..!");
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
