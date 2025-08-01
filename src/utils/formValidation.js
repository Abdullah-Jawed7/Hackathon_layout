   const validateForm = (formData , setErrors) => {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    // if (!formData.identityNumber) {
    //   newErrors.identityNumber = "Identity Number is required"
    // } else if (formData.identityNumber.length != 13) {
    //   newErrors.identityNumber = "Name must be 13 characters"
    // }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateLogin = (formData , setErrors) => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  
     const validateOtp = (otp , setErrors) => {
       const newErrors = {}
   
       if (!otp) {
         newErrors.otp = "Otp is required"
       } else if (!(otp.length == 6)) {
         newErrors.otp = "otp should be 6 number "
       }
   
       setErrors(newErrors)
       return Object.keys(newErrors).length === 0
     }


  export {
    validateForm,
    validateLogin,
    validateOtp,
  }