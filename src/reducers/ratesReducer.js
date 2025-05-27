const initialState = {
    rates: [],
    reservations: [],
    reviews: [],
    isLoading: false,
  };
  
  const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RATES_SUCCESS':
        return {
          ...state,
          rates: action.payload.rates,
          reservations: action.payload.reservations,
        };
      case 'ADD_REVIEW_SUCCESS':
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
        };
      case 'SET_LOADING':
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ratesReducer;
  