<template>
<div>
    <!-- <Header /> -->
    <div>
        <b-modal id="modal-2" title="Confirmation" @ok="deleteUserAddress(selectedSku)">
            <p class="my-4">Are you sure?</p>
        </b-modal>
    </div>
    <Breadcrumbs title="Dashboard" />
    <section class="section-b-space" style="background-color:white;" v-if="getProfileUserDatas">
        <div class="container">
            <div class="row">
                <b-card no-body v-bind:class="'dashboardtab'" style="box-shadow: none !important">
                    <b-tabs pills card vertical>
                        <b-tab title="Account Info" active>
                            <b-card-text>
                                <div class="dashboard-right">
                                    <div class="dashboard">
                                        <div class="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div class="welcome-msg">
                                            <p>Hello, {{ getProfileUserDatas.name }} !</p>
                                            <p>
                                                From your My Account Dashboard you have the ability to
                                                view a snapshot of your recent account activity and
                                                update your account information. Select a link below
                                                to view or edit information.
                                            </p>
                                        </div>
                                        <div class="box-account box-info">
                                            <div class="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="box">
                                                        <div class="box-title">
                                                            <h3>Account Information</h3>
                                                            <a href="javascript:void(0)" v-b-modal.modal-prevent-closing>Edit</a>
                                                        </div>
                                                        <div class="box-content">
                                                            <h6>{{getProfileUserDatas.name}}</h6>
                                                            <h6>{{getProfileUserDatas.email}}</h6>
                                                        </div>
                                                        <b-modal id="modal-prevent-closing" ref="modal" title="Submit Your Name" @show="resetModal" @hidden="resetModal" @ok="handleOk(userData.name)">
                                                            <form ref="form" @submit.stop.prevent="handleSubmit">
                                                                <b-form-group label="Name" label-for="name-input" invalid-feedback="Name is required" :state="nameState">
                                                                    <b-form-input id="name-input" v-model="userData.name" :state="name" placeholder="Name" required></b-form-input>
                                                                </b-form-group>
                                                            </form>
                                                        </b-modal>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="My Orders">
                            <b-card-text>
                                <div class="dashboard-right">
                                    <div class="dashboard">
                                        <div class="page-title">
                                            <h2>My orders</h2>
                                        </div>
                                        <orderdetails />
                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Change Password" ref="changePass">
                            <b-card-text>
                                <div class="dashboard-right">
                                    <div class="dashboard">
                                        <div class="page-title mb-5">
                                            <h2>Change password</h2>
                                        </div>
                                        <div class="card-body">
                                            <ul class="nav nav-tabs tab-coupon mb-0" id="top-tab" role="tablist">
                                                <div class="tab-content" id="top-tabContent">
                                                    <b-card-text>
                                                        <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                                            <ValidationObserver v-slot="{ invalid }">
                                                                <div class="form">
                                                                    <ValidationProvider rules="required" v-slot="{ errors }" name="currentpassword">
                                                                        <div class="form-group mb-3 row">
                                                                            <h5 for="validationCustom01" class="f-w-600 col-xl-4 col-sm-4 mb-0">
                                                                                Current Password :
                                                                            </h5>
                                                                            <input class="form-control col-xl-6 col-sm-7" name="currentpassword" v-model="password.currentpassword" id="validationCustom01" type="password" placeholder="Current Password" />
                                                                            <div class="form-group mb-3 row">
                                                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                                                <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </ValidationProvider>
                                                                    <ValidationProvider rules="required" v-slot="{ errors }" name="newpassword">
                                                                        <div class="form-group mb-3 row">
                                                                            <h5 for="validationCustom01" class="f-w-600 col-xl-4 col-sm-4 mb-0">
                                                                                Change Password :
                                                                            </h5>
                                                                            <input class="form-control col-xl-6 col-sm-7" name="newpassword" v-model="password.newpassword" id="validationCustom01" type="password" placeholder="Change Password" />
                                                                            <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                                                <span class="validate-error">{{ errors[0] }}</span>
                                                                            </div>
                                                                        </div>
                                                                    </ValidationProvider>
                                                                    <ValidationProvider rules="required" v-slot="{ errors }" name="confirmpassword">
                                                                        <div class="form-group mb-3 row">
                                                                            <h5 for="validationCustom01" class="f-w-600 col-xl-4 col-sm-4 mb-0">
                                                                                Confirm Password :
                                                                            </h5>
                                                                            <input class="form-control col-xl-6 col-sm-7" name="confirmpassword" v-model="password.confirmpassword" id="validationCustom01" type="password" placeholder="Confirm Password" />
                                                                            <div class=" col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                                                <span class="validate-error">{{ errors[0] }}</span>
                                                                            </div>
                                                                        </div>
                                                                    </ValidationProvider>
                                                                    <div class="d-flex justify-content-end" style="width: 448px;">
                                                                        <b-button class="" :disabled="invalid" style="margin: 25px" @click="updatePassword()">Update</b-button>
                                                                    </div>
                                                                </div>
                                                            </ValidationObserver>
                                                        </div>
                                                    </b-card-text>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Address">
                            <b-card-text>
                                <div class="dashboard-right">
                                    <div class="dashboard">
                                        <div class="page-title" style="height: 41px;">
                                            <h2 class="d-inline">Address</h2>
                                            <button class="btn btn-dark float-right" v-b-modal.modal-prevent-address @click="clearAddressVal()">ADD</button>
                                        </div>
                                        <div v-if="saveAddress.length === 0" class="box-account box-info border-dark border p-2 mt-1 text-center">
                                          <h5>No Address Found</h5>
                                         </div>
                                        <div v-else class="box-account box-info border border-dark p-2 mt-1" v-for="item in saveAddress" :key="item">
                                            <h5 style="display: inline-block;">{{item.address}}, {{item.city}}, {{item.county}}, {{item.postal_code}}</h5>
                                            <i class="fa fa-times d-inline fs-5 float-right" style="color:red" aria-hidden="true" v-b-modal.modal-2 @click="getIndex(item)"></i>
                                            <i class="fa fa-edit d-inline fs-5 mr-2 float-right" v-b-modal.modal-prevent-address aria-hidden="true" @click="setUserAddress(item)" ></i>                                            
                                        </div>
                                         
                                    </div>
                                </div>
                            </b-card-text>
                            <b-modal id="modal-prevent-address" ref="modal" title="Edit Address From " @show="resetModal" @hidden="resetModal" @ok="handleAddress">
                             <ValidationObserver>
                                <form ref="form" @submit.stop.prevent="handleSubmit">
                                 <ValidationProvider rules="required" v-slot="{ errors }" name="address">
                                    <b-form-group label="Address" label-for="address-input" invalid-feedback="Address is required" >
                                        <b-form-input id="address-input" v-model="addAddress" name="address"  placeholder="Address" required></b-form-input>
                                    </b-form-group>
                                      <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="city">
                                    <b-form-group label="City" label-for="city-input" invalid-feedback="City is required" >
                                        <b-form-input id="city-input" v-model="addCity" name="city"  placeholder="City" required></b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                     </ValidationProvider>
                                     <ValidationProvider rules="required" v-slot="{ errors }" name="county">
                                    <b-form-group label="County" label-for="county-input" invalid-feedback="County is required" >
                                        <b-form-input id="county-input" v-model="addCounty" name="county"  placeholder="County" required></b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="postal_code">
                                    <b-form-group label="Postal Code" label-for="postal_code-input" invalid-feedback="Postal Code is required" >
                                        <b-form-input id="postal_code-input" v-model="addPostalCode" name="postal_code"  placeholder="Postal Code" required></b-form-input>
                                    </b-form-group>
                                    <span class="validate-error">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </form>
                              </ValidationObserver>
                            </b-modal>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </section>
    <Footer />
