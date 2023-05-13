<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
   <template v-if="!$route.meta.hideNavBar">
     <NavBar />
   </template>
   <RouterView />
   <template v-if="!$route.meta.hideFooter">
     <Footer />
   </template>
 </template>
