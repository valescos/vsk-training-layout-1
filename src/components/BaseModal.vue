<script setup lang="ts">
import { useModalStore } from "../stores/ModalStore";
import { storeToRefs } from "pinia";

const store = useModalStore();
const { openedModal } = storeToRefs(store);
</script>

<template>
  <Teleport to="body">
    <div
      @click.self="openedModal = 'none'"
      class="fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 z-50"
    >
      <slot />
    </div>
  </Teleport>
</template>
