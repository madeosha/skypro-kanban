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
						<S.HeaderUser onClick={ToggleDropdown}>
            				Ivan Ivanov
          				</S.HeaderUser>
						{isOpen && (
							<S.HeaderPopUserSet id="user-set-target">
								<S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
								<S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
								<S.PopUserSetTheme>
									<p>Темная тема</p>
									<S.PopUserSetThemeInput type="checkbox" name="checkbox" />
								</S.PopUserSetTheme>
								<S.PopUserSetButton type="button">
									<S.PopUserSetButtonLink href="#popExit">Выйти</S.PopUserSetButtonLink></S.PopUserSetButton>
							</S.HeaderPopUserSet>
						)}
					</S.HeaderNav>					
				</S.HeaderBlock>
			</S.Container>			
		</S.Header>
    );
}

export default Header;