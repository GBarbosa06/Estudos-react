import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Products = () => {
    const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
        <h1>Products</h1>
        <h2>Valor do contador: {counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Clique aqui</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
  )
}

export default Products