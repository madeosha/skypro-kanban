export const allCards = [
    {
    cardId: 1,
    cardName: "Web Design",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Без статуса",
    style: "card__theme _orange"
    },
    {
    cardId: 2,
    cardName: "Research",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Без статуса",
    style: "card__theme _green"
    },
    {
    cardId: 3,
    cardName: "Web Design",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Без статуса",
    style: "card__theme _orange"
    },
    {
    cardId: 4,
    cardName: "Copywriting",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Без статуса",
    style: "card__theme _purple"
    },
    {
    cardId: 5,
    cardName: "Web Design",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Без статуса",
    style: "card__theme _orange"
    },
    { 
    cardId: 6,
    cardName: "Research",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Нужно сделать",
    style: "card__theme _green"
    },
    { 
    cardId: 7,
    cardName: "Research",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "В работе",
    style: "card__theme _green"
    },
    { 
    cardId: 8,
    cardName: "Copywriting",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "В работе",
    style: "card__theme _purple"
    },
    { 
    cardId: 9,
    cardName: "Web Design",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "В работе",
    style: "card__theme _orange"
    },
    { 
    cardId: 10,
    cardName: "Research",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Тестирование",
    style: "card__theme _green"
    },
    { 
    cardId: 11,
    cardName: "Research",
    cardTitle: "Название задачи",
    cardDate: "30.10.23",
    columnTitle: "Готово",
    style: "card__theme _green"
    }
]

function Card({ allCards }) {
	const cardItems = allCards.map(card =>
		<div key = {card.cardId} className="cards__item">
            		<div className="cards__card card">
                		<div className="card__group">
                    		<div className="card__theme">
                        		<p className={card.style}>{card.cardName}</p>
                    		</div>
                    		<a href="#popBrowse" target="_self">
                        		<div className="card__btn">
                            		<div></div>
                            		<div></div>
                            		<div></div>
                        		</div>
                    		</a>
                		</div>
                		<div className="card__content">
                    		<a href="" target="_blank">
                        		<h3 className="card__title">{card.cardTitle}</h3>
                    		</a>
                    		<div className="card__date">
                        		<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            		<g clipPath="url(#clip0_1_415)">
                                		<path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                                		<path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                            		</g>
                            		<defs>
                                		<clipPath id="clip0_1_415">
                                    		<rect width="13" height="13" fill="white" />
                                		</clipPath>
                            		</defs>
                        		</svg>
                        		<p>{card.cardDate}</p>
                    		</div>
                		</div>
            		</div>
        			</div>
	);
    return <div className="cards">{cardItems}</div>
	
}

export default Card;