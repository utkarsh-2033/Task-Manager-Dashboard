import { createSlice, createSelector } from "@reduxjs/toolkit";
import { format, isPast, parseISO } from "date-fns";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    filter: "all",
    searchQuery: "",
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description, dueDate } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
        existingTask.dueDate = dueDate;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    markAsCompleted: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  markAsCompleted,
  setFilter,
  setSearchQuery,
} = tasksSlice.actions;
export default tasksSlice.reducer;

export const formatDate = (date) => format(parseISO(date), "PPP");
export const isTaskOverdue = (date) => isPast(parseISO(date));

export const selectTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.filter;
export const selectSearchQuery = (state) => state.tasks.searchQuery;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter, selectSearchQuery],
  (tasks, filter, searchQuery) => {
    let filteredTasks = tasks;

    switch (filter) {
      case "completed":
        filteredTasks = tasks.filter((task) => task.completed);
        break;
      case "pending":
        filteredTasks = tasks.filter(
          (task) => !task.completed && !isTaskOverdue(task.dueDate)
        );
        break;
      case "overdue":
        filteredTasks = tasks.filter(
          (task) => !task.completed && isTaskOverdue(task.dueDate)
        );
        break;
      default:
        filteredTasks = tasks;
        break;
    }

    if (searchQuery) {
      filteredTasks = filteredTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredTasks;
  }
);
