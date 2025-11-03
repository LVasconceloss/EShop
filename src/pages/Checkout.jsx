import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Checkout() {
  const { totals, dispatch } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'CLEAR' });
    navigate('/', { state: { orderSuccess: true, name } });
  }

  return (
    <section className="checkout">
      <h2>Finalizar compra</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nome
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          E-mail
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Endereço
          <input value={address} onChange={e => setAddress(e.target.value)} required />
        </label>
        <div className="checkout__summary">
          <span>Total</span>
          <strong>R$ {totals.total.toFixed(2)}</strong>
        </div>
        <button className="btn btn--lg" type="submit">Confirmar pedido</button>
      </form>
    </section>
  );
}



