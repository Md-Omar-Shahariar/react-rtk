import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  searchText: "",
  pagination: 1,
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    search: (state, action) => {
      state.searchText = action.payload;
    },
    pag: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, search, pag } = filterSlice.actions;
