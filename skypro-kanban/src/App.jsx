import { Routes, Route } from "react-router-dom";
import './App.css';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent'
import { allCards } from './data';
import { GlobalStyle } from './styles/Global.styled';
import AppRoutes from './Routes';

function App() {
  
  return (
    <>
    <GlobalStyle />
    <AppRoutes />
    <script src="js/script.js"></script>
    </>
  );
}

export default App;
