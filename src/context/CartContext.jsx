import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, quantity = 1 } = action;
      const existing = state.items.find(i => i.id === product.id);
      const items = existing
        ? state.items.map(i => (i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i))
        : [...state.items, { ...product, quantity }];
      return { ...state, items };
    }
    case 'REMOVE': {
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    }
    case 'UPDATE': {
      const { id, quantity } = action;
      return { ...state, items: state.items.map(i => (i.id === id ? { ...i, quantity } : i)) };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    case 'LOAD':
      return action.state;
    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('eshop_cart');
      if (raw) {
        dispatch({ type: 'LOAD', state: JSON.parse(raw) });
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('eshop_cart', JSON.stringify(state));
    } catch {}
  }, [state]);

  const totals = useMemo(() => {
    const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return {
      subtotal,
      shipping: state.items.length > 0 ? 19.9 : 0,
      total: state.items.length > 0 ? subtotal + 19.9 : 0,
      count: state.items.reduce((n, i) => n + i.quantity, 0),
    };
  }, [state]);

  const value = useMemo(
    () => ({ state, dispatch, totals }),
    [state, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}



