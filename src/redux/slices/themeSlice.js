import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light" ,
  isLoading:false
}

// slice = reducer + actionHandler
const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    darkTheme: (state) => {
      state.theme = 'dark'
    },
    lightTheme: (state) => {
      state.theme = 'light'
    },
     setLoading: (state , action) => {
      state.isLoading = action.payload;
    },
    
  }
})
 


export const {darkTheme,lightTheme,setLoading} = themeSlice.actions

export default themeSlice.reducer