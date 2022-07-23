import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
};


export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,

    reducers: {},

    extraReducers: (builder) => {},
});


export default gallerySlice.reducer;
