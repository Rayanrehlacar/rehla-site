import React, { Suspense, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Faq from './Pages/Faq';
import TourismTours from './Pages/TourismTours';
import SendParcel from './Pages/SendParcel';
import News from './Pages/News';
import Login from './Pages/Login';
import './App.css';
import ForgetPassword from './Pages/ForgetPassword';
import NewPassword from './Pages/NewPassword';
import VerificationCode from './Pages/VerificationCode';
import NewsDetails from './Pages/NewsDetails';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfUse from './Pages/TermsOfUse';
import WithdrawBalance from './Pages/WithdrawBalance';
import PrebookingTrips from './Pages/PrebookingTrips';
import MyWallet from './Pages/MyWallet';
import Registration from './Pages/Registration';
import EditProfile from './Pages/EditProfile';
import MyPreferences from './Pages/MyPreferences';
import AddBalance from './Pages/AddBalance';
import AddBalanceForm from './Pages/AddBalanceForm';
import BookTour from './Pages/BookTour';
import RegisterTraveler from './Pages/RegisterTraveler';
import Verification from './Pages/Verification';
import Notifications from './Pages/Notifications';
import MyRates from './Pages/MyRates';
import CityTour from './Pages/CityTour'; 
import MyTrip from './Pages/MyTrip';
import MyReservation from './Pages/MyReservation';
import CityTourSingle from './Pages/CityTourSingle';
import PrivateRoute from './layout/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import CustomSpinner from './Components/CustomLoader/loader';
import PublicRoute from './layout/PublicRoute';
import { initializeAuth } from './actions/authAction';
import Logout from './Pages/logout';
import MySendParcels from './Pages/MySendParcels';
import ScrollToTop from './Pages/ScrollToTop';

function App() {
  const {userDetails} = useSelector((state) => state.userStore);
  const {isLoading}= useSelector((state)=>state?.commonStore)
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(initializeAuth())
  },[])
  return (
    <HashRouter>
      {isLoading && <CustomSpinner />}
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <Routes>
        <Route element={<PrivateRoute userData={userDetails} />}>
          <Route exact path="/prebooking-trips" element={<PrebookingTrips/>} /> 
        </Route>
        <Route exact path="/edit-profile" element={<EditProfile/>} />
          <Route exact path="/my-preferences" element={<MyPreferences/>} />
          <Route exact path="/add-balance" element={<AddBalance/>} />
          <Route exact path="/add-balance-form" element={<AddBalanceForm/>} />
          <Route exact path="/book-tour" element={<BookTour/>} />
          <Route exact path="/register-traveler" element={<RegisterTraveler/>} />
          <Route exact path="/my-wallet" element={<MyWallet/>} />
          <Route exact path="/withdraw-balance" element={<WithdrawBalance/>} />
          <Route exact path="/verifications" element={<Verification/>} />
          <Route exact path="/notifications" element={<Notifications/>} />
          <Route exact path="/my-rates" element={<MyRates/>} />
          <Route exact path="/my-trip" element={<MyTrip/>} />
          <Route exact path="/my-reservation" element={<MyReservation/>} />
          <Route exact path="/logout" element={<Logout/>} />
          <Route  element={<PublicRoute userData={userDetails} />}>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/forget-password" element={<ForgetPassword/>} />
          <Route exact path="/new-password" element={<NewPassword/>} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/tourism-tours" element={<TourismTours />} />
          <Route exact path="/send-parcel" element={<SendParcel />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/verification" element={<VerificationCode />} />
          <Route path="/news-details/:id" element={<NewsDetails />} />
          {/* <Route exact path="/news-details" element={<NewsDetails />} /> */}
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms-of-use" element={<TermsOfUse />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/city-tour" element={<CityTour />} />
          <Route exact path="/city-tour-single" element={<CityTourSingle />} />
          <Route exact path="/my-send-parcel" element={<MySendParcels/>} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
