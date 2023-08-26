<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="新增代辦事項"
      v-model.trim="enteredTask"
    />
    <button
      class="btn btn-primary"
      type="button"
      id="button-addon2"
      @click="addTask"
    >
      新增
    </button>
  </div>
  <div class="error-msg" v-if="isInvalid">事項不可為空</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const enteredTask = ref("");
const isInvalid = ref(false);
function addTask() {
  if (enteredTask.value !== "") {
    isInvalid.value = false;
    const taskId = new Date().valueOf();
    const task = {};
    task.taskItem = enteredTask.value;
    task.taskId = taskId;
    task.isDone = false;
    enteredTask.value = "";
    store.commit("storeTask", task);
  } else {
    isInvalid.value = true;
  }
}

</script>
<style lang="scss" scoped>
.input-group {
  width: 80%;
  height: 50px;
  margin: 0 auto;
  button {
    color: white;
  }
}

.error-msg {
  width: 80%;
  margin: 0 auto 10px auto;
  font-style: italic;
  color: rgb(250, 50, 50);
  font-weight: 600;
}
</style>
