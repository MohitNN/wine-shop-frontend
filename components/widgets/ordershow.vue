<template>
<section>
    <b-modal size="lg" v-model="modalShow">
        <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="checkout-details">
                <div class="order-box" style="margin-bottom:0px !important;">
                    <div class="title-box">
                        <div>
                            Details
                        </div>
                    </div>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Order Id : </div>
                            <span style="word-break: break-all;">{{
                              order.order_id
                            }}</span>
                        </li>
                    </ul>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Order Status : </div>
                            <span :class="getVariant('order',order.order_status)">{{getStatus('order',order.order_status)}}</span>
                        </li>
                    </ul>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Payment Status : </div>
                            <span :class="getVariant('payment',order.payment_status)">{{getStatus('payment',order.payment_status)}}</span>
                        </li>
                    </ul>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Total : </div>
                            <span>RM {{
                              order.total
                            }}</span>
                        </li>
                    </ul>
                    <ul class="qty" v-if="order && order.created_at" style="margin-bottom:0px !important;">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Created at : </div>
                            <span style="word-break: break-all;">{{
                              order.created_at | moment('DD-MM-YYYY hh:mm a')
                            }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </b-modal>
</section>
</template>

<script>
export default {
    data() {
        return {
            image: "",
            previewimg: {
                preview: null,
            },
            user: {
                first_name: "",
                last_name: "",
                phone: "",
                email: "",
                address: "",
                city: "",
                state: "",
                zipcode: "",
                products: [],
                total: "",
                total_product: "",
            },
            isPaymentBank: false,
            isLogin: false,
            paypal: {
                sandbox: "Your_Sendbox_Key",
            },
            payment: false,
            environment: "sandbox",
            button_style: {
                label: "checkout",
                size: "medium", // small | medium | large | responsive
                shape: "pill", // pill | rect
                color: "blue", // gold | blue | silver | black
            },
            amtchar: "",
        }
    },
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        order: {
            default: () => [],
        }
    },
    computed: {
        modalShow: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
    methods: {
      getStatus(type,status) {
      if(type == 'order') {
        if(status == 1) {
           return 'Pendding'
        } else if (status == 2) {
           return 'Confirm'
        } else {
           return 'Success'
        }
      } else {
        if(status == 1) {
           return 'Not Verified'
        } else {
           return  'Verified'
        } 
      }
    },
    getVariant(type,status) {
      if(type == 'order') {
        if(status == 1) {
           return 'pandding-Ticket-dropdown'
        } else if (status == 2) {
           return 'open-Ticket-dropdown'
        } else {
           return 'success-Ticket-dropdown'
        }
      } else {
        if(status == 1) {
           return 'notvarified-Ticket-dropdown'
        } else {
           return  'success-Ticket-dropdown'
        } 
      }
    },
    }
}
</script>

<style lang="scss" scoped>


.pandding-Ticket-dropdown {
  border-radius: 4px;
  font-size: 10px;
  padding: 5px 10px;

  color: #ffa800;
  background: #ffe6b3;
}
.open-Ticket-dropdown {
  border-radius: 4px;
  font-size: 10px;
  padding: 5px 10px;

  color: #2966f0;
  background: #b7ccfa;
}
.success-Ticket-dropdown {
  border-radius: 4px;
  font-size: 10px;
  padding: 5px 10px;

  color: #29a329;
  background: #70db70;
}
.notvarified-Ticket-dropdown {
  border-radius: 4px;
  font-size: 10px;
  padding: 5px 10px;

  color: #ff0000;
  background: #ff9999;
}

</style>
