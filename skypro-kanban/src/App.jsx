import { useState } from 'react'
import './App.css'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
		    {/*<!-- pop-up start-->*/}
		    <PopExit />
		    <PopNewCard />
		    <PopBrowse />
		    {/*<!-- pop-up end-->*/}
		    <Header />
		    <MainContent />
      </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
