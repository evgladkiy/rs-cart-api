import { Cart, CartItem } from '../models';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Cart): number {
  return cart ? cart.items.reduce((acc: number, { product: { price }, count }: CartItem) => {
    return acc += (price * 100) * count / 100 ;
  }, 0) : 0;
}
