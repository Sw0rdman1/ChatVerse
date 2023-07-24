import HeroSection from "./HeroSection";
import "./WelcomeScreen.css";
import LogIn from "./LogIn";
import AuthSwitch from "../../components/authentication/AuthSwitch";
import { useState } from "react";
import Registration from "./Registration";

type WelcomeScreenType = {
  theme: string;
  setTheme: (newValue: string) => void;
};

const WelcomeScreen: React.FC<WelcomeScreenType> = ({ theme, setTheme }) => {
  const [authMethod, setAuthMethod] = useState("login");

  function changeAuthMethod(): void {
    setAuthMethod(authMethod === "login" ? "register" : "login");
  }

  return (
    <div className="welcome-screen-container">
      <HeroSection theme={theme} setTheme={setTheme} />
      <div className="auth-container">
        <AuthSwitch changeAuthMethod={changeAuthMethod} />
        {authMethod === "login" ? <LogIn /> : <Registration />}
      </div>
    </div>
  );
};

export default WelcomeScreen;
