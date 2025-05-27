import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutAction } from '../actions/authAction'

const Logout = () => {
    const dispatch= useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(logoutAction(navigate))
    },[])
  return (
    <div>You have been logout from website</div>
  )
}

export default Logout