import Card from "../Card/Card";

function MainColumn({ title, allCards }) {
    return (
        <div className="main__column column">
			<div className="column__title">
				<p>{title}</p>
			</div>
			{allCards.map((card) => (
       			<Card
       				title={card.title}
       				theme={card.theme}
       				date={card.date}
      				style={card.style}
       				key={card.id}
       			/>
      		))}
		</div>
    );
}

export default MainColumn;