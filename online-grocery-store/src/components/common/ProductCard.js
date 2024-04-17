import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  NumberFormatter,
  Text,
} from "@mantine/core";
import { useRouter } from "next/router";

const ProductCard = (props) => {
  const { product } = props;
  const router = useRouter();
  const isInStock = product.in_stock > 0;
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={"/product-img/" + product.product_id + ".jpg"}
          height={260}
          alt={product.product_name}
          fit="contain"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product.product_name}</Text>
        <Badge color={isInStock ? "blue" : "gray"}>
          {isInStock ? "In Stock" : "Out of Stock"}
        </Badge>
      </Group>

      <Text>
        <NumberFormatter
          prefix="$"
          value={product.unit_price}
          thousandSeparator
        />
        {" / "}
        {product.unit_quantity}
      </Text>

      <Text size="sm" c="dimmed">
        {product.description}
      </Text>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => router.push(`/product/${product.product_id}`)}
      >
        View
      </Button>
    </Card>
  );
};

export default ProductCard;
