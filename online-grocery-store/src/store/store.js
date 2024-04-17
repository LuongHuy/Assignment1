import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],

  addProduct: (product, quantity) =>
    set((state) => {
      let newCart;

      if (state.cart.some((item) => item.id === product.id)) {
        newCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        newCart = [...state.cart, { ...product, quantity }];
      }

      return { cart: newCart };
    }),

  subtractProduct: (id) =>
    set((state) => {
      let newCart;
      const _item = state.cart.find((item) => item.id === id);

      if (!!_item) {
        if (_item.quantity > 1) {
          newCart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          );
        } else {
          newCart = [...state.cart].filter((item) => item.id !== id);
        }
      } else {
        newCart = state.cart;
      }

      return { cart: newCart };
    }),

  removeProduct: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  emptyCart: () => set({ cart: [] }),
}));

export const useProduct = create((set) => ({
  products: [],

  setProduct: (products) => set({ products }),
}));
