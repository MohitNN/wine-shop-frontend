<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Sub Category</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation" novalidate="">
                                    <h4>General</h4>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label for="validationCustom0" class="col-xl-3 col-md-4"><span>*</span> Coupan Title</label>
                                                <input class="form-control col-md-7" id="validationCustom0" type="text" required="" />
                                            </div>
                                            <div class="form-group row">
                                                <label for="validationCustom1" class="col-xl-3 col-md-4"><span>*</span>Coupan Code</label>
                                                <input class="form-control col-md-7" id="validationCustom1" type="text" required="" />
                                                <div class="valid-feedback">
                                                    Please Provide a Valid Coupon Code.
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Start Date</label>
                                                <input class="datepicker-here form-control digits col-md-7" type="text" data-language="en" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">End Date</label>
                                                <input class="datepicker-here form-control digits col-md-7" type="text" data-language="en" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Status</label>
                                                <label class="d-block" for="chk-ani">
                                                    <input class="checkbox_animated" id="chk-ani" type="checkbox" />
                                                    Enable the Coupon
                                                </label>
                                            </div>
                                            <div class="pull-right">
                                                <button type="button" class="btn btn-primary">Save</button>
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

export default {
    components: {
        layout
    },
    data() {
        return {
            image: '',
        }
    },
    methods: {
        fileselected(e) {
            const file = e.target.files.item(0);
            const reader = new FileReader();
            reader.addEventListener('load', this.imageloaded);
            reader.readAsDataURL(file);

        },
        imageloaded(e) {
            this.image = e.target.result;
        }
    }
};
</script>
