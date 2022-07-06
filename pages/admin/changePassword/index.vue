<template>
<layout>
    <template v-slot:content>
        <div>
            <div class="container-fluid">
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Change Password</h5>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div style="height: 100% !important;" class="card tab2-card">
                            <div class="card-body">
                                <ul class="nav nav-tabs tab-coupon mb-0" id="top-tab" role="tablist">
                                    <div class="tab-content" id="top-tabContent">
                                        <b-card-text>
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                                <div class="form">
                                                    <div class="form-group mb-3 row">
                                                        <h5 for="validationCustom01" class="f-w-600 col-xl-3 col-sm-4 mb-0">Current Password :</h5>
                                                        <input class="form-control col-xl-6 col-sm-7" id="validationCustom01" type="text" required="" />
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                        <h5 for="validationCustom01" class="f-w-600 col-xl-3 col-sm-4 mb-0">Change Password :</h5>
                                                        <input class="form-control col-xl-6 col-sm-7" id="validationCustom01" type="text" required="" />
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                        <h5 for="validationCustom01" class="f-w-600 col-xl-3 col-sm-4 mb-0">Confirm Password :`</h5>
                                                        <input class="form-control col-xl-6 col-sm-7" id="validationCustom01" type="text" required="" />
                                                    </div>
                                                    <div style="display: flex; justify-content: flex-end; width: 448px;">
                                                        <b-button class="" style="margin:25px;" @click="$router.push('/admin/brand/add-brand')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Save</b-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </div>
                                </ul>
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
export default {
    components: {
        layout
    },
    props:['categoryType'],
    data() {
        return {

        }
    },
    methods: {
        onFileChange(e) {
            var reader = new FileReader();
            reader.onload = function () {
                var output = document.getElementById("sawImg");
                output.src = reader.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        },
    }
}
</script>

<style>

</style>
