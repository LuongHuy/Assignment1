import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],

  addProduct: (product) =>
    set((state) => {
      let newCart;

      if (state.cart.some((item) => item.id === product.id)) {
        newCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newCart = [...state.cart, { ...product, quantity: 1 }];
      }

      return { cart: newCart };
    }),

  subtractProduct: (product) =>
    set((state) => {
      let newCart;
      const _item = state.cart.find((item) => item.id === product.id);

      if (!!_item) {
        if (_item.quantity > 1) {
          newCart = state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        } else {
          newCart = [...state.cart].filter((item) => item.id !== product.id);
        }
      } else {
        newCart = state.cart;
      }

      return { cart: newCart };
    }),

  emptyCart: () => set({ cart: [] }),
}));

export const useProduct = create((set) => ({
  products: [],

  setProduct: (products) => set({ products }),
}));
