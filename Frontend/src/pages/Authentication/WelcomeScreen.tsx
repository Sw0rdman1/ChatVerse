import HeroSection from "./HeroSection";
import "./WelcomeScreen.css";
import LogIn from "./LogIn";
import AuthSwitch from "../../components/authentication/AuthSwitch";
import { useState } from "react";
import Registration from "./Registration";
import ConfirmationDialog from "../../components/reusable/ConfirmationDialog";

type WelcomeScreenType = {
  theme: string;
  setTheme: (newValue: string) => void;
};

const WelcomeScreen: React.FC<WelcomeScreenType> = ({ theme, setTheme }) => {
  const [authMethod, setAuthMethod] = useState("login");
  const [registrationStarted, setRegistrationStarted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    // Logic to execute on confirmation
    setShowDialog(false);
    setAuthMethod("login");
    setRegistrationStarted(false);
  };

  const handleCancel = () => {
    // Logic to execute on cancellation
    setShowDialog(false);
  };

  function changeAuthMethod(): void {
    if (authMethod === "register" && registrationStarted) {
      setShowDialog(true);
    } else {
      setAuthMethod(authMethod === "login" ? "register" : "login");
    }
  }

  return (
    <div className="welcome-screen-container">
      <HeroSection theme={theme} setTheme={setTheme} />
      <div className="auth-container">
        <AuthSwitch
          changeAuthMethod={changeAuthMethod}
          checked={authMethod !== "login"}
        />
        {authMethod === "login" ? (
          <LogIn />
        ) : (
          <Registration
            registrationStarted={registrationStarted}
            setRegistrationStarted={setRegistrationStarted}
          />
        )}
      </div>
      {showDialog && (
        <ConfirmationDialog
          message="Are you sure you want to leave registration?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default WelcomeScreen;
