/* eslint-disable import/export */
import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store, AppStore } from "../src/redux/store";
import Layout from "@/components/Layout/Layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

const AllTheProviders: FC<{
  store: AppStore;
  children: React.ReactNode;
}> = ({ children }) => {
  mockRouter.push("/");
  return (
    <Provider store={store}>
      <SSRProvider>
        <Layout>{children}</Layout>
      </SSRProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const TmpProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <AllTheProviders children={children} store={store} />;
  };

  return { store, ...render(ui, { wrapper: TmpProvider, ...options }) };
};

export { customRender };
