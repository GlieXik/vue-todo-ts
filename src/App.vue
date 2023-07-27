<template>
  <MyInput style="margin-bottom: 20px" />
  <TodoFilter style="margin-bottom: 20px" />
  <TodoList />
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import TodoFilter from "@/components/TodoFilter.vue";
</script>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
