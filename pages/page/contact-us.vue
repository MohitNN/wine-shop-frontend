<template>
  <div>
    <Breadcrumbs title="Contact Us" />
    <!-- about section start -->
    <section class="about-page section-b-space" style="padding-top:0px">
      <div class="container">
         <div class="row">
          <div class="col-sm-12">
            <ValidationObserver v-slot="{ invalid }">
            <form  @submit.prevent="onSubmit">
              <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label>First Name</label>
                  <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="First name"
                        >
                          <input
                           class="form-control"
                            type="text"
                            placeholder="First Name"
                            v-model="fname"
                            name="First name"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                </div>
                <div class="col-md-6">
                  <label for="lname">Last Name</label>
                  <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="Last name"
                        >
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      v-model="lname"
                      placeholder="Last Name"
                      name="Last name"
                    />
                    <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-md-6">
                  <label for="phone">Phone number</label>
                   <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="phone no"
                        >
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    placeholder="Enter your number"
                    name="phone no"
                    
                  />
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-md-6">
                  <label for="email">Email</label>
                   <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="email"
                        >
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    name="email"                    
                  />
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-md-12">
                  <label for="message">Write Your Message</label>
                  <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="message"
                        >
                  <textarea
                    class="form-control"
                    placeholder="Write Your Message"
                    id="message"
                    v-model="message"
                    name="message"
                    rows="6"
                  ></textarea>  
                  <span class="validate-error">{{ errors[0] }}</span>
                  </ValidationProvider>               
                </div>
                <div class="col-md-12 mt-2">
                  <button
                            type="submit"
                            class="btn-solid btn"
                            :disabled="invalid"
                          >
                            Send Your Message
                 </button>
                </div>
              </div>
            </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import {  mapActions } from "vuex";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver
  },  
  data() {
    return {
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
     ...mapActions("layout", ["SaveContact"]),
    ...mapActions("gloable", ["setLoading"]),
    checkForm: function (e) {
      this.errors = []
      if (!this.fname) {
        this.errors.push('First name required.')
      }
      if (!this.lname) {
        this.errors.push('Last name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.phone) {
        this.errors.push('Phone Number required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.errors.length) return true
      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    onSubmit() {
      this.setLoading(true);
      var formData = new FormData();
      formData.append("firstname", this.fname);
      formData.append("lastname", this.lname);
      formData.append("email", this.email);
      formData.append("phone_no", this.phone);
      formData.append("message", this.message);
       this.SaveContact(formData).then((resp) => {
            if (resp.data.status) {
              this.setLoading(false);
              this.$toast.success("Request Send Successfully..!");
              this.$router.push({path:"/"});
            }
          })
        .catch((error) => {});
    }
  }
}
</script>
