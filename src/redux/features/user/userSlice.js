import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../utils/firebase.config";
const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    console.log(data);

    return;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.email = ""),
          (state.name = "");
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { paylaod }) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.email = paylaod.email),
          (state.name = paylaod.name);
        state.error = "";
      })
      .addCase(createUser.rejected, (state, actions) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.email = ""),
          (state.name = "");
        state.error = actions.error.message;
      });
  },
});

export default userSlice.reducer;
