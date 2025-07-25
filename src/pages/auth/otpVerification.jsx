import { ArrowLeft, LockKeyholeIcon, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastAlert } from "../../utils/toast.js";
import { useNavigate } from "react-router";
import axios from "axios";
import { base_url } from "../../constants.js";
import { validateOtp } from "../../utils/formValidation.js";
import { addUser } from "../../redux/slices/userSlice.js";

function OtpVerification() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.user);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(()=>{
    
    if (userDetails?.otpVerified) {
        ToastAlert({
        type: "success",
        message: "Email verified !",
      });
      navigate("/login")
    }
  },[userDetails])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOtp(otp, setErrors)) return;
    setIsLoading(true);
    const id = userDetails?._id || localStorage.getItem("id");
    if (!id) {
      navigate("/register");
      return ToastAlert({
        type: "error",
        message: "user not found",
      });
    }
    try {
      console.log(id);

      const response = await axios.post(`${base_url}/api/auth/verifyOtp`, {
        id: id,
        otp: otp,
      });

      console.log(response);
      if (!response?.data?.data?.accessToken) {
        ToastAlert({
          type: "error",
          message: "Token not found!",
        });
      }
      dispatch(addUser(response?.data?.data));
      localStorage.setItem("accessToken", response?.data?.data?.accessToken);

      ToastAlert({
        type: "success",
        message: response.data.message,
      });
      // Redirect to home or handle successful registration
      navigate("/");
    } catch (error) {
      console.log(error.response);
      ToastAlert({
        type: "error",
        message: error.response.data.message || "Otp verification failed",
      });
      setErrors(error.response.data.message || "Otp verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
    if (errors.otp) {
      setErrors({});
    }
  };

  const sendOtpHandler = async () => {
    setIsLoading(true)

    const id = userDetails?._id || localStorage.getItem("id");
    if (!id) {
      navigate("/register");
      return ToastAlert({
        type: "error",
        message: "user not found",
      });
    }
    try {
       
      const response = await axios.post(`${base_url}/api/auth/sendOtp/${id}`);

        ToastAlert({
        type: "success",
        message: response.data.data.message || `Otp sended successfully to ${userDetails?.email}`,
      });


    } catch (error) {
      console.log(error.response);
      ToastAlert({
        type: "error",
        message: error.response.data.message,
      });
       
      navigate("/login")
      
    } finally {
        setIsLoading(false)
    }
  }


  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Verify your Email
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Enter 6 digit number that we send to {userDetails?.email}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Enter Otp
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockKeyholeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={otp}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.otp ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your otp"
              />
            </div>
            {errors.otp && (
              <p className="text-red-500 text-xs mt-1">{errors.otp}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                verifying...
              </div>
            ) : (
              "Verify Otp"
            )}
          </button>
        </form>

        <div className="flex gap-3 mt-6 text-center">
          <span>Didn't Receive Anything ?</span>
          <button
            onClick={sendOtpHandler}
            disabled={isLoading}
            className="disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold  transition-colors"
          >
            Resend Otp
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
