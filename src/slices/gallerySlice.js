import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImage, fetchImages } from "../services/services";

const initialState = {
  status: "idle",
  images: [],
  chosenImage: {},
  chosenImageSizes: [],
  currentSize: "full",
};

export const selectImages = (state) => state.gallery.images;
export const selectStatus = (state) => state.gallery.status;
export const selectChosenImage = (state) => state.gallery.chosenImage;
export const selectImagesSizes = (state) => state.gallery.chosenImageSizes;
export const selectCurrentSize = (state) => state.gallery.currentSize;

export const getImages = createAsyncThunk(
  "getImages",
  async (data, thunkAPI) => {
    try {
      const response = await fetchImages(data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getImage = createAsyncThunk("getImage", async (id, thunkAPI) => {
  try {
    const response = await fetchImage(id);
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
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
        state.status = "loading";
      })
      .addCase(getImages.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.images = [...state.images, ...action.payload];
        state.status = "idle";
      })
      .addCase(getImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getImage.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(getImage.fulfilled, (state, action) => {
        state.chosenImage = action.payload;
        state.chosenImageSizes = Object.keys(action.payload.urls);
        state.status = "idle";
      });
  },
});

export default gallerySlice.reducer;
