
import { APICONSTANTS } from "../constants/authConstants";
import authInterceptor from "../interceptor/authinterceptor";
import commonInterceptor from "../interceptor/commonInterceptor";
import { handleApiError } from "./utils";

export const addPrebookingTrip = async (formData) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.AddPrebookingTrip, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const GetTouristAreas = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getTouristAreas);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const GetAllAdvertisments = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getAllAdvertisments);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const ContactUs = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.contactUs, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const AboutApplication = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.aboutApplication);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const GetTermAndConditions = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getTermAndConditions);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const getRatingsByUserId = async (formData) => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getRatesByUserId(formData));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const DriverCommentRate = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.DriverComment(data));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}


export const GetTransactions = async (page = 1) => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getAllTransactions(page));
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
export const AddWithdrawalRequest = async (data) => {
  try {
  //  const res = await authInterceptor.post(APICONSTANTS.addWithdrawalRequest(data));
    const res = await authInterceptor.post(APICONSTANTS.addWithdrawalRequest, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
// export const AddTransaction = async (data) => {
//   try {
//     const res = await authInterceptor.post(APICONSTANTS.addTransaction, data);
//     return { error: null, data: res.data };
//   } catch (error) {
//     return handleApiError(error);
//   }
// };

export const AddTransaction = async ({ CardNumber } = {}) => {
  const url = APICONSTANTS.addTransaction(CardNumber);
  try {
    const res = await authInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export const GetBanks = async () => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getBanks);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}
// export const GetRehlaNews = async () => {
//   try {
//     const res = await commonInterceptor.get(APICONSTANTS.getRehlaNews);
//     return { error: null, data: res.data };
//   }
//   catch (error) {
//     return handleApiError(error)
//   }
// }
export const GetRehlaNews = async ({ page = 0, categoryId = null } = {}) => {
  let url;

  if (categoryId) {
    url = APICONSTANTS.getRehlaNewsByCategory({ page, CategoryId: categoryId });
  } else {
    url = `${APICONSTANTS.getRehlaNews}?Page=${page}`;
  }

  try {
    const res = await commonInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const GetCarCategories = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getCarCategories);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const getDriverTrips = async () => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getDriverTrips);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const getPassengerReservations = async () => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getPassengerReservations);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const GetAllNotification = async () => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.getAllNotification);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const GetRehlaNewsCategories = async () => {
  try {
    const res = await commonInterceptor.get(APICONSTANTS.getRehlaNewsCategories);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const GetRehlaNewsDetails = async ({ id } = {}) => {
  let url;
  console.log('id ' + id);
  url = APICONSTANTS.getRehlaNewsDetails({ id });
  try {
    const res = await commonInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getMyAllRates = async ({ page = 0} = {}) => {
  let url;
    url = APICONSTANTS.getMyAllRates({ page});
  try {
    const res = await authInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export const GetLanguages = async ({ page = 0} = {}) => {
  let url;
    url = APICONSTANTS.getLanguages({ page});
  try {
    const res = await commonInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export const AddTourismExpert = async (data) => {
  try {
   // const res = await authInterceptor.post(APICONSTANTS.addTourismExpert(data));
    const res = await authInterceptor.post(APICONSTANTS.addTourismExpert, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const GetTourismProgramsByAreaId = async ({TouristAreaId , page = 0 } = {}) => {
  
  let url = APICONSTANTS.getTourismProgramsByAreaId({  TouristAreaId: TouristAreaId, page });

  try {
    const res = await commonInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const GetTourismExpertsByAreaId = async ({TouristAreaId , page = 0 } = {}) => {
  
  let url = APICONSTANTS.getTourismExpertsByAreaId({  TouristAreaId: TouristAreaId, page });

  try {
    const res = await commonInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const GetMyPreferences = async () => {
  try {
    const res = await authInterceptor.get(APICONSTANTS.myPreferences);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const EditPreferences = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.editPreferences, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const GetTourismExpertDetails = async ({Id,TouristAreaId} = {}) => {
  
  let url = APICONSTANTS.getTourismExpertDetails({  Id: Id,TouristAreaId: TouristAreaId});

  try {
    const res = await authInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

export const GetPrebookingAdvance = async ({ page = 0} = {}) => {
  let url;
    url = APICONSTANTS.getPrebookingAdvance({ page});
  try {
    const res = await authInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export const UploadIdentityImage = async (data) => {
  console.log("data " + JSON.stringify(data));
  try {
    const res = await authInterceptor.post(APICONSTANTS.uploadIdentityImage, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

export const GetRequestsToSendPackage = async ({ page = 0} = {}) => {
  let url;
    url = APICONSTANTS.getRequestsToSendPackage({ page});
  try {
    const res = await authInterceptor.get(url);
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
}

export const AddRequestToSendPackage = async (data) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.addRequestToSendPackage, data);
    return { error: null, data: res.data };
  }
  catch (error) {
    return handleApiError(error)
  }
}

//addPrebookingAdvance
export const addPrebookingAdvance = async (formData) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.addPrebookingAdvance, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};

//addTourismReservation
export const addTourismReservation = async (formData) => {
  try {
    const res = await authInterceptor.post(APICONSTANTS.addTourismReservation, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { error: null, data: res.data };
  } catch (error) {
    return handleApiError(error);
  }
};


















