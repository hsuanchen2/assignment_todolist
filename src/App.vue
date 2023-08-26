<template>
  <main class="main-container">
    <div>
      <h1>Your Todo List</h1>
    </div>
    <section>
      <input-bar></input-bar>
    </section>
    <section>
      <todo-container></todo-container>
    </section>
  </main>
</template>
<script setup>
import TodoContainer from "./components/ui/TodoContainer.vue";
import InputBar from "./components/ui/InputBar.vue";
</script>
<style scoped lang="scss">
// google font
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Noto+Sans+TC:wght@100;200;300;400;500;600;700&display=swap");
* {
  font-family: "Merriweather", serif;
  font-family: "Noto Sans TC", sans-serif;
}
// bootstrap icons
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
.main-container {
  max-width: 600px;
  margin: 20px auto;
  h1 {
    text-align: center;
    color: #425466;
    font-weight: 600;
  }
}
</style>
