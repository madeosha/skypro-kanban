import { Link, useNavigate } from "react-router-dom";
import { routeObj } from "../../lib/const";
import { Wrapper } from "../../styles/Common.styled";
import * as S from "../Auth/Login.styled";

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const login = () => {
    setIsAuth(true);
    navigate(routeObj.MAIN);
  };
  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin id="formLogIn" action="#">
              <S.ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter id="btnEnter" type="button" onClick={login}>
                Войти
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routeObj.REGISTER}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </Wrapper>
  );
}

export default Login;
