import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<string[]>([]);

  function addToCart(id: string) {
    console.log(cartItems.value.includes(id), id);
    if (!cartItems.value.includes(id)) cartItems.value.push(id);
  }

  function removeFromCart(id: string) {
    const findID = cartItems.value.findIndex((i) => i === id);
    cartItems.value = [
      ...cartItems.value.slice(0, findID),
      ...cartItems.value.slice(findID + 1, cartItems.value.length),
    ];
  }

  return { cartItems, removeFromCart, addToCart };
});
