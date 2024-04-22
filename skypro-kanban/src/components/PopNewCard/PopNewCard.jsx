import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import * as S from "../PopNewCard/PopNewCard.styled";
import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";

function PopNewCard() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
  const [selected, setSelected] = useState();

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>
              {" "}
              <Link to={routeObj.MAIN}>&#10006;</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
                  <S.FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemes>
                <S.CategoriesThemeColor>
                  <div className="categories__theme _orange _active-category">
                    <p className="_orange">Web Design</p>
                  </div>
                  <div className="categories__theme _green">
                    <p className="_green">Research</p>
                  </div>
                  <div className="categories__theme _purple">
                    <p className="_purple">Copywriting</p>
                  </div>
                </S.CategoriesThemeColor>
              </S.CategoriesThemes>
            </S.Categories>
            <S.FormNewCreate>Создать задачу</S.FormNewCreate>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
