<template>
  <Header />

  <div class="q-pa-md events slide-up-section">
    <div class="row custom-gutter slide-up">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="col-md-6 d-flex align-items-stretch"
      >
        <q-card class="my-card card slide-up">
          <q-img :src="event.image" alt="Event image" class="card-img" />
          <q-card-section class="card-body">
            <div class="text-h6 card-title">{{ event.title }}</div>
            <div class="text-subtitle2 card-text">{{ event.date }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-body1">{{ event.description }}</div>
            <div class="read-more">
              <a href="#">Read more</a>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import MainEventsData from "../data/MainEventsData.js";
import { mounted, beforeRouteLeave } from "../js/MainEventsMethods.js";

export default {
  name: "MainEvents",

  components: {},

  data() {
    return MainEventsData;
  },

  mounted,

  beforeRouteLeave,
};
</script>
<style scoped src="../css/MainEvents.css"></style>
