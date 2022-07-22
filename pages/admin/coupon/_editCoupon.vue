<template>
  <layout>
    <template v-slot:content>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Edit Coupon</h5>
            </div>
            <div class="card-body">
              <div class="row product-adding">
                <div class="col-xl-7">
                  <form class="needs-validation" novalidate="">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group row">
                          <label
                            for="validationCustom0"
                            class="col-xl-3 col-md-4"
                            >Coupon name</label
                          >
                          <input
                            v-model="coupon.coupon_name"
                            class="form-control col-md-7"
                            id="validationCustom0"
                            type="text"
                            required=""
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom1"
                            class="col-xl-3 col-md-4"
                            >Coupon Code</label
                          >
                          <input
                            v-model="coupon.coupon_code"
                            class="form-control col-md-7"
                            id="validationCustom1"
                            type="text"
                            required=""
                          />
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">Start Date</label>
                          <input
                            v-model="coupon.start_date"
                            class="datepicker-here form-control digits col-md-7"
                            type="text"
                            data-language="en"
                          />
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">End Date</label>
                          <input
                            v-model="coupon.end_date"
                            class="datepicker-here form-control digits col-md-7"
                            type="text"
                            data-language="en"
                          />
                        </div>
                        <div class="form-group row">
                          <label class="col-form-label col-xl-3 col-md-4"
                            >Status</label
                          >
                          <div
                            class="
                              m-checkbox-inline
                              mb-0
                              custom-radio-ml
                              d-flex
                              radio-animated
                            "
                          >
                            <label class="d-block" for="edo-ani">
                              <input
                                class="radio_animated"
                                id="edo-ani"
                                @click="amount"
                                v-model="coupon.selectedType"
                                value="amount"
                                type="radio"
                                name="rdo-ani"
                              />
                              Amount
                            </label>
                            <label class="d-block" for="edo-ani1">
                              <input
                                class="radio_animated"
                                id="edo-ani1"
                                @click="discount"
                                v-model="coupon.selectedType"
                                value="discount"
                                type="radio"
                                name="rdo-ani"
                              />
                              Discount
                            </label>
                          </div>
                        </div>
                        <div v-if="showAmount" class="form-group row">
                          <label
                            for="validationCustom1"
                            class="col-xl-3 col-md-4"
                            >Amount :
                          </label>
                          <input
                            v-model="coupon.amount"
                            class="form-control col-md-7"
                            placeholder="Amount"
                            id="validationCustom1"
                            type="text"
                            required=""
                          />
                        </div>
                        <div v-else class="form-group row">
                          <label
                            for="validationCustom1"
                            class="col-xl-3 col-md-4"
                            >Discount :
                          </label>
                          <input
                            v-model="coupon.discount"
                            class="form-control col-md-7"
                            placeholder="Discount"
                            id="validationCustom1"
                            type="number" min="0" max="100"
                            required=""
                          />
                        </div>
                        <!-- <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Status</label>
                                                <label class="d-block" for="chk-ani">
                                                    <input v-model="coupon.status" class="checkbox_animated" id="chk-ani" type="checkbox" />
                                                    Enable the Coupon
                                                </label>
                                            </div> -->
                        <div>
                          <div class="form-group row">
                            <label
                              for="validationCustom1"
                              class="col-xl-3 col-md-4"
                              >Min Order Value :
                            </label>
                            <input
                              v-model="coupon.minOrderValue"
                              class="form-control col-md-7"
                              name="minOrder"
                              placeholder="Minimum Order Value"
                              id="validationCustom1"
                              type="number"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4"></label>
                          <button
                            type="button"
                            @click="update"
                            class="btn btn-primary"
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            class="btn btn-light ml-1"
                            @click="$router.push('/admin/coupon')"
                          >
                            Discard
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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
import { mapActions, mapState } from "vuex";
export default {
  components: {
    layout,
  },
  data() {
    return {
      image: "",
      coupon: {
        coupon_name: "",
        coupon_code: "",
        status: "",
        start_date: "",
        amount:0,
        discount:0,
        end_date: "",
        minOrderValue:'',
        id: this.$route.params.editCoupon,
      },
      showAmount: true,
    };
  },
  computed: {
    ...mapState({
      CouponDetail: (state) => state.coupon.CouponDetail,
    }),
    getCouponDetail() {
      return this.CouponDetail;
    },
  },
  mounted() {
    // alert(this.$route.params.editCoupon);
    this.coupon.coupon_name = this.getCouponDetail.coupon_name;
    this.coupon.coupon_code = this.getCouponDetail.coupon_code;
    this.coupon.status = this.getCouponDetail.status;
    this.coupon.minOrderValue = this.getCouponDetail.order_value;
    this.coupon.start_date = this.getCouponDetail.start_date;
    this.coupon.end_date = this.getCouponDetail.end_date;
    this.coupon.selectedType = this.getCouponDetail.type;
    this.coupon.amount = this.getCouponDetail.amount;
    this.coupon.discount = this.getCouponDetail.discount;
  },
  methods: {
    ...mapActions({
      setCoupon: "coupon/setCoupon",
    }),
    update() {
      this.setCoupon(this.coupon).then((response) => {
        if (response.data.status) {
          this.$toast.success("Update Coupon Successfully..!");
          this.$router.push("/admin/coupon");
        }
      });
    },
    amount() {
      this.showAmount = true;
    },
    discount() {
      this.showAmount = false;
    },
  },
};
</script>
