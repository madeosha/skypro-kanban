import MainColumn from "../MainColumn/MainColumn"

function MainContent() {
    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						<MainColumn />
					</div>
				</div>
			</div>
		</main>
    )
}

export default MainContent