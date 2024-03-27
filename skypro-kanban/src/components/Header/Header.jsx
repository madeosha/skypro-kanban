import * as S from './Header.styled';

import { useState } from "react";

function Header({ onCardAdd }) {
	//Создание переменной состояния
	const [isOpen, setIsOpen] = useState(false); 
	//Функция, переключающая состояние (выпадение модального окна)
  	const ToggleDropdown = () => setIsOpen((prevState) => !prevState); 

    return (
        <S.Header>
			<S.Container>
				<S.HeaderBlock>
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="/logo.png" alt="logo" /></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="/logo_dark.png" alt="logo" /></a>
					</div>
					<S.HeaderNav>
						<S.HeaderBtnMainNew id="btnMainNew" onClick={onCardAdd}>
							Создать новую задачу
						</S.HeaderBtnMainNew>
						<a onClick={ToggleDropdown} className="header__user _hover02">
            				Ivan Ivanov
          				</a>
						{isOpen && (
							<div className="header__pop-user-set pop-user-set" id="user-set-target">
								<p className="pop-user-set__name">Ivan Ivanov</p>
								<p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
								<div className="pop-user-set__theme">
									<p>Темная тема</p>
									<input type="checkbox" className="checkbox" name="checkbox" />
								</div>
								<button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
							</div>
						)}
					</S.HeaderNav>					
				</S.HeaderBlock>
			</S.Container>			
		</S.Header>
    );
}

export default Header;