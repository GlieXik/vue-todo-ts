<template>
  <button :class="buttonClass">
    <span><slot>Text</slot></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
});

const buttonClass = computed(() => {
  let classes = "button";

  if (props.variant === "delete") {
    classes += " button-delete";
  }

  return classes;
});
</script>

<style scoped>
.button {
  cursor: pointer;
  color: rgb(48, 48, 48);
  background-color: #6e6e6eb0;

  border: 0;
  border-radius: 8px;
  padding: 8px 12px;
}
.button:hover {
  background-color: #6e6e6e;
}
.button-delete {
  color: red;
}
.current {
  background-color: #c1c1c1;
}
</style>
