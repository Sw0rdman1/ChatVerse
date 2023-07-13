import HeroSection from "./HeroSection";
import "./WelcomeScreen.css";
import LogIn from "./LogIn";

type WelcomeScreenType = {
  theme: string;
  setTheme: (newValue: string) => void;
};

const WelcomeScreen: React.FC<WelcomeScreenType> = ({ theme, setTheme }) => {
  return (
    <div className="welcome-screen-container">
      <HeroSection theme={theme} setTheme={setTheme} />
      <div className="auth-container">
        <LogIn />
      </div>
    </div>
  );
};

export default WelcomeScreen;
