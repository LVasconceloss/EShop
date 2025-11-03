import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Header() {
  const { totals } = useCart();
  return (
    <header className="header">
      <div className="container header__content">
        <Link to="/" className="logo">EShop</Link>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Início</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Produtos</NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
            Carrinho ({totals.count})
          </NavLink>
          <NavLink to="/sell" className={({ isActive }) => (isActive ? 'active' : '')}>Anunciar</NavLink>
        </nav>
      </div>
    </header>
  );
}


