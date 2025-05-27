import { setIsLoading } from "../slices/commonSlice";
import * as TripApi from "../services/tripService"
import { toast } from "react-toastify";
import { ROUTESCONSTANTS } from "../constants/authConstants";

export const addNewTripAction = (formData, navigate) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await TripApi.addPrebookingAdvance(formData)
    const { data, error } = response
    if (error) {

      toast.error(response?.error)
      dispatch(setIsLoading(false))
    } else {
      toast.success(data?.metas?.message)
      dispatch(setIsLoading(false))
      //  navigate(ROUTESCONSTANTS.VERIFICATION,{state:formData});
    }
  }
  catch (error) {
    dispatch(setIsLoading(false));
    toast.error("An error occurred while processing your request.");
  }
};

export const getMyRates = (formData) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await TripApi.getRatingsByUserId(formData)
    const { data, error } = response
    if (error) {

      toast.error(response?.error)
      dispatch(setIsLoading(false))
    } else {
      toast.success(data?.metas?.message)
      dispatch(setIsLoading(false))
      //  navigate(ROUTESCONSTANTS.VERIFICATION,{state:formData});
    }
  }
  catch (error) {
    dispatch(setIsLoading(false));
    toast.error("An error occurred while processing your request.");
  }
}

// actions/tripAction.js

export const submitRating = (data) => async (dispatch) => {
  try {
    const response = await TripApi.DriverCommentRate(data); // Send the review to the API
    const { data, error } = response;

    if (error) {
      toast.error('Error submitting rating');
    } else {
      dispatch({
        type: 'ADD_REVIEW_SUCCESS',
        payload: data.review, // Add the new review to the store
      });
      toast.success('Review submitted successfully');
    }
  } catch (error) {
    toast.error('Failed to submit review');
  }
};

// send parcel action
export const submitSendParcel = (formData, navigate) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await TripApi.AddRequestToSendPackage(formData)
    const { data, error } = response
    if (error) {

      toast.error(response?.error)
      dispatch(setIsLoading(false))
    } else {
      toast.success(data?.metas?.message)
      dispatch(setIsLoading(false))
    }
  }
  catch (error) {
    dispatch(setIsLoading(false));
    toast.error("An error occurred while processing your request.");
  }
};

// AddWithdrawalRequest action
export const submitWithdrawalRequest = (formData, navigate) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await TripApi.AddWithdrawalRequest(formData)
    const { data, error } = response

    if (error) {

      toast.error(response?.error);
      dispatch(setIsLoading(false));
    } else {
      toast.success(data?.metas?.message);
      dispatch(setIsLoading(false));
      //  if (typeof onSuccess === 'function') {
      //   onSuccess(); // Navigate only if successful
      // }
      navigate(ROUTESCONSTANTS.MY_WALLET,{state:formData});
    }
  }
  catch (error) {
    dispatch(setIsLoading(false));
    toast.error("An error occurred while processing your request.");
  }
};

export const addTourismReservationAction = (formData, navigate) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true))
    const response = await TripApi.addTourismReservation(formData)
    const { data, error } = response
    if (error) {

      toast.error(response?.error)
      dispatch(setIsLoading(false))
    } else {
      toast.success(data?.metas?.message)
      dispatch(setIsLoading(false))
      //  navigate(ROUTESCONSTANTS.VERIFICATION,{state:formData});
    }
  }
  catch (error) {
    dispatch(setIsLoading(false));
    toast.error("An error occurred while processing your request.");
  }
};





// DriverCommentRate