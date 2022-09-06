/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IDynamicObject {
  [key: string]: any;
}

interface IUserSlice {
  loading: boolean;
  users: IDynamicObject[];
  error: string;
}

const initialState: IUserSlice = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk<IDynamicObject[]>(
  "user/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
      state.users = [];
    });
  },
});
export const userReducer = userSlice.reducer;
