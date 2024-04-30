import MainContent from "../../components/MainContent/MainContent";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <MainContent />
      <Outlet />
    </>
  );
};

export default MainPage;
