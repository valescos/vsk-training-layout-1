<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import { FAQS } from "../data";
import Question from "../components/Question.vue";
</script>

<template>
  <Wrapper>
    <h1 class="text-2xl font-bold pb-8" id="faqs">Часто задаваемые вопросы</h1>
    <div class="ml-24 border-[#242424] border-t-[1px]">
      <div
        v-for="faq in FAQS"
        :key="faq.id"
        class="py-4 border-[#242424] border-b-[1px] relative"
      >
        <Question :question="faq.question" :answer="faq.answer" />
      </div>
    </div>
  </Wrapper>
</template>

<style></style>
