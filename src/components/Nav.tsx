import React from "react";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import "./Nav.module.scss";

function Title() {
  const titleText = "Take a rest with beverage";
  // TODO 이 정보를 config file 로 빼기

  // TODO 1. 이거 디자인하기 Box element 쓰면 될거 같음
  return <Box>{titleText}</Box>;
}

function Nav() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Title />
      </Grid>
      <Grid item xs={4}>
        test
      </Grid>
      <Grid item xs={4}>
        test
      </Grid>
    </Grid>
    // <Box>
    //     <Tabs>
    //         <Tab label={"one"} />
    //         <Tab label={"one"} />
    //     </Tabs>
    // </Box>
  );
}

export default Nav;
