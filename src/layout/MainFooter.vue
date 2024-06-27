<template>
  <q-layout class="layout">
    <q-footer class="footer">
      <div class="footer-top">
        <q-container>
          <q-row class="row">
            <q-col cols="12" sm="6" md="3" class="footer-contact">
              <h3>{{ footerContact.title }}</h3>
              <p>
                {{ footerContact.address }} <br />
                {{ footerContact.city }}<br />
                {{ footerContact.country }}<br /><br />
                <strong>Phone:</strong> {{ footerContact.phone }}<br />
                <strong>Email:</strong> {{ footerContact.email }}<br />
              </p>
            </q-col>

            <q-col cols="12" sm="6" md="2" class="footer-links">
              <h4>Useful Links</h4>
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  v-for="(link, index) in usefulLinks"
                  :key="index"
                >
                  <q-item-section>{{ link }}</q-item-section>
                </q-item>
              </q-list>
            </q-col>

            <q-col cols="12" sm="6" md="2" class="footer-links">
              <h4>Our Services</h4>
              <q-list dense>
                <q-item
                  clickable
                  v-ripple
                  v-for="(service, index) in ourServices"
                  :key="index"
                >
                  <q-item-section>{{ service }}</q-item-section>
                </q-item>
              </q-list>
            </q-col>

            <q-col cols="12" sm="6" md="4" class="footer-newsletter">
              <h4 class="newsletter-title">{{ newsletter.title }}</h4>
              <p class="newsletter-description">{{ newsletter.description }}</p>
              <p class="newsletter-details">{{ newsletter.details }}</p>
              <q-form @submit="onSubmit" class="newsletter-form">
                <q-input
                  type="email"
                  v-model="newsletter.email"
                  class="newsletter-input"
                />
                <q-btn
                  type="submit"
                  label="Subscribe"
                  class="newsletter-button"
                />
              </q-form>
            </q-col>
          </q-row>
        </q-container>
      </div>

      <div class="footer-bottom">
        <q-container>
          <q-row class="row footer-bottom-row">
            <q-col class="copyright">
              <div class="copyright">
                &copy; Copyright <strong><span>Gym-Fit</span></strong
                >. All Rights Reserved
              </div>
            </q-col>

            <q-col class="social-links-col">
              <div class="social-links">
                <a
                  v-for="(link, index) in socialLinks"
                  :key="index"
                  :href="link.url"
                  :class="link.icon"
                >
                  <q-icon class="footer-icon" :name="link.icon"></q-icon>
                </a>
              </div>
            </q-col>
          </q-row>
        </q-container>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import MainFooterData from "../data/MainFooterData.js";
import "../css/MainFooter.css";

export default {
  data() {
    return MainFooterData;
  },
  methods: {
    onSubmit() {},
  },
};
</script>
