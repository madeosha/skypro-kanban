import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routeObj } from "./lib/const";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={routeObj.MAIN} element={<MainPage />}>
            <Route path={routeObj.CARD} element={<CardPage />} />
            <Route path={routeObj.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
          </Route>
        </Route>

        <Route path={routeObj.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
        <Route path={routeObj.REGISTER} element={<RegisterPage />} />
        <Route path={routeObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
