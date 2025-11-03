import { getAllProducts } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

export default function Products() {
  const products = getAllProducts();
  return (
    <section>
      <h2>Produtos</h2>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}


