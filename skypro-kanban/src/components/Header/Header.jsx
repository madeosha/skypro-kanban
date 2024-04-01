import { useState } from "react";

import {
  ContainerStyled,
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderNav,
  HeaderPopUserSet,
  HeaderStyled,
  HeaderUser,
  PopUserSetButton,
  PopUserSetButtonLink,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  PopUserSetThemeInput,
} from "./Header.styled";

function Header({ onCardAdd }) {
  //Создание переменной состояния
  const [isOpen, setIsOpen] = useState(false);
  //Функция, переключающая состояние (выпадение модального окна)
  const ToggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew" onClick={onCardAdd}>
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser onClick={ToggleDropdown}>Ivan Ivanov</HeaderUser>
            {isOpen && (
              <HeaderPopUserSet id="user-set-target">
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <PopUserSetTheme>
                  <p>Темная тема</p>
                  <PopUserSetThemeInput type="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <PopUserSetButton type="button">
                  <PopUserSetButtonLink href="#popExit">
                    Выйти
                  </PopUserSetButtonLink>
                </PopUserSetButton>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </ContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
