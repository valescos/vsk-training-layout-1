<script setup lang="ts">
import BaseModal from "./BaseModal.vue";
import Wrapper from "./Wrapper.vue";
import StyledButton from "./StyledButton.vue";
import BasketIcon from "../icons/BasketIcon.vue";
import DeleteFromCart from "../icons/DeleteFromCart.vue";
import { useModalStore } from "../stores/ModalStore";
import { useLaptiStore } from "../stores/LaptiStore";
import { useCartStore } from "../stores/CartStore";
import { storeToRefs } from "pinia";
const cartStore = useCartStore();
const modalStore = useModalStore();
const laptiStore = useLaptiStore();
const { cartItems } = storeToRefs(cartStore);
const { openedModal } = storeToRefs(modalStore);
const { cartLapti, cartSumm } = storeToRefs(laptiStore);
const { removeFromCart } = useCartStore();
</script>

<template>
  <BaseModal v-if="openedModal === 'basket'">
    <Wrapper>
      <div class="absolute bg-white top-[60px] right-0 w-[40%] h-[24rem]">
        <div class="flex flex-col gap-4 relative h-[18rem] overflow-x-hidden">
          <div
            v-for="item in cartLapti"
            :key="item.id"
            class="flex gap-4 justify-between hover:bg-[#CCD9F233] p-4"
          >
            <div class="flex gap-4">
              <img :src="item.img" alt="" class="h-16" />
              <div>
                <p>{{ item.name }}</p>
                <p class="font-bold text-lg text-[#4D4D4D]">
                  {{ item.price }} ₽
                </p>
              </div>
            </div>
            <DeleteFromCart
              @click="removeFromCart(item.id)"
              class="self-center hover:scale-125 transition-all cursor-pointer"
            />
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 p-4 flex justify-between items-center w-full"
        >
          <div>
            <p>Итого:</p>
            <p class="font-bold text-xl">{{ cartSumm }} ₽</p>
          </div>
          <div class="self-end">
            <StyledButton>К оформлению</StyledButton>
          </div>
        </div>
      </div>
    </Wrapper>
  </BaseModal>

  <div
    class="flex gap-1 relative cursor-pointer [&>*]:hover:underline [&>*]:transition-all"
    @click="openedModal = 'basket'"
  >
    <span>Корзина</span>
    <BasketIcon />
    <div
      :class="cartItems.length === 0 && 'hidden'"
      class="bg-[#F14F4F] absolute rounded-full w-[18px] h-[18px] top-[50%] -right-2 flex justify-center items-center text-[10px]"
    >
      {{ cartItems.length }}
    </div>
  </div>
</template>

<style></style>
