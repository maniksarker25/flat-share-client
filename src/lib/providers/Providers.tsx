"use client";

import React from "react";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
