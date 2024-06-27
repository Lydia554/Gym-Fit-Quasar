<template>
  <q-page class="MainLogin-box">
    <div class="MainLogin-logo">
      <q-btn class="sign-up" flat to="/"><b>Sign</b>Up</q-btn>
    </div>
    <q-card class="q-card">
      <q-card-section class="q-card-section">
        <div class="text-h6">{{ registerMessage }}</div>
        <q-form @submit="userLogin">
          <q-input
            outlined
            v-model="user.name"
            label="Full name"
            class="signup-icon"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            outlined
            v-model="user.email"
            label="Email"
            type="email"
            class="signup-icon"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input
            outlined
            v-model="user.password"
            label="Password"
            type="password"
            class="signup-icon"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-input
            outlined
            v-model="user.retypePassword"
            label="Retype password"
            type="password"
            class="signup-icon"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-item class="q-mb-md">
            <q-item-section>
              <q-checkbox
                v-model="user.agree"
                label="I agree to the terms"
                class="check"
              />
            </q-item-section>
            <q-item-section side>
              <q-btn label="Register" type="submit" class="register" />
            </q-item-section>
          </q-item>
        </q-form>
        <div class="text-center">
          <p>{{ orMessage }}</p>
          <q-btn color="primary" @click="$router.push('/login')" class="q-btn">
            <q-icon name="facebook" class="q-mr-sm" />
            {{ accountMessage }}
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import MainSignupData from "../data/MainSignupData.js";

export default {
  name: "MainSignup",
  data: MainSignupData,
  methods: {
    userLogin: function () {
      console.log(this.user);
    },
  },
};
</script>

<style src="../css/MainSignup.css"></style>
