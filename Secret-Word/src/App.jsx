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
  const guessesNumber = 5
  const [gameStage, setGameStage] = useState(stages[0].name)

  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesNumber);
  const [score, setScore] = useState(0);

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

    clearAllLetters();

    setGameStage(stages[1].name)

  }



  //processa o input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toUpperCase();

    //check if letter has already been used
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    //push letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter])
    }
    else{
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearAllLetters = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //check loss condition
  useEffect(() => {
    if(guesses <= 0 && gameStage === stages[1].name){
      setGameStage(stages[2].name)

    }
  }, [guesses])

  //check win condition
  useEffect(() => {
    if (letters.length === 0) return;

    const uniqueLetters = [... new Set(letters)];

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore + 100)
      startGame();
    }
  }, [guessedLetters, letters])

  //recomeça o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesNumber);

    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen 
      startGame={startGame} 
      />}

      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory} 
      letters={letters} 
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters} 
      guesses={guesses} 
      score={score} 
      />}

      {gameStage === 'end' && <GameOver 
      retry={retry} 
      score={score} 
      />}
      
    </div>
  )
}

export default App
