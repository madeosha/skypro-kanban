import { useState, useEffect } from 'react';
import './App.css';
import PopExit from './components/PopExit/PopExit';
import PopNewCard from './components/PopNewCard/PopNewCard';
import PopBrowse from './components/PopBrowse/PopBrowse';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent'
import { allCards } from './data';
import { GlobalStyle } from './styles/Global.styled';

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
      <div className="wrapper">
		    {/*<!-- pop-up start-->*/}
		    <PopExit />
		    <PopNewCard />
		    <PopBrowse />
		    {/*<!-- pop-up end-->*/}
		    <Header onCardAdd={onCardAdd} />
        {isLoading ? (
          <p className="loading"> Загрузка...</p>
        ) : (
          <MainContent cards={cards} />
        )}
      </div>

    <script src="js/script.js"></script>
    </>
  );
}

export default App;
