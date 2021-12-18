import React, { ReactNode } from "react";
import { Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Nav from "./Nav";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#00704A",
    },
    background: {
      paper: "#1B3C35",
    },
    text: {
      primary: "#1B3C35",
      secondary: "#27251F",
    },
  },
});

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Nav />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
