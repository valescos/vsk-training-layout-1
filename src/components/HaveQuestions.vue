<script setup lang="ts">
import StyledButton from "./StyledButton.vue";
import { ref } from "vue";

const name = ref("");
const tel = ref("");

function flushForm() {
  name.value = "";
  tel.value = "";
}
</script>

<template>
  <form class="bg-[#484283] rounded-sm text-center p-8 flex flex-col gap-4">
    <h2 class="text-white text-lg font-bold">Есть вопросы?</h2>
    <p class="text-white">
      Заполните форму и менеджер с вами не свяжется, так сайт не настоящий :)
    </p>
    <input
      type="text"
      placeholder="Ваше имя"
      class="p-4 rounded-sm"
      v-model="name"
    />
    <input
      type="tel"
      placeholder="Номер телефона"
      class="p-4 rounded-sm"
      v-model="tel"
    />
    <StyledButton type="red" :disabled="false" @click="flushForm"
      >Отправить</StyledButton
    >
  </form>
</template>

<style></style>
