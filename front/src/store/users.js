import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../helper/httpHelper";

export const fetchAllUsers = createAsyncThunk("users", async (_, thunkApi) => {
  try {
    const response = await axios.get("user/associate-list?type=direct");
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const apiSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
