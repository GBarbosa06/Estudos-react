import { useState } from 'react'
import './App.css'
import ListaDeNomes from './ListaDeNomes'

function App() {
  const [pagLista, setPagLista] = useState(false);


  return (
    <div>
      {pagLista && <ListaDeNomes />}
      <button onClick={() => setPagLista(!pagLista)}>Ativar/Desativar o resultado da aula lista</button>
    </div>
  )
}

export default App