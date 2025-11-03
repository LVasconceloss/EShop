import { loadUserProducts } from './userProducts.js';

export const products = [
  { id: '1', name: 'CAMISA', price: 59.9, images: ['/images/CAMISA.png'], description: 'Camiseta confortável 100% algodão.' },
  { id: '2', name: 'BONE', price: 39.9, images: ['/images/BONE.png'], description: 'Boné estiloso para qualquer ocasião.' },
  { id: '3', name: 'MOCHILA', price: 149.9, images: ['/images/MOCHILA.png'], description: 'Mochila resistente com vários compartimentos.' },
  { id: '4', name: 'GARRAFA', price: 89.9, images: ['/images/GARRAFA.png'], description: 'Mantém a bebida fria ou quente por horas.' },
];

export function getProductById(id) {
  return getAllProducts().find(p => p.id === id);
}

export function getAllProducts() {
  const user = loadUserProducts();
  return [
    ...user,
    ...products,
  ];
}


