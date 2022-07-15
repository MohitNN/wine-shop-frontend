<template>
  <layout>
    <template v-slot:content>
      <div class="row">
        <div>
          <b-modal
            id="modal-2"
            title="Confirmation"
            @ok="deleteBanner(selectedSku)"
          >
            <p class="my-4">Are you sure!</p>
          </b-modal>
        </div>
        <div class="col-md-12">
          <div class="card">
            <div
              class="
                card-header
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <h5>Banner List</h5>
              <b-button
                @click="gotoAdd()"
                v-b-modal.modal-1
                :variant="categoryType == 'digital' ? 'primary' : 'primary'"
                >Add Banner</b-button
              >
            </div>
            <div class="card-body">
              <b-row>
                <b-col xl="3" lg="4" md="6"> </b-col>
                <b-col
                  class="offset-xl-6 offset-lg-2 search-rs"
                  xl="3"
                  lg="5"
                  md="6"
                >
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
                  stacked="md"
                  :items="getBannerList"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @filtered="onFiltered"
                >
                  <template #cell(image)="field">
                    <img
                      height="50px"
                      :src="getImgUrl(field.item.image)"
                      width="50px"
                    />
                  </template>
                  <template #cell(detail)="field">
                    <div v-html="field.item.detail"></div>
                  </template>
                  <template #cell(actions)="field">
                    <div v-show="false">{{ field.item.id }}</div>
                    <feather
                      style="cursor: pointer"
                      @click="goToEdit(field.item)"
                      type="edit-2"
                      stroke="#3758FD"
                      stroke-width="1"
                      size="18px"
                      fill="#3758FD"
                      stroke-linejoin="round"
                    ></feather>
                    <feather
                      style="cursor: pointer"
                      @click="getIndex(field.item.id)"
                      v-b-modal.modal-2
                      type="trash"
                      stroke="#F72E9F"
                      size="18px"
                      fill="#F72E9F"
                    ></feather>
                  </template>
                </b-table>
              </div>
              <!-- <b-col md="12" class="my-1 p-0 pagination-justify">
                            <b-pagination v-model="getBrand.current_page" :total-rows="totalRows" :per-page="perPage" @input="updateData" aria-controls="my-table" class="mt-4"></b-pagination>
                        </b-col> -->
            </div>
          </div>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import config from "@/config.json";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    layout,
  },
  props: ["categoryType"],
  data() {
    return {
      value: "",
      selectedSku: "",
      tablefields: [
        {
          key: "image",
          label: "Image",
          sortable: false,
        },
        {
          key: "title",
          label: "Title",
          sortable: true,
        },
        {
          key: "description",
          label: "Description",
          sortable: true,
        },
        {
          key: "actions",
          label: "actions",
          class: "text-center",
        },
      ],
      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
    };
  },
  created() {
    this.$store.dispatch("banner/getBanners", 1);
  },
  computed: {
    ...mapGetters({
      getBannerDetails: "banner/getBanner",
    }),
    sortOptions() {
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return {
            text: f.label,
            value: f.key,
          };
        });
    },
    getBannerList() {
      return this.getBannerDetails;
    },
  },
  methods: {
    gotoAdd() {
      if (this.getBannerList.length && this.getBannerList.length == 10) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "You can only 10 Banner add",
        });
        return;
      }
      this.$router.push("/admin/banner/add-banner");
    },
    ...mapActions({
      get_single_banner: "banner/get_single_banner",
      delete: "banner/deleteBanner",
    }),
    getImgUrl(path) {
      return config.baseUrl + "banner/" + path;
    },
    updateData(page) {
      this.$store.dispatch("banner/updateBanner", page);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = this.getBrand.current_page;
    },
    goToEdit(item) {
      this.get_single_banner(item);
      this.$router.push("/admin/banner/" + item.id);
    },

    deleteBanner(brandID) {
      this.delete(brandID).then((Response) => {
        if (Response.data.status) {
          this.$toast.success("Deleted Brand Successfully..!");
        }
      });
    },
    getIndex(id) {
      this.selectedSku = id;
    },
  },
};
</script>

<style>
</style>
