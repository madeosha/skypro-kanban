import MainColumn from "../MainColumn/MainColumn";

import * as S from './Main.styled'

//Колонки
const statusList = [
	"Без статуса",
	"Нужно сделать",
	"В работе",
	"Тестирование",
	"Готово",
  ];

function MainContent({ cards }) {
    return (
        <S.Main>
			<S.MainContainer>
				<S.MainBlock>
					<S.MainContent>
					{statusList.map((status) => {
            			return (
              				<MainColumn
                				key={status}
                				title={status}
                				allCards={cards.filter((card) => card.status === status)}
              				/>
            			);
          			})}					
					</S.MainContent>
				</S.MainBlock>
			</S.MainContainer>
		</S.Main>
    );
}

export default MainContent;