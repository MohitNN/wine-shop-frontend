<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Sub Category</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" />
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4">Description :</label>
                                            <textarea rows="4" class="col-xl-8 col-md-7"></textarea>
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
    data() {
        return{
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
