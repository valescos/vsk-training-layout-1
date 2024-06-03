<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import lapti_bg from "../assets/lapti_bg.jpg";
</script>

<template>
  <div class="bg-[#484283] relative overflow-hidden" id="about_us">
    <Wrapper>
      <div class="h-[580px] flex items-center relative">
        <div class="w-[40%] text-white flex flex-col gap-4 z-20">
          <h1 class="text-3xl font-semibold">Пара слов о сайте</h1>
          <p>
            Шуточный сайт сделанный для самообучения веб-разработке. Изначально
            просто верстал
            <a
              class="hover:underline text-blue-300"
              href="https://verstaem.online/projects/sneakmax/"
              >бесплатный figma-макет</a
            >
            ради тренировки css/html. Впоследствии родилась идея реализовать
            интерактивный функционал :)
          </p>
        </div>
        <img
          :src="lapti_bg"
          alt=""
          class="cliped absolute right-0 top-0 h-[100%]"
        />
      </div>
    </Wrapper>

    <div
      class="border-[1px] border-white -left-[13%] -top-[45%] w-[600px] h-[600px] absolute rounded-full"
    />
    <div
      class="border-[1px] border-white left-[15%] -top-[29%] w-[300px] h-[300px] absolute rounded-full"
    />
    <div
      class="bg-[#F14F4F] left-[30.5%] top-[9%] w-[15px] h-[15px] absolute rounded-full"
    />
  </div>
</template>

<style scoped>
.cliped {
  clip-path: polygon(25% 0%, 100% 0%, 85% 100%, 5% 100%);
}
</style>
