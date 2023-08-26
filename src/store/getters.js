export default {
  availableTasks(state) {
    return state.todoListItems;
  },
  hasTask(state) {
    if (state.todoListItems.length > 0) {
      return true;
    } else {
      return false;
    }
  },
};
