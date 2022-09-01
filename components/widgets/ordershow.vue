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
                        <div class="col-12 mb-2 d-flex p-0">
                            <div class="col-6 p-0" style="font-size: 18px;font-weight: bold;">Product Name  </div>
                            <div class="col-6 p-0 text-right" style="font-size: 18px;font-weight: bold;">Price </div>
                        </div>
                        <li class="d-flex flex-wrap justify-content-between align-items-center"  v-if="order && order.order_products">
                            <div class="col-12 p-0 d-flex justify-content-between align-items-center" v-for="(item , index) in order.order_products" :key="index" style="word-break: break-all;">
                                    <h4>{{item.product.product_name}} x {{ item.product.quantity }}</h4>
                                    <h4>RM {{item.product.price}}</h4>
                            </div>
                        </li>
                    </ul>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Order Status : </div>
                            <span :class="getVariant('order',order.order_status)" href="javascript:void(0)">{{getStatus('order',order.order_status)}}</span>
                        </li>
                    </ul>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Payment Status : </div>
                            <span :class="getVariant('payment',order.payment_status)" href="javascript:void(0)">{{getStatus('payment',order.payment_status)}}</span>
                        </li>
                    </ul>
                    <ul class="qty">
                        <li class="d-flex justify-content-between">
                            <div style="font-size: 18px;font-weight: bold;">Total : </div>
                            <span>{{$store.state.products.currency.symbol}} {{
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
        return {}
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
        getStatus(type, status) {
            if (type == 'order') {
                if (status == 1) {
                    return 'Pending'
                } else if (status == 2) {
                    return 'Confirm'
                } else {
                    return 'Success'
                }
            } else {
                if (status == 1) {
                    return 'Not Verified'
                } else {
                    return 'Verified'
                }
            }
        },
        getVariant(type, status) {
            if (type == 'order') {
                if (status == 1) {
                    return 'Pending-Ticket-dropdown'
                } else if (status == 2) {
                    return 'open-Ticket-dropdown'
                } else {
                    return 'success-Ticket-dropdown'
                }
            } else {
                if (status == 1) {
                    return 'notvarified-Ticket-dropdown'
                } else {
                    return 'success-Ticket-dropdown'
                }
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.Pending-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #ffa800;
    background: #ffe6b3;
}

.open-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #2966f0;
    background: #b7ccfa;
}

.success-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #29a329;
    background: #70db70;
}

.notvarified-Ticket-dropdown {
    border-radius: 4px;
    font-size: 10px;
    padding: 5px 10px;
    text-align: center;
    color: #ff0000;
    background: #ff9999;
}
</style>
