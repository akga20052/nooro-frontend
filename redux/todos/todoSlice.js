import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  getTodosAsync,
  addTodoAsync,
  toggleTodoAsync,
  removeTodoAsync,
  clearCompletedAsync,
} from "./services";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  activeFilter: typeof window !== 'undefined' ? localStorage.getItem("activeFilter") || "all" : "all",
  addNewTodo: {
    isLoading: false,
    error: false,
  },
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem("activeFilter", action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch todos";
      })
      .addCase(addTodoAsync.pending, (state) => {
        state.addNewTodo.isLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.addNewTodo.isLoading = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addNewTodo.isLoading = false;
        state.addNewTodo.error = action.error.message || "Failed to add todo";
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const { id, completed } = action.payload.todo;
        const index = state.items.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.items[index].completed = completed;
        }
      })
      .addCase(removeTodoAsync.fulfilled, (state, action) => {
        const id = action.payload;
        state.items = state.items.filter((item) => item.id !== id);
      })
      .addCase(clearCompletedAsync.fulfilled, (state) => {
        state.items = state.items.filter((item) => !item.completed);
      });
  },
});

export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = createSelector(
  [selectTodos, (state) => state.todos.activeFilter],
  (todos, activeFilter) => {
    if (activeFilter === "all") {
      return todos;
    }
    return todos.filter((todo) =>
      activeFilter === "active" ? !todo.completed : todo.completed
    );
  }
);

export const selectActiveFilter = (state) => state.todos.activeFilter;

export const { setFilter } = todosSlice.actions;
export default todosSlice.reducer;