import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImage, fetchImages } from "../services/services";
import { rejectWithValue } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  images: [],
  chosenImage: {},
  chosenImageSizes: [],
  currentSize: "small",
};

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
    const response = await fetchImage(id); //await service.getImages()
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
    setLoaded: (state, action) => {
      state.status = "idle";
    },
    // fetchFailed: (state) => {
    //   state.fetchFailed;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        // console.log("loading");
        state.status = "loading";
      })
      .addCase(getImages.rejected, (state, action) => {
        state.status = "failed";
        console.log(action);
        console.log("rejected");
      })

      .addCase(getImages.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.images = [...state.images, ...action.payload];
        state.status = "idle";
        console.log("loaded");
      })

      .addCase(getImage.pending, (state) => {
        console.log("loading");
        state.status = "loading";
      })
      .addCase(getImage.rejected, (state) => {
        console.log("rejected");
        state.status = "failed";
      })
      .addCase(getImage.fulfilled, (state, action) => {
        state.chosenImage = action.payload;
        console.log(action.payload);
        state.chosenImageSizes = Object.keys(action.payload.urls);

        state.status = "idle";
        console.log("loaded");
      });
  },
});

export default gallerySlice.reducer;
