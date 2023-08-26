<template>
  <teleport to="body">
    <div class="backdrop" v-if="props.show">
      <dialog open>
        <h3>確定刪除嗎?</h3>
        <p>待辦事項一但刪除，是無法回復的喔!</p>
        <div>
          <button class="btn btn-danger" @click="deleteTask">確定</button>
          <button class="btn btn-secondary" @click="cancelDelete">取消</button>
        </div>
      </dialog>
    </div>
  </teleport>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";
const emits = defineEmits(["deleteTask", "close"]);
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
function deleteTask() {
  emits("deleteTask");
}

function cancelDelete() {
  emits("close");
}
</script>
<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(145, 145, 145, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  box-sizing: border-box;
  min-width: 300px;
  max-width: 350px;
  margin: 0 auto;
  z-index: 100;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 20px 15px;
  margin: 0;
  overflow: hidden;
  background-color: white;
  h3 {
    font-weight: 600;
  }
  .btn-danger {
    margin-right: 10px;
  }
}
</style>
