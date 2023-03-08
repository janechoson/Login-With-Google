<template>
  <div class="system-layout">
    <TheHeader class="the-header"></TheHeader>
    <div class="the-main">
      <TheMenu class="the-menu"></TheMenu>
      <div class="the-content">
        <router-view />
      </div>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./TheHeader/index.vue";
import TheMenu from "./TheMenu/index.vue";
import TheFooter from "./TheFooter/index.vue";
</script>

<style lang="scss">
.system-layout {
  height: 100%;
  width: 100%;

  .the-main {
    height: 100%;
    display: flex;
    width: 100%;
    padding-top: 20px;
  }

  .the-content {
    width: calc(100% - 300px);
    padding: 0 20px 0 10px;
    margin: 0;
  }
  .the-menu {
    width: 300px;
    padding: 0 20px;
    box-sizing: none !important;
  }

  *:not(.the-menu) {
    box-sizing: border-box;
  }

  .ant-menu-item-only-child {
    padding-left: 20px !important;
  }
  .ant-menu-submenu-title {
    padding-left: 10px !important;
  }
}
</style>
