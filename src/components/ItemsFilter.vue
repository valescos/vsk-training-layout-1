<script setup lang="ts">
import { useLaptiStore } from "../stores/LaptiStore";
import StyledButton from "./StyledButton.vue";
import { ref, computed, watch } from "vue";
import { AvailableSizes } from "../types";
import { Gender } from "../types";

const { minPrice, maxPrice, lapiSizes, filterLapti } = useLaptiStore();
const minInput = ref<number>(minPrice);
const maxInput = ref<number>(maxPrice);
const laptiFilter = ref<AvailableSizes>({
  35: false,
  36: false,
  37: false,
  38: false,
  39: false,
  40: false,
  41: false,
  42: false,
  43: false,
});
const pickedGender = ref<Gender>("none");

const pickedSizes = computed(() =>
  Object.entries(laptiFilter.value)
    .filter((i) => i[1])
    .map((i) => parseInt(i[0]))
    .flat()
);

watch(minInput, () => {
  if (minInput.value > maxInput.value - 1000) {
    minInput.value = maxInput.value - 1000;
  }
});

watch(maxInput, () => {
  if (maxInput.value < minInput.value + 1000) {
    maxInput.value = minInput.value + 1000;
  }
});

const leftAndRigthPercentage = computed(() => {
  const left = (100 - ((maxPrice - minInput.value) / maxPrice) * 100).toFixed();
  const right = (((maxPrice - maxInput.value) / maxPrice) * 100).toFixed();
  return {
    left: left + "%",
    right: right + "%",
  };
});

function handleRefresh() {
  laptiFilter.value = {
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    41: false,
    42: false,
    43: false,
  };
  pickedGender.value = "none";
  minInput.value = minPrice;
  maxInput.value = maxPrice;
  filterLapti(
    minInput.value,
    maxInput.value,
    pickedSizes.value,
    pickedGender.value
  );
}
</script>

<template>
  <div class="bg-[#FFF4EE] p-4 flex flex-col gap-4">
    <h3 class="text-[#444B58] text-2xl font-semibold">Подбор по параметрам</h3>
    <h3 class="-mb-2">Цена</h3>
    <div>
      <div
        class="flex justify-between border-[#B2B5BB] border-t-2 border-r-2 border-l-2 py-4 rounded-t-md"
      >
        <div class="basis-[50%] text-center">{{ minInput }} ₽</div>
        <div class="border-r-2 border-[#B2B5BB]" />
        <div class="basis-[50%] text-center">{{ maxInput }} ₽</div>
      </div>
      <div>
        <div class="h-[6px] bg-[#B2B5BB] w-full relative">
          <div
            class="h-[6px] bg-[#444B58] absolute"
            :style="leftAndRigthPercentage"
          />
          <input
            type="range"
            class="input_range"
            step="1"
            :min="minPrice"
            :max="maxPrice"
            :value="minInput"
            v-model.number="minInput"
          />
          <input
            type="range"
            class="input_range"
            step="1"
            :min="minPrice"
            :max="maxPrice"
            :value="maxInput"
            v-model.number="maxInput"
          />
        </div>
      </div>
    </div>
    <h3 class="-mb-2">Пол</h3>
    <div class="flex justify-between">
      <div class="flex gap-[3px]">
        <input
          class="cursor-pointer"
          type="radio"
          id="man"
          value="man"
          v-model="pickedGender"
          @click="pickedGender === `man` ? (pickedGender = 'none') : null"
        />
        <label for="man" class="cursor-pointer">Мужской</label>
      </div>
      <div class="flex gap-[3px]">
        <input
          class="cursor-pointer bg-red-300"
          type="radio"
          id="woman"
          value="woman"
          v-model="pickedGender"
          @click="pickedGender === `woman` ? (pickedGender = 'none') : null"
        />
        <label class="cursor-pointer" for="woman">Женский</label>
      </div>
    </div>
    <h3 class="-mb-2">Размер</h3>
    <div class="grid grid-cols-3 border-[1px] border-[#DBBBA9]">
      <div
        v-for="size in lapiSizes"
        :class="laptiFilter[size] ? 'bg-[#DBBBA9] text-white' : ''"
        @click="laptiFilter[size] = !laptiFilter[size]"
        class="text-center py-4 border-[1px] border-[#DBBBA9] cursor-pointer transition-all"
      >
        {{ size }}
      </div>
    </div>
    <StyledButton
      type="grey"
      :disabled="false"
      @click="filterLapti(minInput, maxInput, pickedSizes, pickedGender)"
      >Применить</StyledButton
    >
    <StyledButton type="opaque" :disabled="false" @click="handleRefresh"
      >сбросить</StyledButton
    >
  </div>
</template>

<style scoped>
.input_range {
  position: absolute;
  top: 0px;
  height: 6px;
  width: 100%;
  pointer-events: none;
  background: none;
  appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 28px;
  width: 6px;
  border-radius: 3px;
  pointer-events: auto;
  appearance: none;
  background-color: #444b58;
  cursor: col-resize;
}
input[type="radio"] {
  accent-color: #444b58;
}
</style>
