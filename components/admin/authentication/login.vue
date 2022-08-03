<template>
  <form
    class="form-horizontal auth-form"
    @submit.prevent="handleSubmit"
    method="post"
  >
    <div class="form-group">
      <input
        v-model="username"
        name="login[username]"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
      />
    </div>
    <div class="form-group">
      <input
        :type="type"
        v-model="password"
        name="login[password]"
        class="form-control"
      />
    </div>
    <div class="form-terms">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customControlAutosizing"
        />
        <label class="custom-control-label" for="customControlAutosizing"
          >Remember me</label
        >
        <a role="button" class="btn btn-default forgot-pass" @click="$router.push('/page/account/forget-password')">lost your password</a>
      </div>
    </div>
    <div class="form-button">
      <button class="btn btn-primary" type="submit" >
        Login
      </button>
    </div>
  </form>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  data() {
    return {
      type: "password",
      username: "admin@gmail.com",
      password: "admin123",
      submitted: false
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      login:"admin_adminauth/login"
    }),
    handleSubmit() {
      this.submitted = true;
      this.login({email:this.username , password:this.password}).then((resp) => {
         if(resp.data.status) {
          this.$toast.success("Login Succesfull");
          this.$router.push('/admin/dashboard');
         }
      }).catch((error) => {
           this.$toast.error("Something went wrong.");
      })
    },
  }
};
</script>