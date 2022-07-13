<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Banner</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="" enctype="multipart/form-data">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="bannerName">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <input v-model="banner.bannerName" class="form-control col-xl-8 col-sm-7" name="bannerName" placeholder="Name" id="validationCustom01" type="text" required="" />
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
                                                    <input class="form-control col-xl-8 col-sm-7" name="logo" id="validationCustom02" ref="file" type="file" required="" @change="fileselected" />
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
                                                <img v-if="image" :src="image" width="100px" height="100px" />
                                            </div>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="detail">
                                                <div class="form-group mb-0 d-flex">
                                                    <label class="col-xl-3 col-sm-4">Detail :</label>
                                                    <div class=" col-xl-8 col-sm-7 editor-vue">
                                                        <vue-editor name="detail" v-model="banner.bannerDescription"></vue-editor>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-2 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4"></label>
                                                <button type="button" @click="submit()" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">Add</button>
                                                <button type="button" @click="$router.push('/admin/banner')" class="btn btn-light ml-1">
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
            </div>
        </div>
    </template>
</layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import {
    mapActions
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
    middleware: ["auth"],
    data() {
        return {
            image: '',
            banner: {
                bannerName: '',
                bannerDescription: '',
                logo: null
            }
        }
    },
    methods: {
        ...mapActions({
            setBanner: "banner/setBanner",
        }),

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

        submit() {
            this.setBanner(this.banner).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add Banner Successfully..!");
                    this.$router.push('/admin/banner')
                }
            })
        },

    }
};
</script>
