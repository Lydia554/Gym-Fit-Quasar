<template>
  <q-page padding>
    <Header />

    <div class="main-about-flex-container slide-up-section">
      <div class="main-about-text-content">
        <q-card-section class="slide-up">
          <div class="main-about-text-h6">
            {{ workoutText }}
          </div>
          <q-list>
            <q-item v-for="(workout, index) in workouts" :key="index">
              <q-item-section avatar>
                <q-icon name="check_circle" />
              </q-item-section>
              <q-item-section>
                <ul class="main-about-list-items">
                  <li><i class="icofont-check-circled"></i> {{ workout }}</li>
                </ul>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </div>
      <div class="main-about-image-content">
        <q-img :src="AboutImage" />
      </div>
    </div>

    <section id="main-about-counts" class="main-about-section-bg">
      <div class="main-about-row counters">
        <div
          class="main-about-col-lg-3 main-about-col-6 text-center"
          v-for="(counter, index) in counters"
          :key="index"
        >
          <span data-toggle="main-about-counter-up" class="counter-value">{{
            counter.value
          }}</span>
          <p class="counter-label">{{ counter.label }}</p>
        </div>
      </div>
    </section>

    <q-carousel v-model="currentSlide">
      <q-carousel-slide
        v-for="(group, index) in testimonialGroups"
        :key="index"
        :name="index"
        class="main-about-carousel-slide"
      >
        <div class="main-about-row">
          <div
            class="main-about-col"
            v-for="testimonial in group"
            :key="testimonial.name"
          >
            <div class="main-about-testimonial-wrap">
              <div class="main-about-testimonial-item">
                <q-img
                  :src="testimonial.image"
                  class="main-about-testimonial-img"
                  alt=""
                />
                <h3 class="main-about-text-h3">{{ testimonial.name }}</h3>
                <h4 class="main-about-text-h4">{{ testimonial.position }}</h4>
                <p class="main-about-quote">
                  <q-icon name="format_quote" />
                  {{ testimonial.quote }}
                  <q-icon name="format_quote" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="main-about-button-container">
      <q-btn
        @click="previousSlide"
        icon="arrow_back"
        class="main-about-previous"
      />
      <q-btn @click="nextSlide" icon="arrow_forward" class="next-main-about" />
    </div>
  </q-page>
</template>

<script>
import {
  mounted,
  beforeRouteLeave,
  methods,
  computed,
} from "../js/MainAboutMethods.js";
import data from "../data/MainAboutData.js";

export default {
  name: "MainAbout",
  data() {
    return data;
  },
  computed,
  methods,
  mounted,
  beforeRouteLeave,
};
</script>

<style scoped src="../css/MainAbout.css"></style>
