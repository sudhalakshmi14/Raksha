import { Routes, Route } from "react-router-dom";


import SOSMain from "../pages/SOSMain";
import ServiceSelect from "../pages/ServiceSelect";




import Splash from "../pages/Splash";
import Welcome from "../pages/welcome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SOS from "../pages/SOSMain";
import Profile from "../pages/Profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sos" element={<SOS />} />
      <Route path="/" element={<Splash />} />
<Route path="/welcome" element={<Welcome />} />
<Route path="/profile" element={<Profile />} />
<Route path="/dashboard" element={<SOS />} />
      <Route path="/sos" element={<SOSMain />} />
      <Route path="/select-service" element={<ServiceSelect />} />

      {/* default opening page */}
      <Route path="*" element={<SOSMain />} />
    

    </Routes>
  );
}