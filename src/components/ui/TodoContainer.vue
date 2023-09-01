<template>
  <div class="todolist-contanier">
    <base-spinner v-if="isLoading"></base-spinner>
    <p v-if="!hasTask">目前沒有待辦事項</p>
    <ul>
      <todo-list
        v-for="todo in todos"
        :taskItem="todo.taskItem"
        :taskId="todo.taskId"
        :isDone="todo.isDone"
        :key="todo.taskId"
      ></todo-list>
    </ul>
  </div>
</template>
<script setup>
import BaseSpinner from "../ui/BaseSpinner.vue";
import TodoList from "../layout/TodoList.vue";
import { ref, onMounted, computed, watch } from "vue";
import { useStore, mapGetters } from "vuex";

const store = useStore();
const isLoading = ref(false);
const todos = computed(() => {
  return store.getters["availableTasks"];
});
function getTask() {
  store.commit("getTaskFromLocal");
}

onMounted(async () => {
  isLoading.value = true;
  await store.dispatch("fetchTodos");
  isLoading.value = false;
  getTask();
});
const hasTask = computed(() => {
  return store.getters.hasTask;
});
</script>
<style scoped lang="scss">
.todolist-contanier {
  width: 80%;
  margin: 0 auto;
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
