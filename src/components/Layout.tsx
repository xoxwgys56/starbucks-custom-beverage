import React, { ReactNode } from "react";
import { Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
}

export default Layout;
