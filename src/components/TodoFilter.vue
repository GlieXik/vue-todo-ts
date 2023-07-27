<template>
  <div class="filter">
    <MyButton
      v-for="status in statusFilters"
      :key="status"
      @click="handleButtonClick(status)"
      :class="{ current: status === getStatusFilter }"
    >
      {{ status.toUpperCase() }}
    </MyButton>
  </div>
</template>

<script setup lang="ts">
import { statusFilters } from "@/utils/constans";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const getStatusFilter = computed(() => store.getters.getStatusFilter as string);

function handleButtonClick(status: "all" | "active" | "completed") {
  store.commit("setFilter", status);
}
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
</style>
