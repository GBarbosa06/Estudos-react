import { li } from 'motion/react-client';
import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  useEffect(() => {
    const fetchData = async () => {
    const res = await fetch (url);

    const data = await res.json();

    setProducts(data);
    }
    fetchData();
  }, [])

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const product = {
      name,
      price,
    }
    const res = await fetch(url, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
  }



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
      <div className="add-product">
        <form onSubmit={handleSubmit}>
        <label>
            Nome do produto:
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar produto" />
          
        </form>
      </div>
    </div>
  )
}

export default App
