import { AppShell, Flex, Grid } from "@mantine/core";
import Link from "next/link";
import CartIcon from "../cart/CartIcon";

const Header = () => {
  return (
    <Grid>
      <Grid.Col span={2} />
      <Grid.Col span={8}>
        <Flex h="100%" justify="space-between" align="center">
          <Link href="/">Header</Link>
          <CartIcon />
        </Flex>
      </Grid.Col>
      <Grid.Col span={2} />
    </Grid>
  );
};

const Footer = () => {
  return (
    <Grid>
      <Grid.Col span={1} />
      <Grid.Col span={10}>Footer</Grid.Col>
      <Grid.Col span={1} />
    </Grid>
  );
};

const MainLayout = ({ children }) => {
  return (
    <AppShell>
      <AppShell.Header style={{ position: "inherit", height: 70 }}>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer style={{ position: "inherit" }}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default MainLayout;
