import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getGallery = createAsyncThunk("gallery/getGallery" , async () => {
  return fetch("https://retoolapi.dev/I84umr/gallery").then((res)=>res.json())
})

const postGallery = createSlice(({
  name:"gallery",
  initialState:{
    post:[],
    loading:false
  },
  extraReducers:{
    [getGallery.pending]: (state, action) => {
      state.loading = true
    },
    [getGallery.fulfilled]: (state, action) => {
      state.loading = false;
      state.gallery = action.payload
    },
    [getGallery.rejected]: (state, action) => {
      state.loading = false
    },
  },
}));

export default postGallery.reducer