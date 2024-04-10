import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent'
import { allCards } from './data';
import { GlobalStyle } from './styles/Global.styled';
import { Loading, Wrapper } from './styles/Common.styled';

const AppRoutes = {
  MAIN:"/",
  EXIT:"/exit",
  LOGIN:"/login",
  REGISTER:"/register",
  CARD:"/card/:id",
};

function App() {
  //Создание переменной состояния
  const [cards, setCards] = useState(allCards); 
  //Функция добавления новой задачи
  const onCardAdd = () => { 
    const newCard = {
      id: cards.length + 1,
      theme: "Новая задача",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
      style: "card__theme _orange",
    };
    setCards([...cards, newCard]);
  };
  //Эмуляция загрузки карточки
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path={AppRoutes.MAIN} element={<MainPage />} />
      <Route path={AppRoutes.EXIT} element={<ExitPage />} />
      <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
      <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      <Route path={AppRoutes.CARD} element={<CardPage />} />
    </Routes>
      <Wrapper>
		    <PopExit />
		    <PopNewCard />
		    <PopBrowse />
		    <Header onCardAdd={onCardAdd} />
        {isLoading ? (
          <Loading> Загрузка...</Loading>
        ) : (
          <MainContent cards={cards} />
        )}
      </Wrapper>

    <script src="js/script.js"></script>
    </>
  );
}

export default App;
