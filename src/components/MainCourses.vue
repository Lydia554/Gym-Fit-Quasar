<template>
  <q-layout>
    <section
      id="popular courses justify-content-center"
      class="courses zoom-in-section"
    >
      <div class="courses">
        <div class="-courses q-gutter-md row justify-center">
          <div
            v-for="(course, index) in MainCourses"
            :key="index"
            class="col-4-courses"
          >
            <q-card class="courses fixed-height-card">
              <q-img :src="course.image" alt="Course image" />
              <q-card-section>
                <div class="course-title-price">
                  <div class="text-h5-courses">{{ course.grouptitle }}</div>
                  <div class="text-subtitle2-courses">{{ course.price }}</div>
                </div>
                <div class="text-h6-courses">{{ course.title }}</div>
              </q-card-section>
              <q-card-section class="course-description">
                {{ course.description }}
              </q-card-section>

              <q-card-section>
                <div class="row-courses items-center">
                  <q-avatar class="trainer-img-courses">
                    <img :src="course.trainer.image" alt="Trainer image" />
                  </q-avatar>
                  <div class="courses-trainer-name">
                    {{ course.trainer.name }}
                  </div>
                  <div class="courses-icon">
                    <q-icon name="person" class="user-icon" />
                    {{ course.trainer.users }}

                    <q-icon name="favorite" class="likes-icon" />
                    {{ course.trainer.likes }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-layout>
</template>

<script>
import MainCoursesData from "../data/MainCoursesData.js";
import { mounted, beforeRouteLeave } from "../js/MainCoursesMethods.js";

export default {
  name: "MainCourses",

  components: {},

  data() {
    return MainCoursesData;
  },

  mounted,

  beforeRouteLeave,
};
</script>
<style scoped src="../css/MainCourses.css"></style>
