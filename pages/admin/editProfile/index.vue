<template>
<layout>
    <template v-slot:content>
        <div>
            <div class="container-fluid">
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Edit Profile</h5>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-4 mb-5">
                        <div class="card" style="height: 100% !important;">
                            <div class="card-body">
                                <div class="profile-details text-center">
                                    <input type="file" @change="onFileChange" name="pic1" id="pic1" ref="userFile" style="display:none;" />
                                    <label for="pic1">
                                        <img :src="getImgUrl(getProfileData.image) ? getImgUrl(getProfileData.image) : '@/assets/images/admin.png' "  for="sawImg1" id="sawImg" alt="" style="cursor:pointer; width: 225px; height: 225px; object-fit: contain;" class="img-fluid rounded-circle blur-up lazyloaded" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 card">
                        <ValidationObserver v-slot="{ invalid }">
                            <form class="needs-validation add-product-form" novalidate="" enctype="multipart/form-data">
                                <div class="form mt-4">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                        <div class="form-group mb-0 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input v-model="getProfileData.name" class="form-control col-xl-8 col-sm-7" name="name" placeholder="Name" id="validationCustom01" type="text" required="" />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                            <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </div>
                                        </div>
                                    </ValidationProvider>
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="email">
                                        <div class="form-group mb-0 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Email :</label>
                                            <input v-model="getProfileData.email" class="form-control col-xl-8 col-sm-7" name="email" placeholder="Email" id="validationCustom01" type="text" required="" />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                            <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                <span class="validate-error">{{ errors[0] }}</span>
                                            </div>
                                        </div>
                                    </ValidationProvider>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-md-4"></label>
                                        <button type="button" @click="update()" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">Add</button>
                                        <button type="button" @click="$router.push('/admin/dashboard')" class="btn btn-light ml-1">
                                            Discard
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
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
import {
    mapActions,
    mapGetters,
} from 'vuex';
import {
    ValidationProvider,
    ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
export default {
    components: {
        layout,
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            img:'',
        }
    },
    async created(){
        await this.getProfile();
    },
    methods: {
        ...mapActions({
            updateProfile: "editProfile/updateProfile",
            getProfile: "editProfile/getProfile",
            setLoading: "gloable/setLoading"
        }),
        onFileChange: function(e) {
            this.getProfileData.image = this.$refs.userFile.files[0];
            // const file = e.target.files.item(0);
            // const reader = new FileReader();
            // reader.addEventListener('load', this.imageloaded);
            // reader.readAsDataURL(file);
            this.update()
        },
        imageloaded(e) {
            this.img = e.target.result;
        },
        update(){
            this.setLoading(true)
            this.updateProfile(this.getProfileData).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Update profile Successfully..!");
                    this.getProfile()
                    this.setLoading(false)
                }
            }).catch((error) => {
                this.setLoading(false);
            })
        },
        getImgUrl(path) {
            return config.baseUrl + "profile_picture/" + path;
        },
    },
    computed: {
         ...mapGetters({
            getProfileState : "editProfile/getProfileData"
         }),
         getProfileData : {
            get() {
                return this.getProfileState;
            }, 
            set(value) {
                this.$store.commit('editProfile/GET_PROFILE' , value)
            }
         }
    }
}
</script>

<style>

</style>
