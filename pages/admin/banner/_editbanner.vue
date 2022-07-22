<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Banner</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="brandName">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <input v-model="banner.title" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="logo">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Logo :</label>
                                                    <input name="logo" class="form-control col-xl-8 col-sm-7" id="validationCustom02" ref="file" type="file" required="" @change="fileselected" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0"></label>
                                                <img  v-if="image" :src="image" width="100px" height="100px" />
                                            </div>
                                           <ValidationProvider rules="required" v-slot="{ errors }" name="description">
                                                <div class="form-group mb-0 row">
                                                    <label class="col-xl-3 col-md-4">Description :</label>
                                                    <textarea name="description" class="form-control col-xl-8 col-sm-7" v-model="banner.description" required=""></textarea>
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4"></label>
                                            <button type="button" @click="update" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">Update</button>
                                            <button type="button" @click="$router.push('/admin/banner')" class="btn btn-light ml-1">
                                                Discard
                                            </button>
                                        </div>
                                    </form>
                                </ValidationObserver>
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
import config from '@/config.json'
import {
    mapActions,
    mapState
} from "vuex";
import {
    ValidationProvider,
    ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
export default {
    components: {
        layout,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            banner: {
                title: '',
                description: '',
                logo: '',
                id: this.$route.params.editbanner,
            },
            image: false

        }
    },
    computed:{
         ...mapState({
            setBanner: state => state.banner.setBanner,
        }),
         getBannerDetail() {
            return this.setBanner
        }
    },
    mounted() {
        this.banner.title = this.getBannerDetail.title
        this.banner.description = this.getBannerDetail.description
        this.banner.logo = this.getBannerDetail.logo
        this.image = `${config.baseUrl}banner/${this.getBannerDetail.image}`
    },

    methods: {
        ...mapActions({
            getBannerDetails: "banner/get_single_banner",
            updateBanner: "banner/updateBanner",
        }),
        update() {
            this.updateBanner(this.banner).then(response => {
                if (response.data.status) {
                    this.$toast.success("Update Banner Successfully..!");
                    this.$router.push('/admin/banner')
                }
            });
        },
        fileselected(e) {
            this.banner.logo = this.$refs.file.files[0];
            const file = e.target.files.item(0);
            const reader = new FileReader();
            reader.addEventListener('load', this.imageloaded);
            reader.readAsDataURL(file);
        },

        imageloaded(e) {
            this.image = e.target.result;
        },
    }
};
</script>
