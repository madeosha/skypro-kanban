import { useEffect, useState } from "react";
import MainColumn from "../MainColumn/MainColumn";
import {
  MainBlock,
  MainContainerStyled,
  MainContentStyled,
  MainStyled,
} from "./MainContent.styled";
import Header from "../Header/Header";
import { allCards } from "../../data";
import { Loading, Wrapper } from "../../styles/Common.styled";
import { getToDos } from "../../api.js";

//Колонки
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContent() {
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
  const [error, setError] = useState(null);
  useEffect(() => {
    getToDos()
      .then((data) => {
        setCards(data.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <Wrapper>
      <MainStyled>
        <Header onCardAdd={onCardAdd} />
        <MainContainerStyled>
          <MainBlock>
            <MainContentStyled>
              {error ? (
                <p style={{ color: "red" }}>
                  Произошла ошибка, попробуйте позже!
                </p>
              ) : isLoading ? (
                <Loading> Загрузка...</Loading>
              ) : (
                <>
                  {statusList.map((status) => {
                    return (
                      <MainColumn
                        key={status}
                        title={status}
                        allCards={cards.filter(
                          (card) => card.status === status
                        )}
                      />
                    );
                  })}
                </>
              )}
            </MainContentStyled>
          </MainBlock>
        </MainContainerStyled>
      </MainStyled>
    </Wrapper>
  );
}

export default MainContent;
