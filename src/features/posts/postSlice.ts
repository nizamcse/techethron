/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IDynamicObject {
  [key: string]: any;
}

interface IPostSlice {
  loading: boolean;
  posts: IDynamicObject[];
  error: string;
}

const initialState: IPostSlice = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk<IDynamicObject[]>(
  "post/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.loading = false;
      state.posts = [];
    });
  },
});
export const postReducer = postSlice.reducer;
