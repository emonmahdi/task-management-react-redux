import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    taskSlice: taskReducer,
    userSlice: userSlice,
  },
});

export default store;
