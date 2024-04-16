import { useState, useEffect } from "react";
import ProductCard from "@/components/common/ProductCard";
import { Box, Center, Container, Grid } from "@mantine/core";
import { isArray, isEmpty } from "lodash";
import Head from "next/head";
import CategoryCard from "../components/common/CategoryCard";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [products, setProducts] = useState([]);
  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );
  const [category, setCategory] = useState("Show All");
  const filterProducts =
    category === "Show All"
      ? products
      : products.filter((product) => product.category === category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/findProducts?query=${query}`,
        );
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [query]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={8}>
          <Container fluid>
            <Grid>
              <Grid.Col span={2}>
                <Box my="xl" style={{ border: "1px solid black" }}>
                  <div style={{ textAlign: "center", margin: 10 }}>
                    Category List
                  </div>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ alignSelf: "center" }}>
                      {[...categories, "Show All"].map(
                        (
                          categoryname, // Add element Show All in the categories array. The "..." means all the element in the array
                        ) => (
                          <div onClick={() => setCategory(categoryname)}>
                            <CategoryCard categoryName={categoryname} />
                          </div>
                        ),
                      )}
                    </div>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col span={10}>
                <div style={{ margin: 10 }}>Category - A</div>
                {isArray(products) && !isEmpty(products) ? (
                  <Grid>
                    {filterProducts.map((product) => (
                      <Grid.Col key={product.product_id} span={4}>
                        <ProductCard product={product} />
                      </Grid.Col>
                    ))}
                  </Grid>
                ) : (
                  <Center bg="var(--mantine-color-gray-light)">
                    <Box>No Item Found</Box>
                  </Center>
                )}
              </Grid.Col>
            </Grid>
          </Container>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
    </>
  );
};
export default SearchPage;
