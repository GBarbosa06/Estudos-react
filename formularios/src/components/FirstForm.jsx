import React from 'react'

const FirstForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' placeholder='Digite seu nome' />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default FirstForm