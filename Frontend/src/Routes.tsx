import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import MainScreen from "./pages/MainScreen";
import WelcomeScreen from "./pages/Authentication/WelcomeScreen";

const Routing = () => {
  const auth = useAuth();

  return (
    <Routes>
      <Route
        index
        path="/"
        element={auth.user ? <MainScreen /> : <WelcomeScreen />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
