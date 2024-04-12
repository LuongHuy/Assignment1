import { useCart } from "@/store/store";
import { Indicator, Image } from "@mantine/core";

const CartIcon = () => {
  const cart = useCart((state) => state.cart);
  console.log(cart);
  const quantity = cart
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <Indicator label={quantity} size={20}>
      <Image h={40} w="auto" src="/cart-icon.svg" />
    </Indicator>
  );
};

export default CartIcon;
