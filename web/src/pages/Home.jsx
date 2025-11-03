import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

export default function Home() {
  return (
    <div>
      <h1>Produtos</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {PRODUCTS.map((p) => (
          <li key={p.id} style={{ margin: '12px 0', padding: 12, border: '1px solid #eee', borderRadius: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>{p.name}</strong>
              <span>R$ {p.price.toFixed(2)}</span>
            </div>
            <Link to={`/product/${p.id}`} style={{ display: 'inline-block', marginTop: 8 }}>
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
