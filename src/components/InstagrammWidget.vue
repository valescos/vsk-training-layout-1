<script setup lang="ts">
import InstagramLogo from "../assets/Instagram_logo.png";
import inst01 from "../assets/insta/inst01.jpg";
import inst02 from "../assets/insta/inst02.jpg";
import inst03 from "../assets/insta/inst03.jpg";
import inst04 from "../assets/insta/inst04.jpg";
import inst05 from "../assets/insta/inst05.jpg";
</script>

<template>
  <div class="flex justify-center">
    <img :src="InstagramLogo" alt="" />
  </div>
  <div class="grid grid-cols-4 gap-4">
    <div class="flex flex-col gap-4 justify-between">
      <img :src="inst01" alt="" class="rounded-md" />
      <img :src="inst03" alt="" class="rounded-md" />
    </div>
    <div class="col-span-2 row-span-2">
      <img :src="inst02" alt="" class="rounded-md" />
    </div>
    <div class="flex flex-col gap-4 justify-between">
      <img :src="inst04" alt="" class="rounded-md" />
      <img :src="inst05" alt="" class="rounded-md" />
    </div>
  </div>
</template>

<style></style>
