<template>
  <q-page class="contact-info">
    <Header />
    <div class="q-pa-md-contact slide-up-section">
      <div class="map-container">
        <div v-html="mapIframe" class="map"></div>
      </div>
      <div class="contact-row slide-up">
        <div class="left-info">
          <div v-for="(info, index) in contactInfo" :key="index">
            <q-icon class="contact-icon" :name="info.icon" />
            <h4>{{ info.title }}</h4>
            <p>{{ info.text }}</p>
          </div>
        </div>
        <div class="right">
          <q-form @submit="onSubmit" class="q-gutter-md php-email-form">
            <div class="row">
              <div class="col-12 col-md-6">
                <q-input outlined v-model="form.name" label="Your Name" />
              </div>
              <div class="col-12 col-md-6">
                <q-input outlined v-model="form.email" label="Your Email" />
              </div>
            </div>
            <q-input outlined v-model="form.subject" label="Subject" />
            <q-input
              outlined
              v-model="form.message"
              type="textarea"
              label="Message"
            />
            <div class="row justify-center">
              <q-btn
                label="Send Message"
                class="contact"
                type="submit"
                color="primary"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
    <Footer />
  </q-page>
</template>

<script>
import MainContactData from "../data/MainContactData.js";
import { mounted, beforeRouteLeave } from "../js/MainContactMethods.js";

export default {
  name: "MainContact",
  components: {},
  data() {
    return MainContactData;
  },
  methods: {
    onSubmit() {
      // handle form submission here
    },
  },
  mounted,
  beforeRouteLeave,
};
</script>

<style scoped src="../css/MainContact.css"></style>
