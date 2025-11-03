import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

export default function ProductDetails() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <div>
        <p>Produto não encontrado.</p>
        <Link to="/">Voltar</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
      <p><strong>Descrição:</strong> {product.description}</p>
      <Link to="/" style={{ marginTop: 12, display: 'inline-block' }}>Voltar</Link>
    </div>
  )
}
