<template>
  <delete-dialog
    :show="show"
    @close="closeDialog"
    @deleteTask="confirmDelete"
  ></delete-dialog>
  <li class="task-done">
    <div class="task-item">
      <label>
        <input type="checkbox" @click="taskDone" v-model="isChecked" />
      </label>
      <textarea
        :class="{ 'todo-item': true, 'line-through': isChecked }"
        type="text"
        v-model="text"
        :disabled="isChecked"
        cols="15"
        rows="1"
        @input="autoResize"
        ref="taskTextarea"
        placeholder="請輸入待辦事項"
      ></textarea>
    </div>
    <todo-icons @click="deleteTask"></todo-icons>
  </li>
</template>
<script setup>
import { ref, defineProps, onMounted } from "vue";
import TodoIcons from "../ui/TodoIcons.vue";
import DeleteDialog from "../ui/DeleteDialog.vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps(["taskItem", "taskId", "isDone", "show"]);
// const text = props.taskItem;
const text = ref("");
const taskTextarea = ref(null);
const isChecked = ref(false);
const show = ref(false);

function getTask() {
  text.value = props.taskItem;
}

function taskDone() {
  isChecked.value = !isChecked.value;
  const tasks = JSON.parse(localStorage.getItem("task"));
  tasks.forEach((task) => {
    if (task.taskId === props.taskId) {
      task.isDone = !task.isDone;
    }
  });
  localStorage.setItem("task", JSON.stringify(tasks));
}

function updateTask() {
  const tasks = JSON.parse(localStorage.getItem("task"));
  if (tasks) {
    tasks.forEach((task) => {
      if (task.taskId === props.taskId) {
        task.taskItem = text.value;
      }
    });
    localStorage.setItem("task", JSON.stringify(tasks));
  }
}

function autoResize() {
  taskTextarea.value.style.height = "auto";
  taskTextarea.value.style.height = taskTextarea.value.scrollHeight + "px";
  updateTask();
}

function deleteTask() {
  show.value = true;
  // store.commit("deleteTask", props.taskId);
}

function confirmDelete() {
  store.commit("deleteTask", props.taskId);
}

function closeDialog() {
  show.value = false;
}

onMounted(() => {
  isChecked.value = props.isDone;
  getTask();
});
</script>
<style scoped lang="scss">
li {
  width: 100%;
  min-height: 40px;
  padding: 10px 15px;
  background-color: white;
  border-radius: 10px;
  color: #425466;
  box-shadow: 2px 2px 7px 0px rgba(179, 179, 179, 0.75);
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .task-item {
    display: flex;
    flex-grow: 0.85;
  }
  label {
    margin-right: 10px;
    padding-top: 2px;
  }
  textarea {
    width: 100%;
    border: none;
    outline: none;
    background: none;
    transition: 0.2s;
    resize: none;
    overflow-y: hidden;
  }
  input[type="checkbox"] {
    cursor: pointer;
  }
  textarea::placeholder {
    font-style: italic;
  }
}

.line-through {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>
