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
                    <div class="col-xl-4">
                        <div class="card" style="height: 100% !important;">
                            <div class="card-body">
                                <div class="profile-details text-center">
                                    <input type="file" @change="onFileChange" name="pic1" id="pic1" style="display:none;" />
                                    <label for="pic1">
                                        <img src="@/assets/images/admin.png" for="sawImg1" id="sawImg" alt="" style="cursor:pointer; width: 225px; object-fit: cov" class="img-fluid rounded-circle blur-up lazyloaded" />
                                    </label>
                                    <h3 class="f-w-600 mb-0">John deo</h3>
                                    <h6>johndeo@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div style="height: 100% !important;" class="card tab2-card">
                            <div class="card-body">
                                <ul class="nav nav-tabs tab-coupon mb-0" id="top-tab" role="tablist">
                                    <div class="tab-content" id="top-tabContent">
                                        <b-tabs content-class="mt-3">
                                            <b-tab title="profile" data-feather="user" active>
                                                <template slot="title">
                                                    <feather type="user"></feather>Profile
                                                </template>
                                                <b-card-text>
                                                    <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                                        <h5 class="f-w-600">Profile</h5>
                                                        <div class="table-responsive profile-table mb-0">
                                                            <div class="form">
                                                                <table class="table table-responsive mb-0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>First Name:</td>
                                                                            <div class="form-group mb-3 row">
                                                                                <input class="form-control" placeholder="First name" id="validationCustom01" type="text" required="" />
                                                                            </div>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Last Name:</td>
                                                                            <div class="form-group mb-3 row">
                                                                                <input class="form-control" placeholder="Last name" id="validationCustom01" type="text" required="" />
                                                                            </div>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Email:</td>
                                                                            <td>johndeo@gmail.com</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-card-text>
                                            </b-tab>
                                        </b-tabs>
                                    </div>
                                </ul>
                            </div>
                            <div>
                                <b-button class="float-right" style="margin:25px;" @click="$router.push('/admin/brand/add-brand')" v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Save</b-button>
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
