<template>
<div>
    <section>
        <div class="container">
            <div class="title4">
                <h2 class="title-inner4">{{ title }}</h2>
                <div class="line">
                    <span></span>
                </div>
            </div>
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
    data(){
        return{
            title : "Our Brandas"
        }
    },
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
.img-grid {
    max-width: 1400px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.img-hover {
    transition: 0.5s;
}

.img-hover:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    width: 220px;
}
</style>
