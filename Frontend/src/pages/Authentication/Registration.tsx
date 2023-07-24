import { MyButton } from "../../components/authentication/LogInInputs";
import "./Registration.css";
import RegistrationSteps from "./RegistrationSteps";

interface RegistrationProps {
  registrationStarted: boolean;
  setRegistrationStarted: (value: boolean) => void;
}

const Registration: React.FC<RegistrationProps> = ({
  registrationStarted,
  setRegistrationStarted,
}) => {
  const handleClick = () => {
    setRegistrationStarted(true);
  };

  return (
    <div className="register-container">
      {!registrationStarted ? (
        <>
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
        </>
      ) : (
        <RegistrationSteps />
      )}
    </div>
  );
};

export default Registration;
