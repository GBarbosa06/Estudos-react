import { useParams } from "react-router-dom"

const Product = () => {
  const { id } = useParams()

    return (
    <div>
        <p>ID do produto: {id}</p>
    </div>
  )
}

export default Product