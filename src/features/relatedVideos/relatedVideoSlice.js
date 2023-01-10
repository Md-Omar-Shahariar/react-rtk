import { getRelatedVideo } from "./relatedVideoApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  relatedVideo: [],

  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideo = createAsyncThunk(
  "relatedVideo/fetchRelatedVideos",
  async ({ tags, id }) => {
    const video = await getRelatedVideo({ tags, id });
    return video;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      }),
});

export default relatedVideoSlice.reducer;
