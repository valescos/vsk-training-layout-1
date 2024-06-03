<script setup lang="ts">
import { ref } from "vue";
import Cross from "../icons/Cross.vue";

const collapsed = ref(true);

defineProps({
  question: String,
  answer: String,
});
</script>

<template>
  <div
    class="flex justify-between cursor-pointer"
    @click="collapsed = !collapsed"
  >
    <h2 class="text-lg font-semibold">{{ question }}</h2>
    <div :class="collapsed ? '' : 'rotate-45'" class="transition-all">
      <Cross />
    </div>
  </div>
  <div v-show="!collapsed" class="pt-2">
    {{ answer }}
  </div>
</template>

<style></style>
