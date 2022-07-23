import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "../services/services";

const initialState = {
  status: "idle",
};

export const getImages = createAsyncThunk("getImages", async () => {
  const response = await fetchImages(); //await service.getImages()
  return response;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("loaded");
        console.log(action.payload);
      });
  },
});

export default gallerySlice.reducer;
