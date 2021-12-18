import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

function Title() {
  const titleText = "Take a rest with beverage";

  // TODO 1. 이거 디자인하기 Box element 쓰면 될거 같음
  return <Box>{titleText}</Box>;
}

function Nav() {
  // TODO 이 정보를 config file 로 빼기
  const titleText = "Take a rest with beverage";
  // TODO add onclick event
  // TODO get value from config file
  const navItems = ["favorite", "my page"];

  return (
    <Box>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: 600 }}
            color="text.primary"
          >
            {titleText}
          </Typography>
          {navItems.map((item) => (
            <Button color="inherit">{item}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
