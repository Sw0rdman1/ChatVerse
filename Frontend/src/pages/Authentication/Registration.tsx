import { MyButton } from "../../components/authentication/LogInInputs";
import RegistrationStepper from "../../components/authentication/RegistrationStepper";
import "./Registration.css";

const Registration = () => {
  const handleClick = () => {};

  return (
    <div className="register-container">
      <h2>Welcome to </h2>
      <h1>ChatVerse</h1>
      <h3>
        Join the{" "}
        <b style={{ color: "var(--primary-color)" }}>chat revolution</b>!
        <br />
        Register now and unlock a world of endless conversations and
        unforgettable moments.
      </h3>
      <MyButton text="Get Started!" clickHandler={handleClick} />
      <RegistrationStepper />
    </div>
  );
};

export default Registration;
