<template>
  <q-layout>
    <MainHeader />
    <section
      class="hero"
      :style="{ backgroundImage: `url(${heroBackgroundImage})` }"
    >
      <div class="zoom-in-section">
        <h1 v-html="heroTitle"></h1>
        | <br />
        <h2>{{ heroSubtitle }}</h2>
        <q-btn to="/courses" label="Get Started" class="get-started" />
      </div>
    </section>

    <q-page>
      <q-toolbar>
        <q-page-container>
          <section id="about" class="slide-up-section">
            <div class="section-about">
              <h1>{{ Title }}</h1>
              <h2>{{ Subtitle }}</h2>
            </div>
            <div class="row about">
              <div
                class="col-12 col-md-6 pt-4 pt-md-0 order-2 order-md-1 content"
              >
                <h3 class="about-h3">{{ MainAboutTitle }}</h3>

                <span
                  class="main-subtitle"
                  v-for="(item, index) in MainAboutSubtitle"
                  :key="index"
                >
                  {{ item }}
                </span>

                <ul class="list-items">
                  <li v-for="(item, index) in MainAboutList" :key="index">
                    <i class="material-icons">check_circle</i> {{ item }}
                  </li>
                </ul>
                <p class="description">{{ MainAboutDescription }}</p>
                <q-btn to="/about" label="Learn More" class="learn-more-btn" />
              </div>
            </div>
          </section>

          <!-- ======= Counts Section ======= -->

          <section id="counts" class="counts section-bg zoom-in-section">
            <div class="row counters">
              <div
                v-for="(count, index) in counts"
                :key="index"
                class="col-6 col-md-3 text-center"
              >
                <span data-toggle="counter-up">{{ count.number }}</span>
                <p>{{ count.label }}</p>
              </div>
            </div>
          </section>

          <!-- ======= Popular WhyUs/IconBox Section ======= -->

          <section id="why-us" class="why-us">
            <div class="row why us">
              <div
                class="col-12 col-md-3 d-flex align-items-stretch slide-up-section"
              >
                <div class="content">
                  <h3>{{ whyUs.title }}</h3>
                  <p v-for="(text, index) in whyUs.texts" :key="index">
                    {{ text }}
                  </p>
                  <div class="text-center">
                    <q-btn
                      class="more-btn"
                      to="/contact"
                      label="Learn More"
                      right-icon="chevron_right"
                    />
                  </div>
                </div>
              </div>

              <div
                class="col-12 col-md-8 d-flex align-items-stretch zoom-in-section"
              >
                <div
                  class="icon-boxes d-flex flex-column justify-content-center"
                >
                  <div class="row justify-center">
                    <div
                      v-for="(box, index) in iconBoxes"
                      :key="index"
                      class="col-12 col-md-3 d-flex align-items-stretch"
                    >
                      <div class="icon-box mt-4 mt-md-0">
                        <q-img :src="box.image" class="img-fluid" alt="..." />
                        <q-icon :name="box.icon" />
                        <h4>{{ box.title }}</h4>
                        <p>{{ box.text }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ======= Popular MainCourses Section ======= -->

          <section class="courses zoom-in-section">
            <h1>{{ MainCoursesTitle }}</h1>
            <br />
            <h2>{{ MainCoursesSubtitle }}</h2>

            <div class="home-courses">
              <MainCourses />
            </div>
          </section>

          <!-- ======= Trainers Section ======= -->
          <section id="trainers" class="trainers slide-up-section">
            <h1>{{ MainTrainersTitle }}</h1>
            <br />
            <h2>{{ MainTrainersSubtitle }}</h2>
            <div class="row justify-center">
              <div
                v-for="(trainer, index) in trainers"
                :key="index"
                class="col-12 col-sm-6 col-md-4"
              >
                <q-card class="trainer-card">
                  <q-card-section>
                    <div class="trainer-info">
                      <h3 class="trainer-name">
                        <a :href="trainer.detailsLink">{{ trainer.name }} </a>
                        <p class="trainer-specialty">
                          {{ trainer.specialty }}
                        </p>
                      </h3>
                    </div>

                    <p class="trainer-description">
                      {{ trainer.description }}
                    </p>
                  </q-card-section>

                  <q-card-actions align="center" class="social-icons">
                    <a href="https://twitter.com" target="_blank">
                      <q-icon name="mdi-twitter" class="social-icon" />
                    </a>
                    <a href="https://facebook.com" target="_blank">
                      <q-icon name="mdi-facebook" class="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                      <q-icon name="mdi-instagram" class="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                      <q-icon name="mdi-linkedin" class="social-icon" />
                    </a>
                  </q-card-actions>
                </q-card>
              </div>
            </div>
          </section>
        </q-page-container>
      </q-toolbar>
    </q-page>
  </q-layout>
</template>
<script>
import MainHomeData from "../data/MainHomeData.js";
import { mounted, beforeRouteLeave } from "../js/MainHomeMethods.js";
import MainCourses from "./MainCourses.vue";

export default {
  name: "MainHome",

  components: {
    MainCourses,
  },

  data() {
    return MainHomeData;
  },

  mounted,

  beforeRouteLeave,
};
</script>

<style scoped src="../css/MainHome.css"></style>
