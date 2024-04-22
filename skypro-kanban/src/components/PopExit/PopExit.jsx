import {
  PopExitBlock,
  PopExitContainer,
  PopExitExitNo,
  PopExitExitYes,
  PopExitFormGroup,
  PopExitStyled,
  PopExitTtl,
} from "./PopExitStyled";
import { routeObj } from "../../lib/const";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/hooks/useUser";

function PopExit() {
  const { logout } = useUserContext();
  return (
    <PopExitStyled id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes onClick={logout}>
                <Link to={routeObj.LOGIN}>Да, выйти</Link>
              </PopExitExitYes>
              <PopExitExitNo id="exitNo">
                <Link to={routeObj.MAIN}>Нет, остаться </Link>
              </PopExitExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
}

export default PopExit;
