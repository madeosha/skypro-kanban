import React from "react";
import { Routes, Route } from "react-router-dom";
import { routeObj } from "./lib/const";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MainPage from "./pages/MainPage/MainPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CardPage from "./pages/CardPage/CardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewCardPage from "./pages/NewCardPage/NewCardPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={routeObj.MAIN} element={<MainPage />}>
            <Route path={routeObj.CARD} element={<CardPage />} />
            <Route
              path={routeObj.EXIT}
              element={<ExitPage />}
            />
            <Route path={routeObj.NEW_CARD} element={<NewCardPage />} />
          </Route>
        </Route>

        <Route
          path={routeObj.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={routeObj.REGISTER}
          element={<RegisterPage />}
        />
        <Route path={routeObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
