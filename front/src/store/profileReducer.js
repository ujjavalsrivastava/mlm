import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../helper/httpHelper";

export const fetchProfile = createAsyncThunk("profile", async (_, thunkApi) => {
  try {
    const response = await axios.get("user/profile");
    let profilePic = {};
    try {
      profilePic = await axios.get("user/profile-picture", {
        responseType: "blob",
      });
    } catch (error) {
      console.log({ error });
    }
    if (profilePic.status === 200) {
      response.data.image = profilePic.data;
    }
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const apiSlice = createSlice({
  name: "profile",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
