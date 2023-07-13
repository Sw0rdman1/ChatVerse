import "./ThemeSwitch.css";

type ThemeSwitchType = {
  theme: string;
  setTheme: (newValue: string) => void;
};

const ThemeSwitch: React.FC<ThemeSwitchType> = ({ theme, setTheme }) => {
  const changeThemeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="theme-switch">
      <input
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onClick={changeThemeHandler}
      />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
      <div className="background"></div>
    </div>
  );
};

export default ThemeSwitch;
