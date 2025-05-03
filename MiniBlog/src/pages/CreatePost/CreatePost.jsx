import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState(null);

  const { user } = useAuthValue();

  const handleSubmit = (e) => {

  }

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
        <button className="btn">Criar post</button>
        <button className={`${styles.btnCancel} btn`}>Cancelar</button>
        {formError && <p className="error">{formError}</p>}
        <p>Depois de criar o post, você poderá editá-lo ou excluí-lo.</p>
        <p>Você pode visualizar o post na página inicial.</p>
        <p>Se você não estiver satisfeito com o post, poderá excluí-lo a qualquer momento.</p>
      </form>
    </div>
  )
}

export default CreatePost