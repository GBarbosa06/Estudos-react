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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  //começa o jogo
  const startGame = () =>{
    //pick word and category
      //random category
      const categories = Object.keys(words);
      const category = categories[Math.floor(Math.random() * categories.length)]
  
      //random word
      const word = words[category][Math.floor(Math.random() * words[category].length)]


    const wordLetters = (word.toUpperCase().split(""));

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name)

  }



  //processa o input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //recomeça o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
      
    </div>
  )
}

export default App
