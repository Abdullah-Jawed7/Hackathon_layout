import { ArrowLeft, LockKeyholeIcon, Mail } from 'lucide-react'
import React, { useState } from 'react'

function OtpVerification() {
 
   const [otp, setOtp] = useState("")
   const [errors, setErrors] = useState({})
   const [isLoading, setIsLoading] = useState(false)
   const [isSubmitted, setIsSubmitted] = useState(false)
 
   const validateForm = () => {
     const newErrors = {}
 
     if (!otp) {
       newErrors.otp = "Otp is required"
     } else if (!(otp.length == 6)) {
       newErrors.otp = "otp should be 6 number "
     }
 
     setErrors(newErrors)
     return Object.keys(newErrors).length === 0
   }
 
   const handleSubmit = async (e) => {
     e.preventDefault()
     if (!validateForm()) return
 
     setIsLoading(true)
     // Simulate API call
     setTimeout(() => {
       setIsLoading(false)
       setIsSubmitted(true)
       onSubmit({ otp })
     }, 1000)
   }
 
   const handleChange = (e) => {
     setOtp(e.target.value)
     if (errors.otp) {
       setErrors({})
     }
   }
 
   if (isSubmitted) {
     return (
       <div className="w-full max-w-md mx-auto">
         <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 text-center">
           <div className="mb-6">
             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
               <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
             </div>
             <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Check your email</h2>
             <p className="text-gray-600 dark:text-gray-400 mt-2">We've sent a password reset link to testing@gmail.com</p>
           </div>
 
           <div className="space-y-4">
             <p className="text-sm text-gray-500 dark:text-gray-400">
               Didn't receive the email? Check your spam folder or try again.
             </p>
 
             <button
               onClick={() => setIsSubmitted(false)}
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
             >
               Try again
             </button>
 
             <button className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
               <ArrowLeft className="h-4 w-4 mr-2" />
               Back to sign in
             </button>
           </div>
         </div>
       </div>
     )
   }
 
   return (
     <div className="w-full max-w-md mx-auto">
       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
         <div className="mb-6 text-center">
           <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Verify your Email</h2>
           <p className="text-gray-600 dark:text-gray-400 mt-2">
            Enter 6 digit number that we send to testing@gmail.com 
           </p>
         </div>
 
         <form onSubmit={handleSubmit} className="space-y-4">
           <div>
             <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Enter Otp</label>
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
             {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp}</p>}
           </div>
 
           <button
             type="submit"
             disabled={isLoading}
             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
           >
             {isLoading ? (
               <div className="flex items-center justify-center">
                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                 Sending...
               </div>
             ) : (
               "Send Reset Link"
             )}
           </button>
         </form>
 
         <div className="mt-6 text-center">
           <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center justify-center mx-auto transition-colors">
             <ArrowLeft className="h-4 w-4 mr-2" />
             Back to sign in
           </button>
         </div>
       </div>
     </div>
   )
 }
 

export default OtpVerification
