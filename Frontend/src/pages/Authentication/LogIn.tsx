import { useState } from "react";
import {
  LogInButton,
  MyInputField,
} from "../../components/authentication/LogInInputs";
import { emailValidation } from "../../utils/Validation";
import PasswordInput from "../../components/authentication/PasswordInput";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
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
      {/* <MyInputField
        placeholder="Password"
        value={password}
        onChange={setPassword}
        type="password"
        password
        errorText=""
        validation={() => true}
      /> */}
      <PasswordInput value={password} onChange={setPassword} />
      <LogInButton />
    </div>
  );
};

export default LogIn;
