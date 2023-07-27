<template>
  <TransitionGroup name="list" tag="ul" class="todo-list">
    <TodoItem :todo="todoitem" v-for="todoitem in todos" :key="todoitem.id" />

    <h1 v-if="todos.length === 0">пусто</h1>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { Todo } from "@/types";
import TodoItem from "@/components/TodoItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const todos = computed<Array<Todo>>(() => store.getters.getFilteredTodo);
</script>

<style scoped>
.todo-list {
  background-color: #cfcfcf;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px;
}
@media (prefers-color-scheme: dark) {
  .todo-list {
    background-color: #383838;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
