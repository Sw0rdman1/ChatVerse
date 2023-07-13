import "./AuthSwitch.css";

const AuthSwitch = () => {
  return (
    <div className="auth-switch-container">
      <input type="checkbox" id="checkbox" className="switch__checkbox" />
      <label className="switch__label" htmlFor="checkbox">
        <span>Log In</span>
        <span>Registration</span>
      </label>
    </div>
  );
};

export default AuthSwitch;
