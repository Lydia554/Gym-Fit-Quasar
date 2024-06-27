<template>
  <q-page>
    <div class="MainLogin-box-login">
      <div class="MainLogin-logo">
        <q-btn class="log-in-login" flat to="/"><b>Log</b>In</q-btn>
      </div>

      <q-card-section class="section-login">
        <div class="text-h6-login">{{ signInText }}</div>

        <q-form @submit="userMainLogin" class="form-login">
          <q-input
            outlined
            v-model="user.email"
            label="Email"
            class="icon-email"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input
            outlined
            v-model="user.password"
            label="Password"
            class="icon-pass"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <div class="row-login">
            <div class="col-8-login">
              <q-checkbox
                v-model="user.remember"
                class="remember-login"
                label="Remember Me"
              />
            </div>
            <div class="col-4-login">
              <q-btn class="sign-in-login" type="submit" label="Sign In" />
            </div>
          </div>
        </q-form>

        <p class="mb-1-login">
          <q-btn class="forgot-login" flat :to="forgotBtn.link">{{
            forgotBtn.label
          }}</q-btn>
        </p>
        <p class="mb-0-login">
          <q-btn class="register-login" to="/signup">{{
            formattedButtonTitle
          }}</q-btn>
        </p>
      </q-card-section>
    </div>
  </q-page>
</template>

<script>
import data from "../data/MainLoginData.js";
import methods from "../js/MainLoginMethods.js";

export default {
  name: "MainLogin",
  data,
  methods,
  computed: {
    formattedButtonTitle() {
      return (
        this.buttonTitle.charAt(0).toUpperCase() +
        this.buttonTitle.slice(1).toLowerCase()
      );
    },
  },
  components: {},
  props: {},
};
</script>

<style scoped src="../css/MainLogin.css"></style>
