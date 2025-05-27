import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preferences: {
    HaveAirCondition: true,
    HaveChargeMobile: true,
    LikeMusic: true,
    LikePets: true,
    LikeSmoking: true,
    LikeSpeaking: true,
    DeliverPost: true,
    HaveWifi: true,
  },
};

export const preferenceSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPreferences:(state,{payload})=>{
        state.preferences=payload
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { ssetPreferences } =
  preferenceSlice.actions;

export default preferenceSlice.reducer;
