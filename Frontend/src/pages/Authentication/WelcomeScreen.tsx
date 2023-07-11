import HeroSection from "./HeroSection";
import "./WelcomeScreen.css";
import LogIn from "./LogIn";
import Registration from "./Registration";
import { useState } from "react";

const WelcomeScreen = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <div className="welcome-screen-container">
      <HeroSection />
      <div className="auth-container">
        {logIn ? <LogIn /> : <Registration />}
      </div>
    </div>
  );
};

export default WelcomeScreen;
