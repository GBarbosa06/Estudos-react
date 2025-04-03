import "./GameOver.css"

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>A sua pontuação foi: {score}</h2>
      <button onClick={retry}>Recomeçar Jogo</button>  
      </div>
  )
}

export default GameOver