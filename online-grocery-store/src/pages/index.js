import ProductCard from "@/components/common/ProductCard";
import { Box, Center, Container, Grid, Autocomplete } from "@mantine/core";
import { isArray, isEmpty } from "lodash";
import Head from "next/head";
import CategoryCard from "../components/common/CategoryCard";

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/getAllProducts");
  const products = await res.json();

  return { props: { products } };
};

export default function Home(props) {
  const { products } = props;

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
                      {["A", "B", "C", "D"].map((categoryname) => (
                        <CategoryCard categoryName={categoryname} />
                      ))}
                    </div>
                  </Box>
                  <div style={{ textAlign: "center", margin: 10 }}>
                    Show All
                  </div>
                </Box>
              </Grid.Col>
              <Grid.Col span={10}>
                <div style={{ margin: 10 }}>Category - A</div>
                {isArray(products) && !isEmpty(products) ? (
                  <Grid>
                    {products.map((product) => (
                      <Grid.Col key={product.product_id} span={4}>
                        <ProductCard product={product} />
                      </Grid.Col>
                    ))}
                  </Grid>
                ) : (
                  <Center bg="var(--mantine-color-gray-light)">
                    <Box>Network error</Box>
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
}
