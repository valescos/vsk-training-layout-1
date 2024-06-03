<script setup lang="ts">
import Wrapper from "../components/Wrapper.vue";
import StyledButton from "../components/StyledButton.vue";
import { ref } from "vue";
import laptichoise from "../assets/laptichoise.jpg";
import { WOODS } from "../data/woodtypes";
import iPhone11Pro from "../assets/iPhone11Pro.png";
import sended from "../assets/sended.png";

const currentSlide = ref(0);
const isMsgSended = ref(false);

function handleClick(direction: number) {
  currentSlide.value += direction;
}
</script>

<template>
  <Wrapper>
    <div class="bg-[#FFF4EE] h-[658px] py-4 px-8 relative" id="goods">
      <h2 v-if="currentSlide !== 3" class="text-3xl font-bold py-2">
        Мы подберем для вас идеальную пару лаптей
      </h2>
      <p
        v-if="currentSlide !== 3"
        class="text-[#808080] border-b-2 border-[#808080] py-2"
      >
        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас
        моделями
      </p>
      <h2 v-if="currentSlide === 3" class="text-3xl font-bold py-2">
        Ваша подборка готова!
      </h2>
      <p
        v-if="currentSlide === 3"
        class="text-[#808080] border-b-2 border-[#808080] py-2"
      >
        Оставьте свои контактные данные, чтобы бы мы могли отправить
        подготовленный для вас каталог
      </p>
      <div
        v-if="currentSlide === 0"
        class="flex justify-between gap-x-2 py-8 gap-y-4 flex-wrap"
      >
        <div
          v-for="item in WOODS"
          :key="item.id"
          class="flex flex-col basis-[32%]"
        >
          <img :src="item.img" alt="" class="rounded-md" />
          <div class="flex gap-2 pt-2">
            <input type="checkbox" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div v-if="currentSlide === 1" class="flex flex-col">
        <h3 class="text-2xl text-[#444B58] pt-4">Какой размер вам подойдет?</h3>
        <div class="flex justify-between py-4">
          <div class="flex gap-2">
            <input type="checkbox" />
            <p>менее 36</p>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" />
            <p>36–38</p>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" />
            <p>39–41</p>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" />
            <p>42–44</p>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" />
            <p>45 и больше</p>
          </div>
        </div>
        <img :src="laptichoise" alt="" class="pb-4" />
      </div>
      <div v-if="currentSlide === 2">
        <h3 class="text-2xl text-[#444B58] pt-4">
          Уточните какие-либо моменты
        </h3>
        <input
          type="textarea"
          placeholder="Введите сообщение"
          class="p-4 rounded-sm w-[465px] h-[246px] my-4"
        />
      </div>
      <div v-if="currentSlide === 3">
        <div
          class="bg-[#DBBBA9] text-white flex flex-col gap-8 p-8 mt-12 rounded-md relative"
        >
          <div class="flex flex-col gap-4">
            <h2 class="text-3xl font-bold">Получить предложение</h2>
            <p>Получите подборку подходящих для вас моделей на почту</p>
          </div>
          <div class="flex flex-col gap-2 w-[80%] text-[#DBBBA9]">
            <input type="text" class="p-2 rounded-sm" />
            <input type="email" class="p-2 rounded-sm" />
            <StyledButton @click="isMsgSended = true">Получить</StyledButton>
          </div>
          <div class="absolute -right-4 -top-[10%]">
            <img :src="iPhone11Pro" alt="" />
          </div>
          <div v-if="isMsgSended" class="absolute -right-8 -top-[26%] scale-75">
            <img :src="sended" alt="" />
          </div>
        </div>
      </div>
      <div
        v-if="currentSlide !== 3"
        class="absolute bottom-2 w-[94%] flex justify-end gap-2 border-t-2 border-[#808080] py-2"
      >
        <StyledButton
          @click="handleClick(-1)"
          type="justborder"
          :disabled="currentSlide === 0"
          >Предыдущий шаг</StyledButton
        >
        <StyledButton
          @click="handleClick(1)"
          type="justborder"
          :disabled="currentSlide >= 3"
          >Следующий шаг</StyledButton
        >
      </div>
      <div
        v-if="currentSlide === 3"
        class="absolute bottom-2 w-[94%] flex justify-end gap-2 border-t-2 border-[#808080] py-2"
      >
        <StyledButton
          @click="
            () => {
              handleClick(-3);
              isMsgSended = false;
            }
          "
          type="justborder"
          >В начало</StyledButton
        >
      </div>
    </div>
  </Wrapper>
</template>

<style></style>
