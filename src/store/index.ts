import { createStore, Store } from "vuex";
import { statusFilters } from "@/utils/constans";
import { Todo, State } from "@/types";
const localStoragePlugin = (store: Store<State>) => {
  store.subscribe((_, state) => {
    // Save the state to local storage after each mutation
    localStorage.setItem("todoApp", JSON.stringify(state));
  });
};
export default createStore({
  state: {
    statusFilter: statusFilters.all,
    todos: [
      { id: 3214, completed: false, data: "fas" },
      { id: 231, completed: false, data: "fa1s" },
      { id: 432, completed: true, data: "fa2s" },
    ],
  },
  mutations: {
    setTodos(state: State, todos: Todo[]) {
      state.todos = todos;
    },
    setFilter(state: State, newFilter: string) {
      state.statusFilter = newFilter;
    },
    addTodo(state: State, todo: string) {
      state.todos.push({ id: Math.random(), data: todo, completed: false });
    },
    deleteTodo(state: State, todoId: number) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId); // Corrected the deleteTodo mutation
    },
    toggleCompleted(state: State, idToFind: number) {
      const todo = state.todos.find((todo) => todo.id === idToFind);
      if (todo) todo.completed = !todo.completed;
    },
  },

  getters: {
    getStatusFilter: (state: State) => state.statusFilter,
    getFilteredTodo: (state: State) => {
      switch (state.statusFilter) {
        case statusFilters.active:
          return state.todos.filter((todo) => !todo.completed);
        case statusFilters.completed:
          return state.todos.filter((todo) => todo.completed);
        default:
          return state.todos;
      }
    },
  },
  plugins: [localStoragePlugin],
});
