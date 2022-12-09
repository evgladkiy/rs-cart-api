export type Product = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly price: number,
  readonly weight: number,
  readonly img: string;
};


export type CartItem = {
  product: Product,
  count: number,
}

export type Cart = {
  id: string,
  items: CartItem[],
}
