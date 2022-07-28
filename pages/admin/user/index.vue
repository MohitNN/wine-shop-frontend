<template>
<layout>
  <template v-slot:content>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Manage Userlist</h5>
            </div>

            <div class="card-body">
              <b-row>
                <b-col xl="3" lg="4" md="6">
                  <b-form-group
                    label-cols="3"
                    label="show"
                    class="datatable-select"
                  >
                    <b-form-select
                      v-model="perPage"
                      :options="pageOptions"
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col class="offset-xl-6 offset-lg-2 search-rs" xl="3" lg="5" md="6">
                  <b-form-group
                    label-cols="3"
                    label="search:"
                    class="datatable-select"
                  >
                    <b-form-input
                      type="text"
                      v-model="filter"
                      placeholder="Search"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="table-responsive datatable-vue text-center">
                <b-table
                  show-empty
                  striped
                  hover
                  head-variant="light"
                  bordered
                  v-if="userList"
                  stacked="md"
                  :items="userList.data"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                 
                </b-table>
              </div>
              <b-col v-if="userList" md="12" class="my-1 p-0 pagination-justify">
                <b-pagination
                  v-model="userList.current_page"
                  :total-rows="userList.total"
                  :per-page="userList.per_page"
                  aria-controls="my-table"
                  class="mt-4"
                ></b-pagination>
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
import { mapGetters, mapState } from "vuex";

export default {
  middleware: ["auth"],
  components: {
    layout
  },
   data() {
    return {
      value: "",
      tablefields: [
        { key: "name", label: "User Name", sortable: true },
        { key: "email", label: "Email Id", sortable: false },
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100]
    };
  },
  created() {
    this.$store.dispatch("admin_adminauth/getUserList" , 1);
  },
  computed: {
    ...mapState( "admin_adminauth" , ['userList']
    ),
    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = 12;
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/admin/images/dashboard/product/" + path);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
}
</script>

<style>

</style>