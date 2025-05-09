import styles from "./Home.module.css";

import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts")

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(query){
      return Navigate("/search?q=" + query)
    }
  }

  return (
    <div className="styles.home">
      <h1>Veja os posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input 
          type="text" 
          placeholder="Ou busque por tags"
          onChange={(e) => setQuery(e.target.value)}  
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {posts && posts.map((post) => <PostDetail post={post} key={post.id}/> )}
        {posts && posts.length === 0 && <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">Criar primeiro post</Link>
        </div>}
      </div>
    </div>
  )
}

export default Home