import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { setInitialAuthState } from '../actions/authAction';

const PrivateRoute = ({userData}) => {
    const isAuthenticated = useMemo(() => {
        return (userData, accessToken) => {
          return !!userData 
        };
      }, []);
      const dispatch =useDispatch()
      const navigate= useNavigate()
      const token = localStorage.getItem("profile");
      const accessToken = JSON.parse(token)?.accessToken;
      useEffect(() => {
        if (!isAuthenticated(userData, accessToken)) {
          dispatch(setInitialAuthState(navigate));
        }
      }, [dispatch, navigate, userData, accessToken, isAuthenticated]);
  return (
    isAuthenticated(userData, accessToken) ?<Outlet/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute