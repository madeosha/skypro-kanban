import Card from "../Card/Card";
import {
  ColumnTitle,
  ColumnTitleText,
  MainColumnStyled,
} from "./MainColumn.styled";

function MainColumn({ title, allCards }) {
  return (
    <MainColumnStyled>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      {allCards.map((card) => (
        <Card
          title={card.title}
          theme={card.topic}
          date={card.date}
          id={card._id}
          key={card._id}
        />
      ))}
    </MainColumnStyled>
  );
}

export default MainColumn;
