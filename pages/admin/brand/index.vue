<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div>
                <b-modal id="modal-2" title="Confirmation" @ok="deleteBrand(selectedSku)">
                    <p class="my-4">Are you sure!</p>
                </b-modal>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Brand List</h5>
                        <b-button @click="$router.push('/admin/brand/add-brand')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Brand</b-button>
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
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getBrand.data" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">
                                <template #cell(image)="field">
                                    <img height="50px" :src="getImgUrl(field.item.image)" width="50px" />
                                </template>
                                <template #cell(detail)="field">
                                    <div v-html="field.item.detail"></div>
                                </template>
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather style="cursor:pointer;" @click="goToEdit(field.item)" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather style="cursor:pointer;" @click="getIndex(field.item.id)" v-b-modal.modal-2 type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
                                </template>
                            </b-table>
                        </div>
                        <b-col md="12" v-if="getBrand" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="getBrand.current_page" :total-rows="getBrand.total" :per-page="getBrand.per_page" @input="updateData" aria-controls="my-table" class="mt-4"></b-pagination>
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
                    key: "Image",
                    label: "image",
                    sortable: false
                }, {
                    key: "name",
                    label: "Name",
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
        this.$store.dispatch("brand/getbrand", 1);
    },
    computed: {
        ...mapGetters({
            getBrandDetails: "brand/getBrand"
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
        getBrand() {
            this.totalRows = this.getBrandDetails.total
            return this.getBrandDetails;
        }
    },
    methods: {
        ...mapActions({
            delete: "brand/deleteBrand",
        }),
        getImgUrl(path) {
            return config.baseUrl + "brand/" + path;
        },
        updateData(page) {
            this.$store.dispatch("brand/getbrand", page);
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length;
            this.currentPage = this.getBrand.current_page;
        },
        goToEdit(item) {
            this.$router.push('/admin/brand/' + item.id);
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
