<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import ItemsFilter from "../components/ItemsFilter.vue";
import ItemsForShow from "../components/ItemsForShow.vue";
import BaseModal from "../components/BaseModal.vue";
import Star from "../icons/Star.vue";
import StyledButton from "../components/StyledButton.vue";
import { useModalStore } from "../stores/ModalStore";
import { storeToRefs } from "pinia";
import { useLaptiStore } from "../stores/LaptiStore";
import { useCartStore } from "../stores/CartStore";
const modalStore = useModalStore();
const cartStore = useCartStore();
const { openedModal, currentProductId } = storeToRefs(modalStore);
const { getItemById } = useLaptiStore();
const { cartItems } = storeToRefs(cartStore);
const { addToCart, removeFromCart } = useCartStore();
</script>

<template>
  <BaseModal v-if="openedModal === 'product'">
    <Wrapper>
      <div
        class="absolute bg-white top-[120px] w-[90%] left-[5%] p-4 grid grid-cols-2 gap-8"
      >
        <img :src="getItemById(currentProductId)?.img" />
        <div class="flex flex-col justify-between w-full gap-4">
          <h3 class="text-[#444B58] text-3xl">
            {{ getItemById(currentProductId)?.name }}
          </h3>
          <div class="flex gap-[2px]">
            <div v-for="item in 5" :key="item"><Star /></div>
          </div>
          <div>
            <p>Доступные размеры:</p>
            <div class="flex gap-2">
              <div
                v-for="(size, index) in getItemById(currentProductId)?.sizes"
                :key="index"
                class="py-1 px-2 border-[2px] border-[#B2B5BB] rounded-md text-sm"
              >
                {{ size }}
              </div>
            </div>
          </div>
          <div>
            <p>Цена:</p>
            <p class="text-[#444B58] text-3xl font-bold">
              {{ getItemById(currentProductId)?.price }} ₽
            </p>
          </div>
          <StyledButton
            v-if="!cartItems.includes(currentProductId)"
            @click="addToCart(currentProductId)"
            >Добваить в корзину</StyledButton
          >
          <StyledButton
            v-if="cartItems.includes(currentProductId)"
            @click="removeFromCart(currentProductId)"
            >Удалить из корзины</StyledButton
          >
        </div>
      </div>
    </Wrapper>
  </BaseModal>

  <Wrapper>
    <h2 id="catalog" class="text-[30px] py-8 font-semibold">Каталог</h2>
    <div class="grid grid-cols-4 gap-4">
      <div>
        <ItemsFilter />
      </div>
      <div class="col-span-3">
        <ItemsForShow />
      </div>
    </div>
  </Wrapper>
</template>

<style></style>
