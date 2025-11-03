import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const cover = product.images?.[0] || product.image;
  return (
    <div className="card">
      <Link to={`/products/${product.id}`} className="card__imageWrap">
        <img
          src={cover}
          alt={product.name}
          className="card__image"
          onError={(e) => { e.currentTarget.src = '/images/placeholder.svg'; }}
        />
      </Link>
      <div className="card__body">
        <h3 className="card__title">{product.name}</h3>
        <p className="card__price">R$ {product.price.toFixed(2)}</p>
        <div className="card__actions">
          <Link className="btn btn--ghost" to={`/products/${product.id}`}>Detalhes</Link>
          <button className="btn" onClick={() => dispatch({ type: 'ADD', product })}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}


