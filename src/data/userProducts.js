const STORAGE_KEY = 'eshop_user_products_v1';

export function loadUserProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUserProducts(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {}
}

export function addUserProduct(product) {
  const list = loadUserProducts();
  list.unshift(product);
  saveUserProducts(list);
  return product;
}



