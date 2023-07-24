import "./AuthSwitch.css";

interface AuthSwitchProp {
  changeAuthMethod: () => void;
  checked: boolean;
}

const AuthSwitch: React.FC<AuthSwitchProp> = ({
  changeAuthMethod,
  checked,
}) => {
  return (
    <div className="auth-switch-container">
      <input
        type="checkbox"
        id="checkbox"
        className="switch__checkbox"
        checked={checked}
        onChange={changeAuthMethod}
      />
      <label className="switch__label" htmlFor="checkbox">
        <span>Log In</span>
        <span>Registration</span>
      </label>
    </div>
  );
};

export default AuthSwitch;
