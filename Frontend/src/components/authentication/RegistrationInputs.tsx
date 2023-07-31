import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./LogInInputs.css";
import { useEffect, useState } from "react";
import Checkmark from "../reusable/CheckMark";

type MyInputFieldProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  email?: boolean;
  name?: boolean;
  validation: (value: string) => boolean;
  errorText: string;
  setDisabled: (value: boolean) => void;
};

export const RegistrationInputField: React.FC<MyInputFieldProps> = ({
  placeholder,
  type,
  value,
  onChange,
  email,
  name,
  validation,
  errorText,
  setDisabled,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [displayLoader, setDisplayLoader] = useState(false);
  const [validInput, setValidInput] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    setValidInput(false);
    if (errorText === "") return;
    if (value === "") {
      setErrorMessage("");
      setDisplayLoader(false);
      setValidInput(false);
      setDisabled(true);
      return;
    }
    setDisplayLoader(true);
    const timer = setTimeout(() => {
      if (!validation(value)) {
        setErrorMessage(errorText);
        setDisabled(true);
      } else {
        setErrorMessage("");
        setValidInput(true);
        setDisabled(false);
      }
      setDisplayLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="input-field-with-error">
      <div
        className={
          errorMessage
            ? "input-field error"
            : validInput
            ? "input-field success"
            : "input-field"
        }
      >
        {email ? <MdEmail className="icon" /> : <></>}
        {name ? <BsFillPersonFill className="icon" /> : <></>}
        <input
          className="input"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleInputChange}
        />
        {validInput ? (
          <Checkmark size="medium" />
        ) : (
          <Loader displayLoader={displayLoader} />
        )}
      </div>
      <span>{errorMessage}</span>
    </div>
  );
};

interface LoaderProps {
  displayLoader: boolean;
}

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

interface NextStepButtonProps {
  clickHandler: () => void;
  disabled: boolean;
}

export const NextStepButton: React.FC<NextStepButtonProps> = ({
  clickHandler,
  disabled,
}) => {
  return (
    <div className="registration-button">
      <button onClick={clickHandler} disabled={disabled}>
        Next
      </button>
    </div>
  );
};
