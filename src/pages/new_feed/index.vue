<template>
  <div class="new-feed-container">
    <div v-for="item in list_data" :key="item.stt">
      <div class="blog-item">
        {{ item.stt }} - {{ item.title }}
        <i id="heart-icon" class="fa fa-heart"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ListData {
  stt: string;
  title: string;
}
export default defineComponent({
  setup() {
    const list_data = ref<ListData[]>([
      { stt: "1", title: "1" },
      { stt: "2", title: "2" },
      { stt: "3", title: "3" },
      { stt: "4", title: "4" },
    ]);
    return { list_data };
  },
});
</script>

<style lang="scss" scoped>
.new-feed-container {
  padding: 100px;
  .blog-item {
    width: 30%;
    height: 100px;
    margin-bottom: 40px;
    border: 1px solid;
    border-radius: 10px;
  }
}
</style>

<route lang="yaml">
meta:
  title: "new_feed"
  layout: new-feed-layout
</route>
