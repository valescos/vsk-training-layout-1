<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import QmarkIcon from "../icons/QmarkIcon.vue";
import map from "../assets/map.jpg";
import VkIcon from "../icons/VkIcon.vue";
import InstaIcon from "../icons/InstaIcon.vue";
</script>

<template>
  <div class="bg-[#F3F6F6]" id="contact_us">
    <Wrapper>
      <div class="flex justify-between py-10 items-start">
        <div>
          <h2 class="text-3xl font-bold text-[#444B58] pb-4">Контакты</h2>
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <div class="flex [&>*]:stroke-[#B2B5BB]">
                <p class="text-[#B2B5BB] uppercase">Главный офис</p>
                <QmarkIcon content="Доставки нет, только самовывоз" />
              </div>
              <p class="text-[#444B58] text-2xl font-semibold">
                +7 333 333 33 39
              </p>
              <p class="text-[#444B58]">Море Лаптевых, о. Большой Ляховский</p>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex [&>*]:stroke-[#B2B5BB]">
                <p class="text-[#B2B5BB] uppercase">Одел продаж</p>
                <QmarkIcon content="Не работаем ночью (полярной)" />
              </div>
              <p class="text-[#444B58] text-2xl font-semibold">
                +7 333 333 33 38
              </p>
              <p class="text-[#444B58]">Море Лаптевых, о. Большой Ляховский</p>
            </div>
            <div class="flex gap-2">
              <button>
                <VkIcon />
              </button>
              <button>
                <InstaIcon />
              </button>
            </div>
          </div>
        </div>
        <img :src="map" alt="" class="h-[420px] rounded-sm" />
      </div>
    </Wrapper>
  </div>
</template>

<style scoped></style>
