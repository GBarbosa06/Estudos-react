import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom"

import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const {documents: posts, loading, error} = useFetchDocuments("posts", null, uid)


  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.nopost}>
          <Link to="/posts/create" className="btn">Criar primeiro post</Link>
        </div>
      ) : (
        <div>
          
        </div>
      )}
      {posts && posts.map((post) => <h1 key={post.title}>{post.title}</h1>)}
    </div>
  )
}

export default Dashboard