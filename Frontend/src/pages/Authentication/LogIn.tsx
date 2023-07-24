import { useState } from "react";
import {
  MyButton,
  MyInputField,
} from "../../components/authentication/LogInInputs";
import { emailValidation } from "../../utils/Validation";
import PasswordInput from "../../components/authentication/PasswordInput";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {};

  return (
    <form className="login-container">
      <h1>ChatVerse</h1>
      <MyInputField
        placeholder="Email"
        value={email}
        onChange={setEmail}
        type="email"
        email
        errorText="Invalid email adress"
        validation={emailValidation}
      />
      <PasswordInput value={password} onChange={setPassword} />

      <MyButton text="Log In" clickHandler={handleLogIn} submit />
    </form>
  );
};

export default LogIn;
