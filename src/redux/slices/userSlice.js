// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   usersDetails: {},
//   isLogin: false,
//   isLoading: false,
// };

// // slice = reducer + actionHandler
// const usersSlice = createSlice({
//   name: "users",
//   initialState: initialState,
//   reducers: {
//     addUser: (state, action) => {
//       state.users = action.payload;
//     },
//     toggleLogin: (state) => {
//       state.isLogin = !state.isLogin;
//     },
//     setLoading: (state) => {
//       state.isLoading = true;
//     },
//     removeLoading: (state) => {
//       state.isLoading = false;
//     },
//   },
// });

// export const { addUser, toggleLogin } = usersSlice.actions;

// // export const apiCall =  () => async (dispatch) => {
// //   try {
// //     const data = await axios.get('https://hiringmine-railway-development.up.railway.app/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=&isPending=false&skills=')

// //     console.log(data.data.data, "==>> data")
// //     dispatch(addUsers(data.data.data))
// //   } catch (error) {
 
// //   }
// // }

// export default usersSlice.reducer;
