import Head from "next/head";
import { Container, Grid } from "@mantine/core";
import Link from "next/link";

const Confirmation = () => {
  return (
    <>
      <Head>
        <title>Confirmation</title>
        <meta name="description" content="Confirm the purchase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={8}>
          <Container fluid>
            <div
              style={{
                textAlign: "center",
                width: "100%",
              }}
            >
              <h1>Confirmation</h1>
              <p>We have received your order!</p>
              <p>
                All the goods will be delivered by our staff in the next few
                days
              </p>
              <h3>
                <Link href="/">Click here to go back to the main page</Link>
              </h3>
            </div>
          </Container>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
    </>
  );
};
export default Confirmation;
