<script setup>
import Layout from "./page/Layout.vue";
import Login from "./page/Login.vue";
</script>

<template>
  <layout v-if="!$route.meta.hideLayout"></layout>
  <login v-else></login>
</template>

<style scoped></style>
