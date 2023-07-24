import "./AuthSwitch.css";

interface AuthSwitchProp {
  changeAuthMethod: () => void;
}

const AuthSwitch: React.FC<AuthSwitchProp> = ({ changeAuthMethod }) => {
  return (
    <div className="auth-switch-container">
      <input type="checkbox" id="checkbox" className="switch__checkbox" />
      <label
        className="switch__label"
        htmlFor="checkbox"
        onClick={changeAuthMethod}
      >
        <span>Log In</span>
        <span>Registration</span>
      </label>
    </div>
  );
};

export default AuthSwitch;
