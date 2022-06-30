<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>List Brand</h5>
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
                            <b-table show-empty striped hover head-variant="light" bordered stacked="md" :items="getBrand" :fields="tablefields" :filter="filter" :current-page="currentPage" :per-page="perPage" @filtered="onFiltered">

                                <template #cell(image)="field">
                                    <img height="50px" :src="getImgUrl(field.item.image)" width="50px" />
                                </template>
                                <template #cell(detail)="field">
                                    <div v-html="field.item.detail"></div>
                                </template>
                                <template #cell(actions)="field">
                                    <div v-show="false">{{field.item.id}}</div>
                                    <feather @click="goToEdit" type="edit-2" stroke="#3758FD" stroke-width="1" size="18px" fill="#3758FD" stroke-linejoin="round"></feather>
                                    <feather type="trash" stroke="#F72E9F" size="18px" fill="#F72E9F"></feather>
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
import config from '@/config.json'
import {
    mapGetters
} from "vuex";

export default {
    components: {
        layout
    },
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
        this.$store.dispatch("brand/getbrand");
    },
    computed: {
        ...mapGetters({
            getBrand: "brand/getBrand"
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
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = 12;
    },
    methods: {
        getImgUrl(path) {
            return config.baseUrl + "brand/" + path;
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        goToEdit(){
          this.$router.push('/admin/brand/_edit-brand');      
        },
    },
}
</script>

<style>

</style>
