import axios from "axios";
import { setupCommonInterceptorsTo } from "./interceptor";
const commonInterceptor = setupCommonInterceptorsTo(
  axios.create({ baseURL: process.env.REACT_APP_BASE_URL })
);

export default commonInterceptor;