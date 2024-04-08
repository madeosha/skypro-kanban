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
          theme={card.theme}
          date={card.date}
          style={card.style}
          key={card.id}
        />
      ))}
    </MainColumnStyled>
  );
}

export default MainColumn;
