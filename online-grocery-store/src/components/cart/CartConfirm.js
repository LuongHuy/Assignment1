import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  NumberFormatter,
} from "@mantine/core";
import { isEmpty } from "lodash";

const CartConfirm = (props) => {
  const { cart, openConfirmation } = props;

  const isCartEmpty = isEmpty(cart);

  return (
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
        <Button onClick={openConfirmation} disabled={isEmpty(cart)}>
          Buy Now
        </Button>
      </Flex>
    </Box>
  );
};

export default CartConfirm;
