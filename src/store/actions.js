export default {
  async fetchTodos(context) {
    let data = [];
    try {
      // 先抓3筆資料
      for (let i = 1; i <= 3; i++) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${i}`,
          {
            method: "GET",
          }
        );
        const responseData = await response.json();
        data.push(responseData);
      }
    } catch (error) {
      console.log(error);
    }
    context.commit("getTodosFromApi", data);
  },
};
