import Card from "../Card/Card"

function MainColumn() {
    return (
        <div className="main__column column">
			<div className="column__title">
				<p>Без статуса</p>
			</div>
			<div className="cards">
				<Card />
				<Card />
				<Card />
    		</div>
		</div>
    )
}

export default MainColumn