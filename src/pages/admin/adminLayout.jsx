"use server";
import axios from "axios";
import { Navigate, Outlet } from "react-router";
import { addUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

async function AdminLayout () {
  const dispatch = useDispatch();
  const currentUser = async (token) => {
    try {
      const response = await axios.get(`${base_url}/api/user/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Registration successful:", response?.data?.data);
      dispatch(addUser(response?.data?.data));
      return response?.data
    } catch (error) {

    }
  };

  // check user does not had token in localstorage or cookie
  const token = localStorage.getItem("accessToken");
  let allowed;
  if (token) {
   allowed = await currentUser(token)
  }

  return !allowed.data.isAdmin ? (
    <Navigate to="/" />
  ) : (
    <div className="w-full min-w-screen min-h-screen h-full mx-auto p-3  bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center">
      {" "}
      <Outlet />{" "}
    </div>
  );
}

export default AdminLayout;
