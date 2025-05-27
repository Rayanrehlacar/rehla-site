import React, {  useMemo } from 'react'

import { Navigate, Outlet} from 'react-router-dom';


const PublicRoute = ({userData}) => {
    const isAuthenticated = useMemo(() => {
        return (userData, accessToken) => {
          return userData ;
        };
      }, []);
      
      const token = localStorage.getItem("profile");
      const accessToken = JSON.parse(token)?.accessToken;
      console.log({token}, isAuthenticated(userData, accessToken))
    //   useEffect(() => {
    //     if (!isAuthenticated(userData, accessToken)) {
    //       dispatch(setInitialAuthState(navigate));
    //     }
    //   }, [dispatch, navigate, userData, accessToken, isAuthenticated]);
  return (
    !isAuthenticated(userData, accessToken) ?<Outlet/>:<Navigate to="/"/>
  )
}

export default PublicRoute