import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => {
    return { currentLabelRouter: "", currentLabelGroup: "" };
  },
  actions: {
    updateCurrentRouter(text: string) {
      this.currentLabelRouter = text;
      this.currentLabelGroup = text;
    },
  },
});
