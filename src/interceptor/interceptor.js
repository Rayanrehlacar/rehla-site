
  export const BASE_URL =
    "https://cors-anywhere.herokuapp.com/https://wexapis-uks-uat-apim.azure-api.net/";
  const onAuthRequest = (
    config
  ) => {
    // console.info(`[request] [${JSON.stringify(config)}]`);
    const token = localStorage.getItem("profile")||sessionStorage.getItem("profile");
    const access_token = JSON.parse(token)?.accessToken;
   
    if (access_token) {
      config.headers["Authorization"] = "Bearer "+access_token;
    } else {
      window.location.reload();
    }
    return config;
  };
  const onRequest = (
    config
  ) => {
    console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
  };
  
  const onRequestError = (error) => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
  };
  
  const onResponse = (response) => {
    // console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
  };
  
  const onResponseError = (error) => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
  };
  
  export function setupInterceptorsTo(
    axiosInstance
  ) {
    axiosInstance.interceptors.request.use(onAuthRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  }
  export function setupCommonInterceptorsTo(
    axiosInstance
  ) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  }