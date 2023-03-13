interface Product {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  title: string;
  total: number;
}

interface Cart {
  discountedTotal: number;
  id: number;
  products: Product[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

interface Props {
  data: { carts: Cart[]; limit: number; skip: number; total: number };
}

export type { Product, Cart, Props };
