import { useContext, useState } from "react";
import {
  NextStepButton,
  RegistrationInputField,
} from "../../components/authentication/RegistrationInputs";
import { nameValidation } from "../../utils/Validation";
import { RegistrationContext } from "../../context/RegistrationContext";

export const FirstNameRegistrationStep = () => {
  const { user, updateUserField } = useContext(RegistrationContext);
  const [name, setName] = useState(user.displayName);
  const [disabled, setDisabled] = useState(true);

  const handleNextStep = () => {
    updateUserField("displayName", name);
  };

  return (
    <div className="first-step-container">
      <h2>Hello World</h2>
      <h3>
        Welcome aboard! Before we launch you into the world of{" "}
        <b className="bold-color-text">ChatVerse</b>, we'd love to know you
        better, so maybe your <b className="bold-color-text">name</b> for
        beginning.
      </h3>
      <RegistrationInputField
        errorText="Name must be longer"
        onChange={setName}
        placeholder="Your name"
        type="text"
        validation={nameValidation}
        setDisabled={setDisabled}
        value={name}
        name
      />
      <NextStepButton clickHandler={handleNextStep} disabled={disabled} />
    </div>
  );
};
