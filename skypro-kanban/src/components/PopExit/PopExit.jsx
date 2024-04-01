import {
  PopExitBlock,
  PopExitContainer,
  PopExitExitNo,
  PopExitExitYes,
  PopExitFormGroup,
  PopExitStyled,
  PopExitTtl,
} from "./PopExitStyled";

function PopExit() {
  return (
    <PopExitStyled id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitExitYes>
              <PopExitExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyled>
  );
}

export default PopExit;
