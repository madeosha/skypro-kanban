import Card, { allCards } from "../Card/Card"

function MainColumn({ name }) {
	
    return (
        <div className="main__column column">
			<div className="column__title">
				<p>{name}</p>
			</div>
			<Card allCards = {allCards.filter((card) => card.columnTitle === name)} />
		</div>
    )
}

export default MainColumn