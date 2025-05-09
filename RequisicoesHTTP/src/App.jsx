import './App.css'

import { useState, useEffect } from 'react'
import { useFetch } from './Hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const {data: itens, httpConfig, loading, error} = useFetch(url);
  const [products, setProducts] = useState(itens);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

/*   useEffect(() => {
    const fetchData = async () => {
    const res = await fetch (url);

    const data = await res.json();

    setProducts(data);
    }
    fetchData();
  }, []) */

  const handleDelete = (id) => {
    httpConfig(id, "DELETE")
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const product = {
      name,
      price,
    }
    /* const res = await fetch(url, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    //atualizar dinamicamente caso necessário na tela:
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]); */

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }


  return (
    <div className='App'>
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {itens && itens.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price} <button onClick={() => handleDelete(product.id)}>Deletar</button>
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
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar produto" />}
          
        </form>
      </div>
    </div>
  )
}

export default App
