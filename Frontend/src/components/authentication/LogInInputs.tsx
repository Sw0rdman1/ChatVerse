import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneLock } from "react-icons/ai";
import "./LogInInputs.css";
import { useEffect, useState } from "react";

type MyInputFieldProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  email?: boolean;
  password?: boolean;
  validation: (value: string) => boolean;
  errorText: string;
};

export const MyInputField: React.FC<MyInputFieldProps> = ({
  placeholder,
  type,
  value,
  onChange,
  email,
  password,
  validation,
  errorText,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [displayLoader, setDisplayLoader] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    if (errorText === "") return;
    if (value === "") {
      setErrorMessage("");
      setDisplayLoader(false);
      return;
    }
    setDisplayLoader(true);
    const timer = setTimeout(() => {
      if (!validation(value)) {
        setErrorMessage(errorText);
      } else {
        setErrorMessage("");
      }
      setDisplayLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="input-field-with-error">
      <div className={errorMessage ? " input-field error" : "input-field"}>
        {email ? <BsFillPersonFill className="icon" /> : <></>}
        {password ? <AiTwotoneLock className="icon" /> : <> </>}
        <input
          className="input"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleInputChange}
        />
        <Loader displayLoader={displayLoader} />
      </div>
      <span>{errorMessage}</span>
    </div>
  );
};

type LoaderProps = {
  displayLoader: boolean;
};

const Loader: React.FC<LoaderProps> = ({ displayLoader }) => {
  return (
    <div className={displayLoader ? "lds-ring" : "lds-ring hidden"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

interface MyButtonProps {
  text: string;
  clickHandler: () => void;
  submit?: boolean;
}

export const MyButton: React.FC<MyButtonProps> = ({
  text,
  clickHandler,
  submit,
}) => {
  return (
    <div className="login-button">
      <button type={submit ? "submit" : "button"} onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
};
