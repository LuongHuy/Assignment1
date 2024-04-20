import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set) => ({
      cart: [],

      addProduct: (product, quantity) =>
        set((state) => {
          let newCart;

          if (
            state.cart.some((item) => item.product_id === product.product_id)
          ) {
            newCart = state.cart.map((item) =>
              item.product_id === product.product_id
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
          const _item = state.cart.find((item) => item.product_id === id);

          if (!!_item) {
            if (_item.quantity > 1) {
              newCart = state.cart.map((item) =>
                item.product_id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item,
              );
            } else {
              newCart = [...state.cart].filter(
                (item) => item.product_id !== id,
              );
            }
          } else {
            newCart = state.cart;
          }

          return { cart: newCart };
        }),

      removeProduct: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product_id !== id),
        })),

      emptyCart: () => set({ cart: [] }),
    }),
    { name: "cart" },
  ),
);
