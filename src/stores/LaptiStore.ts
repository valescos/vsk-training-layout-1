import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { LAPTI } from "../data/lapti";
import { Gender } from "../types";
import { useCartStore } from "./CartStore";
import { storeToRefs } from "pinia";

export const useLaptiStore = defineStore("lapti", () => {
  const cartStore = useCartStore();
  const { cartItems } = storeToRefs(cartStore);

  const filteredLapti = ref(LAPTI);

  const minPrice = computed(() => Math.min(...LAPTI.map((i) => i.price)));
  const maxPrice = computed(() => Math.max(...LAPTI.map((i) => i.price)));
  const lapiSizes = computed(() => {
    let sizes: number[] = [];
    LAPTI.forEach((i) => {
      sizes.push(...i.sizes);
    });
    return [...new Set(sizes)].sort((a, b) => a - b);
  });

  const cartLapti = computed(() =>
    LAPTI.filter((item) => cartItems.value.includes(item.id))
  );
  const cartSumm = computed(() =>
    cartLapti.value.reduce((acu, i) => acu + i.price, 0)
  );

  function getItemById(id: string) {
    return LAPTI.find((i) => i.id === id);
  }

  function filterLapti(
    min: number,
    max: number,
    pickedSizes: number[],
    pickedGender: Gender
  ) {
    filteredLapti.value = LAPTI.filter(
      (item) => item.price >= min && item.price <= max
    )
      .filter(
        (item) => pickedGender === "none" || item.gender.includes(pickedGender)
      )
      .filter(
        (i) =>
          !pickedSizes.join() ||
          pickedSizes.every((size) => i.sizes.includes(size))
      );
  }

  return {
    minPrice,
    maxPrice,
    lapiSizes,
    filteredLapti,
    filterLapti,
    getItemById,
    cartLapti,
    cartSumm,
  };
});
