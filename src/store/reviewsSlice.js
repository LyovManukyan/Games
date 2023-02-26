import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk("reviews/getReviews" , async () => {
  return fetch("https://retoolapi.dev/q9l7cz/mailReviews").then((res)=>res.json())
})

const postReviews = createSlice(({
  name:"reviews",
  initialState:{
    post:[],
    loading:false
  },
  extraReducers:{
    [getReviews.pending]: (state, action) => {
      state.loading = true
    },
    [getReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload
    },
    [getReviews.rejected]: (state, action) => {
      state.loading = false
    },
  },
}));

export default postReviews.reducer