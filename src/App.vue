<script setup lang="ts">
import { RouterView } from "vue-router";
import Loading from "@/components/Global/Loading/index.vue";
import { loading } from "@/compositions/loading/index";
</script>

<template>
  <main>
    <Loading v-if="loading.isActive" class="main-loading" />
    <RouterView :class="{ 'loading-active': loading.isActive }" />
  </main>
</template>

<style lang="scss">
.main-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0.1, 0.1);
  z-index: 2000;
}
.loading-active {
  opacity: 0.5;
}
</style>
