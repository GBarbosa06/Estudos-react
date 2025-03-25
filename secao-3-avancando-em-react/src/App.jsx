import { useState } from 'react'
import './App.css'
import ListaDeNomes from './components/ListaDeNomes'
import Messages from './components/Messages';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/userDetails';

function App() {
  //states usados para alteração da visualização dos exercícios
  const [pagLista, setPagLista] = useState(false);
  const [pagMessage, setPagMessage] = useState(false);
  const [pagUserDetails, setPagUserDetails] = useState(false);


  //States usados para realização dos exercícios
  const [message, setMessage] = useState("")

  const MessageChange = (msg) => {
    setMessage(msg);
  }

  return (
    <div>
      <div>
        {pagLista && <ListaDeNomes />}
        <button onClick={() => setPagLista(!pagLista)}>Ativar/Desativar o resultado da aula lista de nomes</button>
      </div>

      <div>
        {pagMessage && <Messages msg={message} />}
        {pagMessage && <ChangeMessageState MessageChoose={MessageChange}/>}
        <button onClick={() => setPagMessage(!pagMessage)}>Ativar/Desativar o resultado da aula messages (state lift)</button>
      </div>

      <div>
        {pagUserDetails && <UserDetails />}
        <button onClick={() => setPagUserDetails(!pagUserDetails)}>Ativar/Desativar o resultado do desafio de detalhes do usuários e aptidão para a CNH</button>
      </div>
    </div>
  )
}

export default App