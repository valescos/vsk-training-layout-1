<script setup lang="ts">
import Header from "./sections/Header.vue";
import Catalog from "./sections/Catalog.vue";
import AboutUs from "./sections/AboutUs.vue";
import SneakerQuiz from "./sections/SneakerQuiz.vue";
import Team from "./sections/Team.vue";
import Questions from "./sections/Questions.vue";
import ContactUs from "./sections/ContactUs.vue";
import Footer from "./sections/Footer.vue";
import BottomBar from "./sections/BottomBar.vue";
</script>

<template>
  <div class="flex flex-col gap-8">
    <Header />
    <Catalog />
    <AboutUs />
    <SneakerQuiz />
    <Team />
    <Questions />
    <ContactUs />
    <BottomBar />
    <Footer />
  </div>
</template>

<style scoped></style>
