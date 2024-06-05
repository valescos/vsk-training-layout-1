<script setup lang="ts">
import { ref } from "vue";
import StyledButton from "./StyledButton.vue";
import ItemForShow from "./ItemForShow.vue";
import { useLaptiStore } from "../stores/LaptiStore";
import { storeToRefs } from "pinia";

const limit = ref(9);
const store = useLaptiStore();
const { filteredLapti } = storeToRefs(store);

function showMore(val: number) {
  limit.value += val;
}
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="item in filteredLapti.slice(0, limit)" :key="item.id">
      <ItemForShow
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :id="item.id"
      />
    </div>
    <div class="col-span-3 grid grid-cols-2 gap-4">
      <div>
        <StyledButton
          class="w-full"
          @click="showMore(3)"
          type="red"
          :disabled="filteredLapti.length <= limit"
          >Показать больше</StyledButton
        >
      </div>
      <div>
        <StyledButton
          class="w-full"
          @click="showMore(-3)"
          type="red"
          :disabled="limit === 3 || filteredLapti.length <= 3"
          >Показать меньше</StyledButton
        >
      </div>
    </div>
  </div>
</template>

<style></style>
