import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ServiceProfiles from "./pages/ServiceProfiles";
import Booking from './pages/Booking';
import Choice from "./pages/Choice";
import Registerr from "./pages/Registerr";
import Profile from "./pages/Profile";
import ReviewsPage from './pages/ReviewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/choice" element={<Choice />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/services/:serviceType" element={<ServiceProfiles/>} />
        <Route path="/services/:serviceType/booking" element={<Booking/>} />
        <Route path="/register/provider" element={<Registerr/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
