<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Brand</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Logo :</label>
                                            <input class="form-control col-xl-8 col-sm-7" id="validationCustom02" type="file" required="" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        <div class="form-group d-flex">
                                            <label class="col-xl-3 col-sm-4">Detail :</label>
                                            <div class=" col-xl-8 col-sm-7 editor-vue">
                                                <vue-editor></vue-editor>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="offset-xl-3 offset-sm-4">
                                        <button type="submit" class="btn btn-primary">Add</button>
                                        <button type="button" class="btn btn-light ml-1">
                                            Discard
                                        </button>
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
    mounted(){ console.log(this.$route)
          console.log(this.$route.params.editbrand)
    }
};
</script>
