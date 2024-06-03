<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import { TEAM } from "../data";
</script>

<template>
  <div class="bg-[#484283] relative overflow-hidden" id="team">
    <Wrapper>
      <h1 class="text-3xl font-semibold text-white py-8">Наша команда</h1>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="member in TEAM" :key="member.id" class="text-white">
          <img :src="member.img" alt="" class="rounded-sm" />
          <p class="text-lg font-bold pt-2">{{ member.name }}</p>
          <p class="pb-4">{{ member.position }}</p>
        </div>
      </div>
    </Wrapper>

    <div
      class="border-[1px] border-white -right-[10%] -top-[30%] w-[640px] h-[640px] absolute rounded-full z-20"
    />
    <div
      class="border-[1px] border-white -right-[8%] top-[25%] w-[300px] h-[300px] absolute rounded-full z-20"
    />
    <div
      class="bg-[#F14F4F] -right-[8%] -top-[18%] w-[686px] h-[686px] absolute rounded-full z-10"
    />
  </div>
</template>

<style></style>
