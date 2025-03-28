import React, { useState } from 'react'

const ListaDeNomes = () => {
    const [list, setList] = useState([
        { id:1, nome: "Guilherme"},
        { id:2, nome: "Luana"},
        { id:3, nome: "jão"},
    
      ]);
    
      const deleteItem = () => {
        const randomNumber = Math.floor(Math.random() * 4);
    
        setList((prevList) => {
          return prevList.filter((user) =>  randomNumber !== user.id)
        })
      };
      
      return (
        <div>
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.nome}</li>
            ))}
          </ul>
          <button onClick={deleteItem}>Delete random item</button>
        </div>
      )
}

export default ListaDeNomes