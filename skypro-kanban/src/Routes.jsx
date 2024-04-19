import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { routeObj } from "./lib/const";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CardPage from "./pages/CardPage/CardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
function checkLS() {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    return user;
  } catch (error) {
    localStorage.removeItem("user")
    return null;
  }
}

const AppRoutes = () => {
  const [user, setUser] = useState(checkLS());
  const navigate = useNavigate();

  function userLogin(newUser) {
    console.log(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
      setUser(newUser)
      navigate(routeObj.MAIN);
  }
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(routeObj.LOGIN);
  }

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path={routeObj.MAIN} element={<MainPage user={user} />}>
            <Route path={routeObj.CARD} element={<CardPage />} />
            <Route
              path={routeObj.EXIT}
              element={<ExitPage logout={logout} />}
            />
          </Route>
        </Route>

        <Route
          path={routeObj.LOGIN}
          element={<LoginPage userLogin={userLogin} />}
        />
        <Route path={routeObj.REGISTER} element={<RegisterPage userLogin={userLogin} />} />
        <Route path={routeObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
