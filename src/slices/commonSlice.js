import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading:false
  
}

export const commonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
   setIsLoading:(state,{payload})=>{
    state.isLoading=payload
   },
   
   
  },
})

// Action creators are generated for each case reducer function
export const {setIsLoading } = commonSlice.actions

export default commonSlice.reducer