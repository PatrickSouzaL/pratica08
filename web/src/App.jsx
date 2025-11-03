import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto' }}>
      <header style={{ marginBottom: 16 }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 700, fontSize: 18 }}>
          Meu Estudo de Caso (Web)
        </Link>
      </header>
      <Outlet />
    </div>
  )
}
