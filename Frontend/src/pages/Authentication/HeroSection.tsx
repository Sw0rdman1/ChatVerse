import ThemeSwitch from "../../components/ThemeSwitch";

type HeroSectonType = {
  theme: string;
  setTheme: (newValue: string) => void;
};

const HeroSection: React.FC<HeroSectonType> = ({ theme, setTheme }) => {
  return (
    <div className="hero-section-container">
      <ThemeSwitch theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default HeroSection;
