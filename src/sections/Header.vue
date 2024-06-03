<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import Wrapper from "../components/Wrapper.vue";
import StyledButton from "../components/StyledButton.vue";
</script>

<template>
  <div class="bg-[#484283]">
    <Wrapper>
      <div class="border-b-[1px] border-[#FFFFFF80]">
        <NavBar :basketcase="true" />
      </div>
      <div class="h-[420px] flex items-center relative">
        <div class="w-[40%] text-white flex flex-col gap-4 z-20">
          <h1 class="text-3xl font-semibold">
            Отечественные лапти на любой вкус и кошелёк
          </h1>
          <p>
            Шуточный сайт-полигон, для тренировки навыков вёрстки и
            веб-разработки. Если вы действительно желали лаптей — извините.
          </p>
          <a href="https://valescos-cv.netlify.app/">
            <StyledButton type="red" :disabled="false"
              >Посетить резюме автора</StyledButton
            ></a
          >
        </div>
        <span class="absolute right-0 bottom-0 z-10 text-[#6057b3]"
          ><span class="uppercase font-ligth text-[120px]">про</span
          ><span class="font-secondary text-[200px]">Лапти</span></span
        >
      </div>
    </Wrapper>
  </div>
</template>

<style></style>
