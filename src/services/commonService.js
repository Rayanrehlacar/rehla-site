import { APICONSTANTS } from "../constants/authConstants";
import authInterceptor from "../interceptor/authinterceptor";
import { handleApiError } from "./utils";

export const AddPrebookingTrip = async (data) => {
    try {
        const res = await authInterceptor.post(APICONSTANTS.AddPrebookingTrip, data);
        return { error: null, data: res.data };
    }
    catch (error) {
        return handleApiError(error)
    }
}
export const GetTouristAreas = async (data) => {
    try {
        const res = await authInterceptor.get(APICONSTANTS.getTouristAreas);
        return { error: null, data: res.data };
    }
    catch (error) {
        return handleApiError(error)
    }
}