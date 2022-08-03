<template>
  <div>
    <Breadcrumbs title="Contact Us" />
    <!-- about section start -->
    <section class="about-page section-b-space" style="padding-top:0px">
      <div class="container">
         <div class="row">
          <div class="col-sm-12">
            <form class="theme-form" @submit="checkForm" method="post">
              <div v-if="errors.length">
                  <ul class="validation-error mb-3">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"                     
                      v-model="fname"
                      placeholder="First Name"
                      name="fname"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="lname">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lname"
                      v-model="lname"
                      placeholder="Last Name"
                      name="lname"
                      required
                    />
                </div>
                <div class="col-md-6">
                  <label for="phone">Phone number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    placeholder="Enter your number"
                    name="phone"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="message">Write Your Message</label>
                  <textarea
                    class="form-control"
                    placeholder="Write Your Message"
                    id="message"
                    v-model="message"
                    name="message"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12 mt-2">
                  <input
                  type="submit"
                  class="btn btn-solid"
                  value="Send Your Message"
                >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },  
  data() {
    return {
      phoneimage: require('@/assets/images/icon/phone.png'),
      emailimage: require('@/assets/images/icon/email.png'),
      phone1: '+91 123 - 456 - 7890',
      phone2: '+86 163 - 451 - 7894',
      address: 'ABC Complex,Near xyz, New York <br /> USA 123456',
      email1: 'Support@Shopcart.com',
      email2: 'info@shopcart.com',
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
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
    }
  }
}
</script>
