import { Link, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { routeObj } from "../../lib/const";
import * as S from "../../components/PopBrowse/PopBrowse.styled";

function PopBrowse() {
  const { id } = useParams();

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>
              <S.PopBrowseCategoriesTheme>
                <p>Web Design</p>
              </S.PopBrowseCategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusP>Статус</S.StatusP>
              <S.StatusThemes>
                <S.StatusThemeHide>
                  <p>Без статуса</p>
                </S.StatusThemeHide>
                <S.StatusThemeGray>
                  <p>Нужно сделать</p>
                </S.StatusThemeGray>
                <S.StatusThemeHide>
                  <p>В работе</p>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <p>Тестирование</p>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <p>Готово</p>
                </S.StatusThemeHide>
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.PopBrowseLabelTtl htmlFor="textArea01">
                    Описание задачи
                  </S.PopBrowseLabelTtl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>

              <Calendar />
              
            </S.PopBrowseWrap>
            <S.ThemeDownCategories>
              <S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
              <S.PopBrowseCategoriesTheme>
                <p>Web Design</p>
              </S.PopBrowseCategoriesTheme>
            </S.ThemeDownCategories>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowseEdit>
                  <a href="#">Редактировать задачу</a>
                </S.BtnBrowseEdit>
                <S.BtnBrowseEdit>
                  <a href="#">Удалить задачу</a>
                </S.BtnBrowseEdit>
              </S.BtnGroup>
              <S.BtnBrowseClose>
                <Link to={routeObj.MAIN}>Закрыть</Link>
              </S.BtnBrowseClose>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
