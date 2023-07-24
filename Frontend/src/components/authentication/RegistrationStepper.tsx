import React, { useState } from "react";
import "./RegistrationStepper.css"; // Create a CSS file to style the stepper component
import { RiArrowLeftLine } from "react-icons/ri"; // Import the back arrow icon from React Icons

const RegistrationStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleBackStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="stepper-container">
      <div
        className={currentStep !== 0 ? "back-arrow" : "back-arrow hidden"}
        onClick={handleBackStep}
      >
        <RiArrowLeftLine />
      </div>

      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className={`step-dot ${index === currentStep ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default RegistrationStepper;
