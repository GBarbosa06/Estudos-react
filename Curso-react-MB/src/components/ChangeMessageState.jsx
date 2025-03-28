import React from 'react'

const ChangeMessageState = ({MessageChoose}) => {
    const messages = ["Oi", "Olá", "Tudo bem?"]
  return (
    <div>
        <button onClick={() => MessageChoose(messages[0])}>1</button>
        <button onClick={() => MessageChoose(messages[1])}>2</button>
        <button onClick={() => MessageChoose(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState