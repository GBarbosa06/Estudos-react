//CSS
import './App.css'

//Hooks
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from './data/words'

//Componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/Gameover'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)

  const [words] = useState(wordsList);

  const startGame = () =>{
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[3].name)
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver />}
      
    </div>
  )
}

export default App
