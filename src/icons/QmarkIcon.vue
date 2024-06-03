<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    :data-tooltip="content"
    class="avatar text-[#B2B5BB] [&>*]:hover:fill-[#B2B5BB] [&>*]:hover:stroke-[#FFF]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 transition-all"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      />
    </svg>
  </div>
</template>

<style>
.avatar {
  position: relative;
}

.avatar::before,
.avatar::after {
  --scale: 0;
  --arrow-size: 20px;
  --tooltip-color: #b2b5bb;

  position: absolute;
  top: -0.1rem;
  left: 50%;
  transform: translateX(-50%) translateY(var(--translate-y, 0))
    scale(var(--scale));
  transition: 150ms transform;
  transform-origin: bottom center;
}

.avatar::before {
  --translate-y: calc(-100% - var(--arrow-size));

  content: attr(data-tooltip);
  color: white;
  padding: 1rem;
  border-radius: 0.3rem;
  text-align: center;
  width: max-content;
  max-width: 32rem;
  background: var(--tooltip-color);
}

.avatar::after {
  --translate-y: calc(-1 * var(--arrow-size));
  top: -0.25rem;
  content: "";
  border: var(--arrow-size) solid transparent;
  border-top-color: var(--tooltip-color);
  transform-origin: top center;
}

.avatar:hover::before,
.avatar:hover::after {
  --scale: 1;
}
</style>
