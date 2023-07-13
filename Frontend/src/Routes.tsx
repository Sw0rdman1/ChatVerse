import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import MainScreen from "./pages/MainScreen";
import WelcomeScreen from "./pages/Authentication/WelcomeScreen";
import { useState } from "react";

const Routing = () => {
  const auth = useAuth();
  const [theme, setTheme] = useState("light");

  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route
          index
          path="/"
          element={
            auth.user ? (
              <MainScreen />
            ) : (
              <WelcomeScreen theme={theme} setTheme={setTheme} />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Routing;
