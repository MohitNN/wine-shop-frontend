<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Category List</h5>
                        <b-button @click="$router.push('/admin/category/add-category')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Category</b-button>               
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
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getCategory" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather @click="deleteCategory(field.item.id)" type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
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
    props:["categoryType"],
    data() {
        return {
            value: "",
            tablefields: [
                {
                    key: "name",
                    label: "Name",
                    sortable: true
                },
                {
                    key: "description",
                    label: "Description",
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
        this.$store.dispatch("category/getCategory");
    },
    computed: {
        ...mapGetters({
            getCategory: "category/getCategory"
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
        }
    },
    mounted() {
        this.totalRows = 50;
    },
    methods: {
        ...mapActions({
            delete: "category/deleteCategory",
        }),
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        goToEdit(item){
          this.$router.push('/admin/category/'+item.id);      
        },
      
        deleteCategory(CategoryID){
          this.delete(CategoryID).then(Response=>{
                if(Response.data.status){
                   this.$toast.success("Deleted Brand Successfully..!");
                }                
            })
          
        },
        

    },
}
</script>

<style>

</style>
