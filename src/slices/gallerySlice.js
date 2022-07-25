import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImage, fetchImages } from "../services/services";

const initialState = {
  status: "idle",
  images: [],
  chosenImage: {},
  chosenImageSizes: [],
  currentSize: "small",
};

export const getImages = createAsyncThunk("getImages", async (limit, page) => {
  const response = await fetchImages(limit, page); //await service.getImages()
  return response;
});

export const getImage = createAsyncThunk("getImage", async (id) => {
  const response = await fetchImage(id); //await service.getImages()
  return response;
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,

  reducers: {
    setCurrentSize: (state, action) => {
      state.currentSize = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(getImages.fulfilled, (state, action) => {
        console.log(action.payload);
        state.images = [...state.images, ...action.payload];
        state.status = "idle";
        console.log("loaded");
      })

      .addCase(getImage.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(getImage.fulfilled, (state, action) => {
        state.chosenImage = action.payload[0];
        state.chosenImageSizes = Object.keys(action.payload[0].urls);

        state.status = "idle";
        console.log("loaded");
      });
  },
});

export default gallerySlice.reducer;
