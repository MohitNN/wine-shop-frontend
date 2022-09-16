<template>
<div>
    <div>
    <Breadcrumbs title="Contact Us" />
    <!-- about section start -->
    <section class="about-page section-b-space" style="padding-top:0px">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5">
                    <div class="d-lg-flex align-items-baseline mb-3">
                        <h3>Email Us: </h3>
                        <h4 class="mt-0 mb-0 ml-3"><a href="#">Langkawiliquor@Gmail.Com</a></h4>
                    </div>
                    <div class="d-lg-flex align-items-center">
                        <h3>Call Us:</h3>
                        <h4 class="mt-0 mb-0 ml-3">
                            <li><i class="fa fa-phone"></i>+60 109488352</li>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <Location class="mt-5 mb-5" />
    </section>
    <SocialChat icon :attendants="attendants">
        <p slot="header">Click on one of our attendants below to chat on WhatsApp.</p>
        <template v-if="user.isAuthenticated == false || user.user.role == 'user'" v-slot:button>
            <img src="https://res.cloudinary.com/dgsljij3o/image/upload/v1656417854/whatsapp-icon-seeklogo.com_elquwo.svg" alt="icon whatsapp" aria-hidden="true" class="wp w-31 h-31">
        </template>
        <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
</div>
<div>
    <Footer />
</div>
</div>
</template>

<script>
import {
    SocialChat
} from 'vue-social-chat'
import Location from '../page/location.vue'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import {
    mapActions,
    mapState
} from "vuex";
import WP from "@/assets/images/whatsapp.png";
export default {
    components: {
        Footer,
        Breadcrumbs,
        SocialChat,
        Location
    },
    data() {
        return {
            attendants: [{
                    app: 'whatsapp',
                    label: 'Support',
                    name: 'Langkawi liquor',
                    number: '60109488352',
                    avatar: {
                        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
                        alt: 'Alan Ktquez avatar'
                    }
                },
                // ...
            ],
            errors: [],
            fname: null,
            lname: null,
            email: null,
            phone: null,
            message: null,
            wpImage: WP,
        }
    },
    computed: {
        ...mapState('admin_adminauth', ['user'])
    },
}
</script>

<style>
.wp {
    width: 44px;
    height: 44px;
    display: block;
    position: fixed;
    bottom: 29px;
    right: 27px;
    z-index: 9999999;
}

section {
    position: relative;
}

@media only screen and (max-width: 600px) {
    .wp {
        width: 44px;
        height: 44px;
        display: block;
        position: fixed;
        bottom: 29px;
        right: 27px;
        z-index: 9999999;
    }
    .vsc-popup{
        bottom: 65px !important;

    }
}
</style>
