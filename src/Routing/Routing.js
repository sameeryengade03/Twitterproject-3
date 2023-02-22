import { Routes, Route } from "react-router-dom";
import LogIn from "../Component/Log-In/LogIn";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MobileTweet from "../Pages/MobileTweet/MobileTweet";
import OtherProfilePage from "../Pages/OtherProfilePage/OtherProfilePage";
import ParticularTweet from "../Pages/Particular Tweet/ParticularTweet";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
// import MystatusPage from "../Pages/ThreadPage or Status Page/MyStatusPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile/:x" element={<ProfilePage/>} />
      <Route path="/:name" element={<OtherProfilePage />} />
      
       <Route path="/status" element={<ParticularTweet />} />
       <Route path="/compose/tweet" element={<MobileTweet />} />
       {
        // <Route path="/mystatus" element={<MystatusPage /> }  />
     }
      
    </Routes>
  );
}
