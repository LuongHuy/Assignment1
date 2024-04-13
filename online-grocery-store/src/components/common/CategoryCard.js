import { Box } from "@mantine/core";

const CategoryCard = ({ categoryName }) => {
  return (
    <Box
      my="xl"
      style={{
        backgroundColor: "green",
        border: "1px solid black",
        margin: 20,
      }}
    >
      {categoryName}
    </Box>
  );
};
export default CategoryCard;
