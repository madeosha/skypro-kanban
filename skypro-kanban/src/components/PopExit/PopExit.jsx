import { PopExitBlock, PopExitContainer, PopExitFormGroup, PopExitStyled, PopExitTtl } from "./PopExitStyled";

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
							<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
							<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
						</PopExitFormGroup>
					</form>
				</PopExitBlock>
			</PopExitContainer>
		</PopExitStyled>
    )
} 

export default PopExit;