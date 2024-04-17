import { ActionIcon, Box, CloseButton, Flex, Table, Text } from "@mantine/core";

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
    <Table.Tr>
      <Table.Td>Image</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>
        <QuantityButton
          quantity={item.quantity}
          addProduct={(() => addProduct(item), 1)}
          subtractProduct={() => subtractProduct(item.id)}
        />
      </Table.Td>
      <Table.Td>{item.price}</Table.Td>
      <Table.Td>
        <CloseButton onClick={() => removeProduct(item.id)} />
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
