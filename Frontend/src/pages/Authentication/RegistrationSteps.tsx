import { useContext } from "react";
import RegistrationStepper from "../../components/authentication/RegistrationStepper";
import { FirstNameRegistrationStep } from "./EveryRegistrationStep";
import { RegistrationContext } from "../../context/RegistrationContext";

const RegistrationSteps = () => {
  const registrationSteps = [<FirstNameRegistrationStep />, <></>];
  const { currentStep, setCurrentStep } = useContext(RegistrationContext);

  return (
    <div className="registration-steps">
      {registrationSteps[currentStep]}
      <RegistrationStepper
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

export default RegistrationSteps;
