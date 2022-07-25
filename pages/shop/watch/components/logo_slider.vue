<template>
<div>
    <section>
        <div class="container">
            <div class="img-grid">
                <div v-for="(item, index) in brand" :key="index">
                    <div style="margin: 10px !important;">
                        <a href="#">
                            <img width="160px;" class="img-hover" :src="getUrl(item.image)" alt />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
import config from '@/config.json'
export default {
    computed: {
        ...mapState("menu", ["brand"]),
    },
    methods: {
        getUrl(path) {
            return config.baseUrl + "brand/" + path;
        }
    }
}
</script>
<style scoped>
.img-grid{
    max-width: 1400px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.img-hover{
    transition: 0.7s;
}
.img-hover:hover {
    filter: drop-shadow(1px 2px 3px black);
    width: 220px;
}
</style>