import { AppShell, Flex, Grid, Image, Input } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import CartIcon from "../cart/CartIcon";

const Header = () => {
  return (
    <Grid>
      <Grid.Col span={2} />
      <Grid.Col span={8}>
        <Flex h="100%" justify="space-between" align="center">
          <Link href="/">TEACHER'S SHOP</Link>
          <Link href="/">
            <Image radius="md" src="Logo.jpg" h={50} w="auto" />
          </Link>
          <Input
            radius="md"
            placeholder="Search product"
            w="70%"
            rightSection={
              <div onClick={() => console.log("Ok")}>
                <AiOutlineSearch />
              </div>
            }
          />
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
