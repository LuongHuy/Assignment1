import {
  ActionIcon,
  Box,
  CloseButton,
  Flex,
  Table,
  Text,
  Image,
  NumberFormatter,
} from "@mantine/core";

const QuantityButton = ({ quantity, addProduct, subtractProduct }) => {
  return (
    <Flex gap={10}>
      <ActionIcon onClick={subtractProduct}>-</ActionIcon>
      <Text>{quantity}</Text>
      <ActionIcon onClick={addProduct}>+</ActionIcon>
    </Flex>
  );
};

const CartList = (props) => {
  const { cart, addProduct, subtractProduct, removeProduct } = props;

  const head = (
    <Table.Tr>
      <Table.Th>Image</Table.Th>
      <Table.Th>Name</Table.Th>
      <Table.Th>Quantity</Table.Th>
      <Table.Th>Price</Table.Th>
      <Table.Th></Table.Th>
    </Table.Tr>
  );

  const rows = cart.map((item) => (
    <Table.Tr key={item.product_id}>
      <Table.Td>
        <Image
          src={"/product-img/" + item.product_id + ".jpg"}
          height={100}
          fit="contain"
        />
      </Table.Td>
      <Table.Td>{item.product_name}</Table.Td>
      <Table.Td>
        <QuantityButton
          quantity={item.quantity}
          addProduct={() => addProduct(item, 1)}
          subtractProduct={() => subtractProduct(item.product_id)}
        />
      </Table.Td>
      <Table.Td>
        <NumberFormatter
          prefix="$"
          value={(item.unit_price * item.quantity).toFixed(2)}
          thousandSeparator
        />
      </Table.Td>
      <Table.Td>
        <CloseButton onClick={() => removeProduct(item.product_id)} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box>
      <Table>
        <Table.Thead>{head}</Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Box>
  );
};

export default CartList;
