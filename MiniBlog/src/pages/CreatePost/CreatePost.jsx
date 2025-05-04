import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState(null);

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //URL validation:

    //tags array

    //check values

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    })

    //redirect to home page
    
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que você quiser e compartilhe com o mundo!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input 
            type="text" 
            name="title" 
            required 
            placeholder="Pense em um título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input 
            type="text" 
            name="image" 
            required 
            placeholder="Insira uma imagem que represente o post"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea 
            name="body" 
            required 
            placeholder="Insira o conteúdo do post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input 
            type="text" 
            name="tags" 
            required 
            placeholder="Insira as tags separadas por vírgula"
            value={tags}
            onChange={(e) => setTags(e.target.value.split(","))}
          />
        </label>

        {!response.loading && <button className="btn">Criar post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
        
      </form>
    </div>
  )
}

export default CreatePost