export interface CartItem {
  id: string;
  name: string;
  price: number;
  mrp: number;
  image: string;
  quantity: number;
  unit: string;
}

const CART_KEY = 'freshcart_cart';

export function getCart(): CartItem[] {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: getCartCount() } }));
}

export function addToCart(item: Omit<CartItem, 'quantity'>): void {
  const cart = getCart();
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  saveCart(cart);
}

export function updateQuantity(id: string, quantity: number): void {
  const cart = getCart();
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find(c => c.id === id);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

export function removeFromCart(id: string): void {
  const cart = getCart().filter(c => c.id !== id);
  saveCart(cart);
}

export function getCartCount(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartTotal(): number {
  return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: 0 } }));
}
