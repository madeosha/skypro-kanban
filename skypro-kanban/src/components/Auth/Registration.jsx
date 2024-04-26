import { Link } from "react-router-dom";
import { routeObj } from "../../lib/const";
import { Wrapper } from "../../styles/Common.styled";
import * as S from "../Auth/Login.styled";
import { authToDos } from "../../api";
import { useState } from "react";
import { useUserContext } from "../../contexts/hooks/useUser";

function Registration() {
  const {userLogin} = useUserContext();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAuthTodoClick = async () => {
    try {
    await authToDos(name, login, password).then((responseData) => {
      userLogin(responseData.user);
    })} catch(err) {setError(err.message)}
  };

  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin>
              <S.ModalInput
                onSubmit={handleSubmit}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
              />
              <S.ModalInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              <S.ModalBtnEnter onClick={handleAuthTodoClick}>
                <Link>Зарегистрироваться</Link>{" "}
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
              {error && (<p style={{color: "red"}}>{error}</p>) }
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={routeObj.LOGIN} error="error">Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </Wrapper>
  );
}

export default Registration;
