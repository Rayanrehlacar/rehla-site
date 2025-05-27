import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isAuth: false,
  userDetails:null,
  isUploading:false
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    setIsUploading: (state, { payload }) => {
      state.isUploading = payload;
    },
    setUserDetails: (state, { payload }) => {
      console.log({payload})
      state.userDetails = payload;
      state.isAuth = true;
    },
    resetUserDetails: (state) => {
      state.userDetails = null;
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsUploading,resetUserDetails, setAuth, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
