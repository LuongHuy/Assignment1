import { Box } from "@mantine/core";

const CategoryCard = ({ categoryName }) => {
  return (
    <button onclick="myFunction()" style={{ width: 100, margin: 20 }}>
      {categoryName}
    </button>
  );
};
export default CategoryCard;
