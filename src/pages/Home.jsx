import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>Bem-vindo à EShop</h1>
        <p>Os melhores produtos com os melhores preços.</p>
        <Link to="/products" className="btn btn--lg">Ver produtos</Link>
      </div>
    </section>
  );
}



