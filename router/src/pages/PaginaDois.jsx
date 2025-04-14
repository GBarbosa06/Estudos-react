import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaginaDois = () => {
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/');
    }
  return (
    <div>
        PaginaDois
        <button onClick={changePage}>Pagina 1</button>
    </div>
  )
}

export default PaginaDois