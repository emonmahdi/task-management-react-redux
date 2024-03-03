import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";

const store = configureStore({
  reducer: {
    taskSlice: taskReducer,
  },
});

export default store;
