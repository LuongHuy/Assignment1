import "@mantine/core/styles.css";
import { AppShell, createTheme, Grid, MantineProvider } from "@mantine/core";
import MainLayout from "@/components/layout/MainLayout";

const theme = createTheme({
  components: {
    AppShell: AppShell.extend({
      styles: {
        main: { minHeight: "calc(100dvh - 70px - 70px)" },
      },
    }),
    Grid: Grid.extend({
      styles: {
        inner: { margin: 0, width: "auto" },
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </MantineProvider>
  );
}
