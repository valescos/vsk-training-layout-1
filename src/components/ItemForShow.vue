<script setup lang="ts">
import AddToCart from "../icons/AddToCart.vue";
import ItemDetails from "../icons/ItemDetails.vue";
import { useCartStore } from "../stores/CartStore";
import { storeToRefs } from "pinia";
import { useModalStore } from "../stores/ModalStore";
const { addToCart } = useCartStore();
const modalStore = useModalStore();
const { openedModal, currentProductId } = storeToRefs(modalStore);
const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);

defineProps({
  img: String,
  name: String,
  price: Number,
  id: {
    type: String,
    required: true,
  },
});

function isItemInCart(id: string): boolean {
  return cartItems.value.includes(id);
}

function handleClick(id: string) {
  openedModal.value = "product";
  currentProductId.value = id;
}
</script>

<template>
  <div>
    <div class="relative">
      <div
        class="opacity-0 hover:opacity-100 absolute flex justify-center items-center gap-4 w-full h-full hover:bg-[#FFFFFF99] transition-all"
      >
        <AddToCart
          v-if="!isItemInCart(id)"
          @click="addToCart(id)"
          class="hover:scale-105 transition-all cursor-pointer"
        />
        <AddToCart
          variant="added"
          v-if="isItemInCart(id)"
          class="cursor-not-allowed transition-all"
        />
        <ItemDetails
          @click="handleClick(id)"
          class="hover:scale-105 transition-all cursor-pointer"
        />
      </div>
      <img :src="img" alt="" class="rounded-md border-2" />
    </div>
    <p class="text-[16px] font-light">{{ name }}</p>
    <p class="text-lg">{{ price }} ₽</p>
  </div>
</template>
