import { NEXT_PUBLIC_HOST } from "@/env/env";
import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  NumberFormatter,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { isEmpty } from "lodash";
import { useState } from "react";

const CartConfirm = (props) => {
  const { cart, openConfirmation } = props;

  const [isErrorOpened, { open, close }] = useDisclosure(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const isCartEmpty = isEmpty(cart);

  const handleBuyNow = async () => {
    const _products = await fetch(`${NEXT_PUBLIC_HOST}/api/getProductsByID`, {
      method: "POST",
      body: JSON.stringify(cart.map((product) => product.product_id)),
    });
    const products = await _products.json();

    for (const product of cart) {
      if (
        product.quantity >
        products.find((item) => item.product_id === product.product_id).in_stock
      ) {
        setErrorMessage(
          `${product.product_id} ${product.product_name} exceeds in stock.`,
        );
        return open();
      }
    }

    return openConfirmation();
  };

  return (
    <>
      <Box style={{ border: "1px black solid", padding: 20 }}>
        <Box style={{ marginBottom: 20 }}>
          {isCartEmpty ? (
            <Flex justify="center">
              <Text>Empty Cart</Text>
            </Flex>
          ) : (
            <>
              <Text>
                Total price:{" "}
                <NumberFormatter
                  prefix="$"
                  value={cart
                    .reduce(
                      (acc, curr) => acc + curr.unit_price * curr.quantity,
                      0,
                    )
                    .toFixed(2)}
                  thousandSeparator
                />
              </Text>
            </>
          )}
        </Box>

        <Flex justify="center">
          <Button onClick={handleBuyNow} disabled={isEmpty(cart)}>
            Buy Now
          </Button>
        </Flex>
      </Box>

      <Modal opened={isErrorOpened} onClose={close} title="Error">
        <Box>
          <Text>{errorMessage}</Text>
        </Box>
      </Modal>
    </>
  );
};

export default CartConfirm;
