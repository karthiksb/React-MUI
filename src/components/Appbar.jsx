import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../drawerSlice";

export default function Appbar({ showDrawerIcon, children }) {
  const dispatch = useDispatch();
  const [isClosed, setIsClosed] = React.useState(false);
  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          borderBottom: "1px solid #6B6B6B3A",
          backgroundColor: "white",
          color: "black",
          zIndex: 1201,
        }}>
        {!isClosed && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "primary.main",
              color: "white",
              padding: "10px",
              textAlign: "center",
              transition: "background-color 1s",
            }}>
            <Typography>We recommend you to change your password</Typography>
            <IconButton
              color="inherit"
              size="small"
              style={{ marginLeft: "10px" }}
              onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
        <Toolbar>
          {showDrawerIcon && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(toggleDrawer())}
              sx={{ display: { xs: "block" }, mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Box
            component="img"
            sx={{
              width: 120,
            }}
            alt="The house from the offer."
            src="https://static.wixstatic.com/media/feedf7_adcf469e7f52497d894434defc0bcfba~mv2.png/v1/fill/w_517,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20ki%20med%20weiss_lowres.png"
          />
          <Typography variant="h6" noWrap component="div">
            Onco-Connect-Systems
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {children}
        </Toolbar>
      </AppBar>
      {children?.props.children}
    </Box>
  );
}
