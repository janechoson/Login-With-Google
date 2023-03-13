<template>
  <div class="system-layout">
    <TheHeader class="the-header"></TheHeader>
    <div class="marquee_wrapper">
      <p class="marquee">text running</p>
    </div>
    <router-view />
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./TheHeader/index.vue";
import TheFooter from "./TheFooter/index.vue";
</script>

<style lang="scss">
.system-layout {
  height: 100%;
  width: 100%;
  @keyframes marquee {
    0% {
      margin-left: 100%;
      transform: translateX(0%);
    }
    100% {
      margin-left: 0;
      transform: translateX(-100%);
    }
  }

  .marquee_wrapper {
    overflow: hidden;
    background-color: #fcf7ef;
    margin-top: -1rem;
    .marquee {
      animation: marquee 10s linear infinite;
      display: inline-block;
      white-space: nowrap;
      height: 5rem;
      font-weight: 400;
      font-size: 14px;
      font-style: italic;
      line-height: 5rem;
      color: var(--primary-color);
      margin-bottom: 0;
    }
  }
}
</style>
