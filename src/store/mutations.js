export default {
  storeTask(state, payload) {
    const task = JSON.parse(localStorage.getItem("task"));
    if (task) {
      task.push(payload);
      localStorage.setItem("task", JSON.stringify(task));
      // state.todoListItems.push(task);
      state.todoListItems = task;
    } else {
      const task = state.todoListItems;
      task.push(payload);
      localStorage.setItem("task", JSON.stringify(task));
      console.log(state.todoListItems);
    }
  },
  getTaskFromLocal(state) {
    const localTask = localStorage.getItem("task");
    if (localTask) {
      state.todoListItems = JSON.parse(localStorage.getItem("task"));
    } else {
    }
  },

  deleteTask(state, payload) {
    const filteredTasks = state.todoListItems.filter((task) => {
      if (task.taskId !== payload) {
        return task;
      }
    });
    // state.todoListItems = filteredTasks;
    localStorage.setItem("task", JSON.stringify(filteredTasks));
    state.todoListItems = filteredTasks;
  },

  hasTask(state) {
    const hasTask = state.todoListItems;
    if (hasTask.length > 0) {
      return true;
    } else {
      return false;
    }
  },

  getTodosFromApi(state, payload) {
    const localTask = JSON.parse(localStorage.getItem("task"));
    const idSet = new Set();
    if (localTask) {
      // 將localStorage的不重複id抓出來
      localTask.forEach((task) => {
        idSet.add(task.taskId);
      });
      payload.forEach((task) => {
        if (!idSet.has(task.id)) {
          const newTask = {};
          newTask.taskId = task.id;
          newTask.taskItem = task.title;
          localTask.push(newTask);
        }
      });
      localStorage.setItem("task", JSON.stringify(localTask));
    } else {
      const newTasks = [];
      payload.forEach((task) => {
        const newTask = {};
        newTask.taskId = task.id;
        newTask.taskItem = task.title;
        newTasks.push(newTask);
      });
      localStorage.setItem("task", JSON.stringify(newTasks));
    }

    // localStorage.setItem("task", JSON.stringify(task));
  },
};
