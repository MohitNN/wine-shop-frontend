<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Product List</h5>
                        <b-button @click="$router.push('/admin/product/add-product')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Product</b-button>               
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
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="productsList.data" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">

                                <template #cell(image)="field">
                                    <img height="50px" v-if="field.item.product_images" v-for="i in field.item.product_images" :key="i" :src="getImgUrl(i.image)" width="50px" />
                                </template>
                                <template #cell(name)="field">
                                    <!-- <img height="50px" :src="getImgUrl(field.item.image)" width="50px" /> -->
                                    <div>{{field.item.product_name}}</div>
                                </template>
                                <template #cell(brand)="field">
                                    <!-- <img height="50px" :src="getImgUrl(field.item.image)" width="50px" /> -->
                                    <div>{{field.item.brand ? field.item.brand.name : '-'}}</div>
                                </template>
                                 <template #cell(category)="field">
                                    <!-- <img height="50px" :src="getImgUrl(field.item.image)" width="50px" /> -->
                                    <div>{{field.item.category ? field.item.category.name : '-' }}</div>
                                </template>
                                <template #cell(subcategory)="field">
                                    <!-- <img height="50px" :src="getImgUrl(field.item.image)" width="50px" /> -->
                                    <div>{{field.item.subcategory ? field.item.subcategory.name : '-'}}</div>
                                </template>
                                <template #cell(price)="field">
                                    <!-- <img height="50px" :src="getImgUrl(field.item.image)" width="50px" /> -->
                                    <div>{{field.item.price}}</div>
                                </template>
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="deleteBrand(field.item.id)" type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>

                            </b-table>
                        </div>
                        <b-col md="12" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="currentPage" :total-rows="productsList.total" :per-page="productsList.per_page" aria-controls="my-table" @input="updateData" class="mt-4"></b-pagination>
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
import config from '@/config.json'
import {
    mapGetters,
    mapMutations,
    mapState,
    mapActions
} from "vuex";

export default {
    components: {
        layout
    },
    props:['categoryType'],
    data() {
        return {
            value: "",
            tablefields: [{
                    key: "Image",
                    label: "image",
                    sortable: false
                }, {
                    key: "name",
                    label: "Name",
                    sortable: true
                },
                {
                    key: "category",
                    label: "category",
                    sortable: true
                },
                {
                    key: "subcategory",
                    label: "Sub Category",
                    sortable: true
                },
                {
                    key: "brand",
                    label: "brand",
                    sortable: true
                },
                {
                    key: "price",
                    label: "Price",
                    sortable: true
                },
                {
                    key: "detail",
                    label: "Detail",
                    sortable: true
                }, {
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
    created() {
        this.$store.dispatch("Products/getProducts");
    },
    computed: {
        ...mapGetters({
            getBrand: "brand/getBrand"
        }),
        ...mapState('Products' , ['productsList']),
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
        updateData(page) {
        this.$store.dispatch("Products/getProducts",page);
        },
      ...mapActions({
            delete: "Products/deleteProduct",
        }),
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        goToEdit(item){
          this.$router.push('/admin/product/'+item.id);      
        },
      
        deleteBrand(id){
          this.delete({id:id}).then(Response=>{
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