</div>
</template>

<script>
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import orderdetails from "../../../components/widgets/orderdetails";
import {
    ValidationProvider,
    ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import {
    mapGetters,
    mapActions
} from "vuex";

export default {
    props: ["categoryType"],
    middleware: ["login"],
    data() {
        return {
            password: {
                currentpassword: "",
                newpassword: "",
                confirmpassword: "",
            },
            userData:{
                name: "",
                email:'',
            },
            name:'',
            nameState: null,
            submittedNames: [],
            changePasswordTab: false,
            addAddress: "",
            addCity: "",
            addCounty: "",
            addPostalCode: "",
            address_id: 0,
            selectedSku: "",
        };
    },
    components: {
        Footer,
        Breadcrumbs,
        orderdetails,
        ValidationProvider,
        ValidationObserver,
    },
    mounted() {
        this.getUserAddress()
        this.getUserProfile()
        this.userData.email = this.getProfileUserDatas.email
        this.userData.name = this.getProfileUserDatas.name
    },
    computed: {
        ...mapGetters({
            userList: "saveAddress/userList",
            saveAddress: "saveAddress/getSaveAddress",
            getProfileUserDatas: "editProfile/getProfileUserData"
        })
    },
    methods: {
        ...mapActions("order", ["getOrderList"]),
        ...mapActions("editProfile", ["getUserProfile"]),
        ...mapActions("editProfile", ["updateUserProfile"]),
        ...mapActions("admin_adminauth", ["changePassword"]),
        ...mapActions("saveAddress", ["userSaveAddress", "getUserAddress", "deteleAddress"]),
        openChangePassword() {
            console.log(this.$refs.changePass, "-------");
        },

        updatePassword() {
            if (this.password.newpassword == this.password.confirmpassword) {
                this.changePassword(this.password)
                    .then((resp) => {
                        if (resp.data.status) {
                            this.$toast.success("Change Password Succesfully.........");
                            this.$router.push("/page/account/login");
                        }else{
                            this.$toast.error(resp.data.message);
                        }
                    })
                    .catch((error) => {});
            } else {
                this.$swal({
                    icon: "error",
                    title: "Oops...",
                    text: "New Paasword and Confirm password not match",
                });
            }
        },
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity();
            this.nameState = valid;
            return valid;
        },
        resetModal() {
            this.name = "";
            this.nameState = null;
        },
        handleOk(bvModalEvent) {
            this.userData.name = bvModalEvent
            this.updateUserProfile(this.userData).then((resp) => {{
                this.getProfileUserDatas.name = resp.data.data.name
            }})
        },
        handleSubmit() {
            if (!this.checkFormValidity()) {
                return;
            }
            this.submittedNames.push(this.name);
            this.$nextTick(() => {
                this.$bvModal.hide("modal-prevent-closing");
            });
        },
        handleAddress() {
            const saveAddress = this.addAddress;
            const saveCity = this.addCity;
            const saveCounty = this.addCounty;
            const savePostalCode = this.addPostalCode;
            const id = this.address_id;

            this.userSaveAddress({
                'address': saveAddress,
                'city': saveCity,
                'county': saveCounty,
                'postal_code': savePostalCode,
                'id': id
            }).then((resp) => {
                if (resp.data.status) {
                    this.$toast.success("Address Updated Succesfully.........");
                }
            })
        },
        setUserAddress(item) {
            this.addAddress = item.address;
            this.addCity = item.city;
            this.addCounty = item.county;
            this.addPostalCode = item.postal_code;
            this.address_id = item.id;
        },
        deleteUserAddress(item) {
            this.deteleAddress({
                id: item.id
            }).then((resp) => {
                if (resp.data.status) {
                    this.$toast.success("Deleted Succesfully.........");
                }
            })
        },
        getIndex(id) {
            this.selectedSku = id
        },
        clearAddressVal() {
            this.addAddress = "";
            this.addCity = "";
            this.addCounty = "";
            this.addPostalCode = "";
        },
    },
    created() {
        this.getOrderList();
    },
};
</script>
