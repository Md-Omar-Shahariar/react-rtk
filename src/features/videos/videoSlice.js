import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],

  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async () => {}
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => builder.addCase(),
});
