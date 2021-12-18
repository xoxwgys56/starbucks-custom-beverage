import React from "react";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "secondary" }}
      color="secondary"
    >
      <Grid item xs={4}>
        test
      </Grid>
      <Grid item xs={4}>
        test
      </Grid>
    </Grid>
  );
}

export default Footer;
