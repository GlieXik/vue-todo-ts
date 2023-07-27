<template>
  <li class="todo-item" @click="toogleComplate(todo.id)">
    <span :class="{ completed: todo.completed }">{{ todo.data }}</span>
    <MyButton :variant="'delete'" @click="remove(todo.id)">Delete</MyButton>
  </li>
</template>

<script setup lang="ts">
import { Todo } from "@/types";
import { PropType } from "vue";
import { useStore } from "vuex";

const store = useStore();
const remove = (id: number) => store.commit("deleteTodo", id);
const toogleComplate = (id: number) => store.commit("toggleCompleted", id);
defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
});
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  font-size: large;
  padding: 4px 10px;
}
.completed {
  text-decoration: line-through;
}
</style>
