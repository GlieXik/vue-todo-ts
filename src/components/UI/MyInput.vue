<template>
  <form @submit.prevent="addItemAndClear(todo)" class="input-wrapper">
    <input class="input-field" type="text" v-model="todo" v-focus />
    <button class="input-button" type="submit">
      <AddIcon class="icon" />
    </button>
  </form>
</template>

<script setup lang="ts">
import AddIcon from "@/components/UI/AddIcon.vue";

import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const todo = ref("");
function addItemAndClear(item: string) {
  if (item.length === 0) {
    return;
  }
  store.commit("addTodo", item);
  todo.value = "";
}
</script>

<style scoped>
.input-wrapper {
  position: relative;
  display: block;
}
.icon {
  fill: #333333;
  width: 30px;
  height: 30px;
}
.input-field {
  font-size: large;
  flex-grow: 2;
  border: none;
  border-radius: 4px;
  padding: 6px 50px 6px 12px;
  width: 100%;
  box-sizing: border-box;
  background-color: #cfcfcf;
  height: 40px;
  color: rgba(60, 60, 60, 0.66);
}
.input-field:focus {
  outline: rgba(146, 146, 146, 0.843) solid 1px;
}
@media (prefers-color-scheme: dark) {
  .input-field {
    background-color: #383838;
    color: rgba(235, 235, 235, 0.64);
  }
  .icon {
    fill: #8e8d8d;
  }
}
.input-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
