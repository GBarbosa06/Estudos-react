import { li } from 'motion/react-client';
import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch (url);

    const data = await res.json();

    setProducts(data);
  }
  fetchData();
}, [])




  return (
    <div className='App'>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
