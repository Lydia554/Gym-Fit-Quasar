<template>
  <q-layout>
    <div id="app">
      <MainHeader />

      <q-page-container>
        <keep-alive>
          <router-view />
        </keep-alive>
      </q-page-container>
    </div>

    <MainFooter />
  </q-layout>
</template>

<script>
import MainHeader from "./layout/MainHeader.vue";
import MainFooter from "./layout/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="css">
.q-layout {
  min-height: 0 !important;
}
</style>
