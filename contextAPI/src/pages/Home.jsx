//import {useContext} from 'react'
//import {CounterContext} from '../context/CounterContext'

import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {
    //const {counter, setCounter} = useContext(CounterContext)
    const {counter, setCounter} = useCounterContext()

  return (
    <div>
        <h1>Home</h1>
        <h2>Valor do contador: {counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Clique aqui</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>

  )
}

export default Home