import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { state, dispatch, totals } = useCart();
  const navigate = useNavigate();

  if (state.items.length === 0) {
    return (
      <section>
        <h2>Seu carrinho está vazio</h2>
        <Link className="btn" to="/products">Começar a comprar</Link>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Carrinho</h2>
      <ul className="cart__list">
        {state.items.map(item => (
          <li key={item.id} className="cart__item">
            <img src={item.image} alt={item.name} />
            <div className="cart__info">
              <strong>{item.name}</strong>
              <span>R$ {item.price.toFixed(2)}</span>
              <div className="cart__controls">
                <label>
                  Qtde:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => dispatch({ type: 'UPDATE', id: item.id, quantity: Number(e.target.value) })}
                  />
                </label>
                <button className="link" onClick={() => dispatch({ type: 'REMOVE', id: item.id })}>Remover</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart__summary">
        <div>
          <div className="row"><span>Subtotal</span><strong>R$ {totals.subtotal.toFixed(2)}</strong></div>
          <div className="row"><span>Frete</span><strong>R$ {totals.shipping.toFixed(2)}</strong></div>
          <div className="row total"><span>Total</span><strong>R$ {totals.total.toFixed(2)}</strong></div>
        </div>
        <div className="cart__actions">
          <button className="btn btn--ghost" onClick={() => dispatch({ type: 'CLEAR' })}>Esvaziar carrinho</button>
          <button className="btn" onClick={() => navigate('/checkout')}>Finalizar compra</button>
        </div>
      </div>
    </section>
  );
}



