import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  loading: false,
  error: "",
};

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const response = await axios.get(
    "https://64542599c18adbbdfeb058b1.mockapi.io/new"
  );
  return response.data;
});

export const searchUser = createAsyncThunk(
  "items/searchUser",
  async (searchTerm) => {
    const response = await axios.get(
      `https://64542599c18adbbdfeb058b1.mockapi.io/new?search=${searchTerm}`
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(searchUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(searchUser.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
    });
    builder.addCase(searchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
