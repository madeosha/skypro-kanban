import MainColumn from "../MainColumn/MainColumn"

function MainContent() {
    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						<MainColumn name={"Без статуса"} />
						<MainColumn name={"Нужно сделать"} />
						<MainColumn name={"В работе"} />
						<MainColumn name={"Тестирование"} />
						<MainColumn name={"Готово"} />						
					</div>
				</div>
			</div>
		</main>
    )
}

export default MainContent