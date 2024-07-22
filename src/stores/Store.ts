import { createContext, useContext } from "react";
import ProductStore from "./ProductsStore";
import ViewProductsStore from "./ViewProductsStore";
import WishlistStore from "./WishlistStore";
import CartStore from "./CartStore";

interface Store {
  productStore: ProductStore;
  viewProductsStore: ViewProductsStore;
  wishlistStore: WishlistStore;
  cartStore: CartStore;
}

export const store: Store = {
  productStore: new ProductStore(),
  viewProductsStore: new ViewProductsStore(),
  wishlistStore: new WishlistStore(),
  cartStore: new CartStore(),
};

export const StoreContext = createContext(store);
export function useStore() {
  return useContext(StoreContext);
}
