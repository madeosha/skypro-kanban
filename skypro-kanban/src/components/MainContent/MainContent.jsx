import MainColumn from "../MainColumn/MainColumn";
import {
  MainBlock,
  MainContainerStyled,
  MainContentStyled,
  MainStyled,
} from "./MainContent.styled";

//Колонки
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainContent({ cards }) {
  return (
    <MainStyled>
      <MainContainerStyled>
        <MainBlock>
          <MainContentStyled>
            {statusList.map((status) => {
              return (
                <MainColumn
                  key={status}
                  title={status}
                  allCards={cards.filter((card) => card.status === status)}
                />
              );
            })}
          </MainContentStyled>
        </MainBlock>
      </MainContainerStyled>
    </MainStyled>
  );
}

export default MainContent;
