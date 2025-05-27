import axios from "axios";
import {  setupInterceptorsTo } from "./interceptor";
const authInterceptor = setupInterceptorsTo(
  axios.create({ baseURL: process.env.REACT_APP_BASE_URL })
);

export default authInterceptor;