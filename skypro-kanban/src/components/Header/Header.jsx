import { useState } from "react";
import {
  ContainerStyled,
  HeaderBlock,
  HeaderBtnMainNew,
  HeaderLogo,
  HeaderNav,
  HeaderPopUserSet,
  HeaderStyled,
  HeaderUser,
  PopUserSetButton,
  PopUserSetMail,
  PopUserSetName,
} from "./Header.styled";
import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";
import { useUserContext } from "../../contexts/hooks/useUser";

function Header() {
  const { user } = useUserContext();
  //Создание переменной состояния
  const [isOpen, setIsOpen] = useState(false);
  //Функция, переключающая состояние (выпадение модального окна)
  const ToggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderBlock>
          <HeaderLogo>
            <Link to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew>
              <Link to={routeObj.NEW_CARD}>Создать новую задачу</Link>
            </HeaderBtnMainNew>
            <HeaderUser onClick={ToggleDropdown}>{user.name}</HeaderUser>
            {isOpen && (
              <HeaderPopUserSet>
                <PopUserSetName>{user.name}</PopUserSetName>
                <PopUserSetMail>{user.login}</PopUserSetMail>
                <PopUserSetButton>
                  <Link to={routeObj.EXIT}>Выйти</Link>
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
