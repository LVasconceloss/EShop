import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = getProductById(id);

  if (!product) return <p>Produto não encontrado.</p>;
  const images = product.images?.length ? product.images : (product.image ? [product.image] : []);

  return (
    <section className="productDetail">
      <div>
        <img
          src={images[0]}
          alt={product.name}
          className="productDetail__image"
          onError={(e) => { e.currentTarget.src = '/images/placeholder.svg'; }}
        />
        {images.length > 1 && (
          <div className="thumbs">
            {images.slice(1).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`thumb ${idx+1}`}
                className="thumbs__img"
                onError={(e) => { e.currentTarget.src = '/images/placeholder.svg'; }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="productDetail__info">
        <h2>{product.name}</h2>
        <p className="productDetail__price">R$ {product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button className="btn" onClick={() => dispatch({ type: 'ADD', product })}>Adicionar ao carrinho</button>
      </div>
    </section>
  );
}


