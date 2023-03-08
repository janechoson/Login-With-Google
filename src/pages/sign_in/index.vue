<template>
  <div class="sign-in">
    <div class="sign-in-form"><Login /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/Login/Login.vue";

export default defineComponent({
  components: { Login },
  setup() {},
});
</script>

<style lang="scss" scoped>
.sign-in {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

<route lang="yaml">
meta:
  name: "sign_in"
  layout: guest-layout
</route>
