import { reactive } from "vue";

export const loading = reactive({
  isActive: false as boolean,
});

export const openLoading = () => {
  loading.isActive = true;
};

export const closeLoading = (time = 500) => {
  setTimeout(() => {
    loading.isActive = false;
  }, time);
};
