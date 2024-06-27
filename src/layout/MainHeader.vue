<template>
  <q-layout>
    <q-header class="header">
      <q-toolbar class="header-logo">
        <q-toolbar-title class="logo"> Gym-Fit </q-toolbar-title>

        <q-list class="list row q-gutter-sm">
          <router-link active-class="active-link" to="/">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> Home </q-item-section>
            </q-item>
          </router-link>
          <router-link active-class="active-link" to="/courses">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> Courses </q-item-section>
            </q-item>
          </router-link>
          <router-link active-class="active-link" to="/events">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> Events </q-item-section>
            </q-item>
          </router-link>
          <router-link active-class="active-link" to="/pricing">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> Pricing </q-item-section>
            </q-item>
          </router-link>
          <router-link active-class="active-link" to="/contact">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> Contact </q-item-section>
            </q-item>
          </router-link>
          <router-link active-class="active-link" to="/about">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> About </q-item-section>
            </q-item>
          </router-link>

          <router-link active-class="active-link" to="/login">
            <q-item clickable v-ripple class="col-auto">
              <q-item-section class="header-link"> LOGIN </q-item-section>
            </q-item>
          </router-link>
        </q-list>
      </q-toolbar>
    </q-header>
    <div v-if="$route.path === '/pricing'">
      <div class="title-container">
        <h1 class="page-title">Pricing</h1>
      </div>
    </div>
    <div v-else-if="$route.path === '/contact'">
      <div class="title-container">
        <h1 class="page-title">Contact Us</h1>
      </div>
    </div>

    <div v-else-if="$route.path === '/about'">
      <div class="title-container">
        <h1 class="page-title">About Us</h1>
      </div>
    </div>

    <div v-else-if="$route.path === '/courses'">
      <div class="title-container">
        <h1 class="page-title">Courses</h1>
      </div>
    </div>

    <div v-else-if="$route.path === '/events'">
      <div class="title-container">
        <h1 class="page-title">Events</h1>
      </div>
    </div>

    <div v-else-if="$route.path !== '/'">
      <div class="title-container">
        <h1 class="page-title">{{ $route.name }}</h1>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style src="../css/MainHeader.css"></style>
