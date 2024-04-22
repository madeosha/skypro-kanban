import { useEffect, useState } from "react";
import MainColumn from "../MainColumn/MainColumn";
import {
  MainBlock,
  MainContainerStyled,
  MainContentStyled,
  MainStyled,
} from "./MainContent.styled";
import Header from "../Header/Header";
import { Loading, Wrapper } from "../../styles/Common.styled";
import { getToDos } from "../../api.js";
import { useUserContext } from "../../contexts/hooks/useUser"

//Колонки
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContent() {
  const { user } = useUserContext();
  //Создание переменной состояния
  const [cards, setCards] = useState([]);
  //Функция добавления новой задачи
  const onCardAdd = () => {
    const newCard = {
      _id: cards.length + 1,
      topic: "Новая задача",
      title: "Новая задача",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  //Эмуляция загрузки карточки
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getToDos({ token: user.token })
      .then((cards) => {
        setCards(cards.tasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <Wrapper>
      <MainStyled>
        <Header onCardAdd={onCardAdd} user={user.name} />
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
