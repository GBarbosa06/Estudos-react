import './App.css'

import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  const pageChange = () => {
    navigate('/pag2');
  }
  return (
    <div>
      Página principal
      <button onClick={pageChange}>Pagina 2</button>
    </div>
  )
}

export default App
