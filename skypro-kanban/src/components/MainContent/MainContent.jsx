import MainColumn from "../MainColumn/MainColumn";

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
        <main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
					{statusList.map((status) => {
            			return (
              				<MainColumn
                				key={status}
                				title={status}
                				allCards={cards.filter((card) => card.status === status)}
              				/>
            			);
          			})}					
					</div>
				</div>
			</div>
		</main>
    );
}

export default MainContent;