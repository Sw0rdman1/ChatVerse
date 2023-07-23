import { useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type PasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="input-field-with-error">
      <div className={false ? " input-field error" : "input-field"}>
        <AiTwotoneLock className="icon" />
        <input
          className="input"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleInputChange}
        />
        {showPassword ? (
          <MdVisibilityOff onClick={toggleShowPassword} className="icon-eye" />
        ) : (
          <MdVisibility onClick={toggleShowPassword} className="icon-eye" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
