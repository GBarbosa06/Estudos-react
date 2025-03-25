import { useState } from 'react'
import './App.css'
import ListaDeNomes from './components/ListaDeNomes'
import Messages from './components/Messages';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const [pagLista, setPagLista] = useState(false);

  const [message, setMessage] = useState("")

  const MessageChange = (msg) => {
    setMessage(msg);
  }


  return (
    <div>
      <div>
        {pagLista && <ListaDeNomes />}
        <button onClick={() => setPagLista(!pagLista)}>Ativar/Desativar o resultado da aula lista</button>
      </div>
      <Messages msg={message} />
      <ChangeMessageState MessageChoose={MessageChange}/>
    </div>
  )
}

export default App