<template>
  <div class="new-feed-container">
    <div v-for="item in list_data" :key="item.id" class="form-container">
      <div class="blog-item">
        <div class="">{{ item.title }}</div>

        <div class="description-blog">
          {{ item.description }}
        </div>

        <div class="form-icon">
          <a-space class="icon-heart">
            <icon :style="{ color: 'rgb(160 169 169' }">
              <template #component>
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  :class="{ 'red-heart': item.heart }"
                  @click="toggleHeart(item)"
                >
                  <path
                    d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"
                  />
                </svg>
              </template> </icon
          ></a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Icon from "@ant-design/icons-vue";

interface ListData {
  id: string;
  title: string;
  description: string;
  heart: boolean;
}

export default defineComponent({
  components: {
    Icon,
  },
  name: "NewFeed",
  setup() {
    const list_data = ref<ListData[]>([
      { id: "2", title: "ABC", description: "2", heart: false },
      { id: "3", title: "ABC", description: "3", heart: false },
      { id: "4", title: "ABC", description: "4", heart: false },
      { id: "5", title: "ABC", description: "4", heart: false },
      { id: "6", title: "ABC", description: "4", heart: false },
      { id: "7", title: "ABC", description: "4", heart: false },
      { id: "8", title: "ABC", description: "4", heart: true },
      { id: "9", title: "ABC", description: "4", heart: false },
      { id: "9", title: "ABC", description: "4", heart: false },
    ]);

    function toggleHeart(item: ListData) {
      item.heart = !item.heart;
    }

    return { list_data, toggleHeart };
  },
});
</script>

<style lang="scss" scoped>
.new-feed-container {
  display: flex;
  flex-wrap: wrap;
  .form-container {
    width: 30%;
    margin-right: 20px;
    .blog-item {
      margin-bottom: 40px;
      background-color: #fff;
      border: 1px solid #dadde1;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      height: 100px;

      .form-icon {
        display: flex;
        justify-content: end;
        align-items: end;
        .icon-heart {
          .red-heart {
            color: red;
          }
        }
      }
      .description-blog {
        overflow-wrap: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 120px;
      }
    }
  }
}
</style>

<!-- <route lang="yaml">
meta:
  title: "new_feed"
  layout: guest-layout
</route> -->

<route>
  {
    "name": "NewFeed",
    "path": '/new_feed',
    "meta": {
      "requiresAuth": true
    }
  }
  </route>
