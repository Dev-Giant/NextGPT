import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import Layout from "@/components/Layout/Layout";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </Provider>
  );
}
