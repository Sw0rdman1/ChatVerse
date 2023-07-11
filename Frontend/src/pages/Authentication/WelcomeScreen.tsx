import HeroSection from "./HeroSection";
import { Route, Routes } from "react-router-dom";
import "./WelcomeScreen.css";
import LogIn from "./LogIn";
import Registration from "./Registration";

const WelcomeScreen = () => {
  return (
    <div className="auth-container">
      <HeroSection />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default WelcomeScreen;
