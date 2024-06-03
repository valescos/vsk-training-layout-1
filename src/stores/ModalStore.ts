import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const openedModal = ref("none");
  const currentProductId = ref<string>("");

  return { openedModal, currentProductId };
});
