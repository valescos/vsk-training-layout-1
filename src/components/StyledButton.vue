<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "red",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

function styleSwitcher(type: string) {
  switch (type) {
    case "red":
      return "border-2 border-transparent bg-[#F14F4F] text-white hover:bg-[#CC4949] active:bg-[#8C2828] disabled:bg-transparent";
    case "grey":
      return "bg-[#444B58] text-white hover:bg-[#31343C] active:bg-[#444B58]";
    case "opaque":
      return "text-black border-2 border-transparent hover:border-[#31343C] active:border-[#444B58]";
    case "justborder":
      return "text-black border-2 border-[#444B58] hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)]";
    default:
      return "";
  }
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="styleSwitcher(type)"
    class="py-4 px-8 transition-all rounded-sm disabled:cursor-not-allowed disabled:text-[#B2B5BB] disabled:border-[#B2B5BB]"
  >
    <slot />
  </button>
</template>

<style></style>
