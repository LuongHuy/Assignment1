import { AppShell, Flex, Grid, Image, Input } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import CartIcon from "../cart/CartIcon";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState();
  const onSearch = () => {
    router.push(`/search?query=${value}`);
  };
  return (
    <Grid>
      <Grid.Col span={2} />
      <Grid.Col span={8}>
        <Flex h="100%" justify="space-between" align="center">
          <Link href="/">
            <Flex h="100%" justify="space-between" align="center" gap={10}>
              <Image radius="md" src="Logo.jpg" h={50} w="auto" />
              TEACHER'S SHOP
            </Flex>
          </Link>
          <Input
            radius="md"
            placeholder="Search product"
            w="75%"
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <button onClick={onSearch}>
            <AiOutlineSearch />
          </button>
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
