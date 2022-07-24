import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "../services/services";

const initialState = {
  status: "idle",
  images: [],
};

export const getImages = createAsyncThunk("getImages", async (limit, page) => {
  const response = await fetchImages(limit, page); //await service.getImages()
  return response;
});

const createChunks = (arr) => {
  let size = 5; //размер подмассива
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarray[i] = arr.slice(i * size, i * size + size);
  }
  return subarray;
};

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
        // const chunks = createChunks(action.payload);
        state.images = [...state.images, ...action.payload];

        state.status = "idle";
        console.log("loaded");
        // console.log(action.payload);
      });
  },
});

export default gallerySlice.reducer;
