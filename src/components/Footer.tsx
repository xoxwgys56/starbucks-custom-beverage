import React from "react";
import {
  Grid,
  AppBar,
  Container,
  Toolbar,
  Typography,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { GitHub, TableBar } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import queue from "queue";

const rows = [["github", "test"], queue({ results: [] })];

function Footer() {
  // const githubUrl = "//google.com";
  //
  // const openUrl = useCallback((e) => {
  //   window.open(githubUrl, "_blank");
  // }, []);

  return (
    <AppBar position="relative" color="secondary">
      {/*<Container maxWidth="md">*/}
      {/*  /!*<Toolbar>*!/*/}
      {/*  /!*  <Typography variant="body1" color="inherit">*!/*/}
      {/*  /!*    Thanks for coming starbucks custom beverage*!/*/}
      {/*  /!*  </Typography>*!/*/}
      {/*  /!*</Toolbar>*!/*/}
      {/*  <List sx={{ display: "flex", flexDirection: "row" }}>*/}
      {/*    <ListItem sx={{ display: "flex", flexDirection: "column" }}>*/}
      {/*      <ListItemText primary="Related url" />*/}
      {/*      <ListItemButton onClick={openUrl}>*/}
      {/*        <GitHub /> <Typography>github</Typography>*/}
      {/*      </ListItemButton>*/}
      {/*      <ListItemButton onClick={openUrl}>*/}
      {/*        <GitHub /> <Typography>github</Typography>*/}
      {/*      </ListItemButton>*/}
      {/*    </ListItem>*/}
      {/*    <ListItem>*/}
      {/*      <ListItemText primary="Related url" />*/}
      {/*      <ListItemButton onClick={openUrl}>*/}
      {/*        <GitHub /> <Typography>github</Typography>*/}
      {/*      </ListItemButton>*/}
      {/*      <ListItemButton onClick={openUrl}>*/}
      {/*        <GitHub /> <Typography>github</Typography>*/}
      {/*      </ListItemButton>*/}
      {/*    </ListItem>*/}
      {/*  </List>*/}
      {/*</Container>*/}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Related urls</TableCell>
              <TableCell>Related urls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              console.log(row.length);
              if (row.length === 0) return null;
              else return <TableCell key={}>{row.pop()}</TableCell>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </AppBar>
  );
}

export default Footer;
