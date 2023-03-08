<template>
  <div class="the-footer">
    <div class="fotter-text">© 2022, BMW Japan Finance Corp.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.fotter-text {
  width: 100%;
  font-size: 12px;
  text-align: right;
  color: #fff;
  padding: 5px 40px;
}

.the-footer {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 25px;
  color: #fff;
  background-color: #aaa38a;
  line-height: 100%;
  display: flex;
}
</style>
