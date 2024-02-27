import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar({ showDrawerIcon, children }) {
  return (
    <>
      <AppBar sx={{ backgroundColor: "#363636" }} position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ fontSize: "1rem" }}
            variant="h6"
            noWrap
            component="div">
            ONCO CONNECT SYSYEM
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
      {children?.props.children}
    </>
  );
}
