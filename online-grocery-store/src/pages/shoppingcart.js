import CartConfirm from "@/components/cart/CartConfirm";
import CartList from "@/components/cart/CartList";
import { useCart } from "@/store/store";
import { Box, Button, Container, Grid, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const ShoppingCart = () => {
  const { cart, addProduct, subtractProduct, emptyCart } = useCart(
    (state) => state,
  );

  const [isOpened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Container fluid>
        <Grid>
          <Grid.Col span={2} />
          <Grid.Col span={8}>
            <Box>
              <Grid>
                <Grid.Col span={8}>
                  <CartList
                    cart={cart}
                    addProduct={addProduct}
                    subtractProduct={subtractProduct}
                  />
                </Grid.Col>
                <Grid.Col span={4}>
                  <CartConfirm cart={cart} openConfirmation={open} />
                </Grid.Col>
              </Grid>
            </Box>
          </Grid.Col>
          <Grid.Col span={2} />
        </Grid>
      </Container>

      <Modal opened={isOpened} onClose={close} title="Delivery Information">
        <Box>
          <Button>Place an Order</Button>
        </Box>
      </Modal>
    </>
  );
};

export default ShoppingCart;
