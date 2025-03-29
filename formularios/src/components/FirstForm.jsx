import React, { useState } from 'react'

const FirstForm = ({user}) => {
    
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Enviando");
        console.log(name, email);
        setName("");
        setEmail("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span>Digite seu nome: </span>
                    <input type="text" placeholder='Nome' value={name} onChange={handleName} />
                </label>
            </div>
            <div>
                <label>
                    <span>Digite seu email: </span>
                    <input type="email" placeholder='E-mail' value={email} onChange={handleEmail} />
                </label>
            </div>
        <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default FirstForm