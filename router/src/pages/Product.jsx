import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
  const { id } = useParams()
    const url = "http://localhost:3000/products/" + id;
    const { data: product, loading, error } = useFetch(url)

    console.log(product)

    return (
    <div>
        <p>ID do produto: {id}</p>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <p>R$ {product.price}</p>
                <p>Descrição: {product.description}</p>
            </div>
        )}
    </div>
  )
}

export default Product