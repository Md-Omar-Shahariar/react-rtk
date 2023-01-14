import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState = {
  videos: [],
  count: "",

  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search, pagination }) => {
    const { response2, count } = await getVideos(tags, search, pagination);

    return { response2, count };
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.videos = action.payload.response2.data;
        state.count = action.payload.count;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.data.error?.message;
      }),
});

export default videosSlice.reducer;
