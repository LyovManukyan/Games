import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getTeam = createAsyncThunk("team/getTeam" , async () => {
  return fetch("https://retoolapi.dev/dozQxK/testimonals").then((res)=>res.json())
})

const postTeam = createSlice(({
  name:"team",
  initialState:{
    post:[],
    loading:false
  },
  extraReducers:{
    [getTeam.pending]: (state, action) => {
      state.loading = true
    },
    [getTeam.fulfilled]: (state, action) => {
      state.loading = false;
      state.team = action.payload
    },
    [getTeam.rejected]: (state, action) => {
      state.loading = false
    },
  },
}));

export default postTeam.reducer