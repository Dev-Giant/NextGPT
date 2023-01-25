import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
