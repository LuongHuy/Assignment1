import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import MainLayout from "@/components/layout/MainLayout";

const theme = createTheme({
  /** Put your mantine theme override here */
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
