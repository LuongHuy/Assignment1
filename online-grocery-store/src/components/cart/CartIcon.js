import { useCart } from "@/store/store";
import { Indicator, Image } from "@mantine/core";
import Link from "next/link";

const CartIcon = () => {
  const cart = useCart((state) => state.cart);
  const quantity = cart
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <Indicator label={quantity} size={20}>
      <Link href="/shoppingcart">
        <Image h={40} w="auto" src="/cart-icon.svg" />
      </Link>
    </Indicator>
  );
};

export default CartIcon;
