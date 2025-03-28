import React from 'react'

const UserDetails = () => {
    const users = [
        {id: 1, name: "Guilherme", job: "Engenheiro de Software", age: 18},
        {id: 2, name: "Anderson", job: "Engenheiro Civil", age: 47},
        {id: 3, name: "Emanuele", job: "Estudante", age: 11},
    ]

  return (
    <div>
        {users.map((user) => (
            <div>
                <h2>Nome: {user.name}</h2> 
                <p>Trabalho: {user.job}</p> 
                <p>Idade: {user.age}</p>
                <p>Apto à CNH? {user.age >=18 ? "Sim" : "Não. É menor de idade"}</p>
            </div>
        ))}
    </div>
  )
}

export default UserDetails