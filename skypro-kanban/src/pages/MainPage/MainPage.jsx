import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import { Outlet } from "react-router-dom";

const MainPage = ({user}) => {
  return (
    <>
      <MainContent user={user} />
      <Outlet />
    </>
  );
};

export default MainPage;
