import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../helper/httpHelper";

export const fetchLowerProfiles = createAsyncThunk(
  "lowerUserProfiles",
  async () => {
    const response = await axios.get("user/lower-users");
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "lowerUserProfiles",
  initialState: {
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLowerProfiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLowerProfiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchLowerProfiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
