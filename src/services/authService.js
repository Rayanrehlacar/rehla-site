import { APICONSTANTS } from "../constants/authConstants";
import authInterceptor from "../interceptor/authinterceptor";
import commonInterceptor from "../interceptor/commonInterceptor";
import { handleApiError } from "./utils";

export const signIn = async (formData) => {
    try {
      const res = await commonInterceptor.get(APICONSTANTS.loginpath(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
export const signUp = async (formData) => {
    try {
      const res = await commonInterceptor.post(APICONSTANTS.sigupPath,formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };

export const forgotPass = async (formData) => {
    try {
      const res = await commonInterceptor.get(APICONSTANTS.forgotPassPath(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
export const verifyOtp = async (formData) => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.verifyOtp(formData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};
export const verifyEmail = async (formData) => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.verifyEmail(formData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};
export const resendOtp = async (formData) => {
    try {
      const res = await commonInterceptor.get(APICONSTANTS.ResendOtpPath(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
export const updatePassword = async (formData) => {
    try {
      const res = await commonInterceptor.post(APICONSTANTS.updatePasswordPath,formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
  
export const getUserDetails = async () => {
    try {
      const res = await authInterceptor.get(APICONSTANTS.getUserDetailsPath, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };
  
export const updateUserDetails = async (formData) => {
    try {
      const res = await authInterceptor.post(APICONSTANTS.updateProfilePath,formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { error: null, data: res.data };
    } catch (error) {
      return handleApiError(error);
    }
  };

export const updateProfileImage=async(formData)=>{
  try{
    const res = await authInterceptor.post(APICONSTANTS.updateProfileImagePath,formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  }
  catch(error){
    return handleApiError(error)
  }
}
