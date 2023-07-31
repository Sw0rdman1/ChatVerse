import { createContext, useState } from "react";
import { Gender, RegistrationUser } from "../services/User.service";

const initialUser: RegistrationUser = {
  displayName: "",
  email: "",
  photoURL: null,
  gender: Gender.Male,
  dateOfBirth: new Date(),
};

export interface RegistrationContextProps {
  user: RegistrationUser;
  updateUserField: (field: keyof RegistrationUser, value: any) => void;
  currentStep: number;
  setCurrentStep: (value: number) => void;
}

export const RegistrationContext = createContext<RegistrationContextProps>({
  user: initialUser,
  updateUserField: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
});

interface RegistrationProviderProps {
  children: React.ReactNode;
}

export const RegistrationProvider: React.FC<RegistrationProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<RegistrationUser>(initialUser);
  const [currentStep, setCurrentStep] = useState(0);

  const updateUserField = (field: keyof RegistrationUser, value: any) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
    console.log(currentStep);

    setCurrentStep(currentStep + 1);
  };

  return (
    <RegistrationContext.Provider
      value={{ user, updateUserField, currentStep, setCurrentStep }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
