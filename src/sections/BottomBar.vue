<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import HaveQuestions from "../components/HaveQuestions.vue";
import InstagrammWidget from "../components/InstagrammWidget.vue";
</script>

<template>
  <Wrapper>
    <div class="grid grid-cols-3 gap-8">
      <div>
        <HaveQuestions />
      </div>
      <div class="col-span-2">
        <InstagrammWidget />
      </div>
    </div>
  </Wrapper>
</template>

<style></style>
