import { AppShell, Grid } from "@mantine/core";
import Link from "next/link";

const Header = () => {
  return (
    <Grid>
      <Grid.Col span={1} />
      <Grid.Col span={10}>
        <Link href="/">Header</Link>
      </Grid.Col>
      <Grid.Col span={1} />
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
      <AppShell.Header style={{ position: "inherit" }}>
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
