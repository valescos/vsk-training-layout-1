<script setup lang="ts">
import Logo from "../icons/Logo.vue";
import { NAV_ITEMS } from "../data";
import Basket from "./Basket.vue";

defineProps({
  basketcase: Boolean,
});

function scrollToTarget(hashlink: string) {
  const target = document.getElementById(`${hashlink}`);
  target?.scrollIntoView({
    behavior: "smooth",
  });
}
</script>

<template>
  <nav class="flex items-center justify-between py-2">
    <Logo />
    <div class="flex gap-8 [&>*]:text-white [&>*]:text-[14px]">
      <span
        v-for="item in NAV_ITEMS"
        class="hover:underline cursor-pointer"
        @click="scrollToTarget(item.hashlink)"
      >
        {{ item.title }}
      </span>
      <span v-if="basketcase">
        <Basket />
      </span>
    </div>
  </nav>
</template>

<style scoped></style>
