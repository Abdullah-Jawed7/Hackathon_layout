import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: null,
  isLoading:false
};

// slice = reducer + actionHandler
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.userDetails = action.payload;
    },
    logout:(state) =>{
        state.userDetails = null
    },
    setLoading: (state , action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addUser, logout , setLoading  } = userSlice.actions;

// // export const apiCall =  () => async (dispatch) => {
// //   try {
// //     const data = await axios.get('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')

// //     console.log(data.data.data, "==>> data")
// //     dispatch(addUsers(data.data.data))
// //   } catch (error) {
 
// //   }
// // }

export default userSlice.reducer;
