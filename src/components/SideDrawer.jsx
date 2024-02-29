import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { Link } from "react-router-dom";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import logo from "../assets/kimed_light.png"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MainContent from "./MainContent";
import PropTypes from 'prop-types';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AvatarContainer = styled(Box)(({ theme, open, sx }) => ({
  backgroundColor: open ? "#391AE72F" : "#A7A0A048",
  width: open ? "35px" : "40px",
  height: open ? "35px" : "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "7px",
  marginRight: open ? theme.spacing(2.5) : 0, // Add margin based on theme spacing
  ...sx, // Merge sx object with existing styles
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ NavbarItems }) {
  const [open, setOpen] = React.useState(true);
  const [navItems, setNavItems] = React.useState(null);
  const [openSublist, setOpenSublist] = React.useState({});
  const [profileCollaspe, setProfileCollaspe] = React.useState(false);
  const [selectedNavItem, setNavItem] = React.useState('Dashboard');
  const selectedColor = "#23A1C4";

  useEffect(() => {
    setNavItems(NavbarItems);
  });

  const toggleSublist = (index) => {
    setOpenSublist((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleProfileCollaspe = () => {
    setProfileCollaspe(!profileCollaspe)
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  }

  const handleSelectNav = (navItem) => {
    console.log(navItem.label)
    setNavItem(navItem.label)
  }
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <DrawerHeader
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBlock: 2
            }}>
            <img style={{ width: open ? '190px' : '60px' }} src={logo} alt="logo" />
          </DrawerHeader>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: '#8383836B', mx: 2 }} />
        <Box sx={{ marginBlock: 1 }}>
          <ListItem button onClick={handleProfileCollaspe}>
            <ListItemAvatar>
              <Avatar sx={{ width: 35, height: 35 }} alt="Avatar" src="/path/to/avatar.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Admin" />
            {profileCollaspe ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </Box>
        <Collapse in={profileCollaspe} timeout="auto" unmountOnExit>
          <List >
            {navItems &&
              navItems.profileNavigation.map((navItem, index) => (
                // eslint-disable-next-line react/jsx-key
                <Link to={navItem.navigationPath}>
                  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleSelectNav(navItem)}>
                      <AvatarContainer sx={{ backgroundColor: selectedNavItem == navItem.label ? selectedColor : '#695C6979' }} open={open}>
                        {navItem.icon}</AvatarContainer>
                      <ListItemText primary={navItem.label} sx={{
                        color: "white",
                        display: open ? "block" : "none",
                      }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: '#8383836B', mx: 2 }} />
        <List>
          {navItems &&
            navItems.navigation.map((navItem, index) => (
              <>
                <ListItem button
                  onClick={() => handleSelectNav(navItem)}
                  key={navItem.label}
                  disablePadding
                  sx={{ display: "block", marginBlock: 1 }}>
                  <Link to={navItem.navigationPath}>
                    <ListItem button
                      onClick={() =>
                        navItem.sublist.length && toggleSublist(index)
                      }
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        minHeight: 48,
                      }}>
                      <AvatarContainer sx={{ backgroundColor: selectedNavItem == navItem.label ? selectedColor : '#A7A0A048' }} open={open}>
                        {navItem.icon}
                      </AvatarContainer>

                      <ListItemText
                        primary={navItem.label}
                        sx={{
                          color: "white",
                          display: open ? "block" : "none",
                        }}
                      />
                      {navItem.sublist.length > 0 && (
                        <Box
                          sx={{
                            color: 'white',
                            ml: "auto",
                            display: open ? "initial" : "none",
                          }}>
                          {openSublist[index] ? <ExpandLess /> : <ExpandMore />}
                        </Box>
                      )}
                    </ListItem>
                  </Link>
                </ListItem>
                <Collapse in={openSublist[index]} timeout="auto" unmountOnExit>
                  <List sx={{ pl: open ? 2 : 'inherit', marginBottom: 1 }} component="div" disablePadding>
                    {navItem.sublist.map((subItem, subIndex) => (
                      // eslint-disable-next-line react/jsx-key
                      <Link to={subItem.navigationPath}>
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton onClick={() => handleSelectNav(subItem)}>
                            <AvatarContainer sx={{ backgroundColor: selectedNavItem == subItem.label ? selectedColor : '#7A7A7A3A' }} open={open}>
                              {subItem.icon}</AvatarContainer>
                            <ListItemText primary={subItem.label} sx={{
                              color: "white",
                              display: open ? "block" : "none",
                            }} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </>
            ))}
        </List>
      </Drawer>
      <MainContent drawerOpenHandle={handleDrawerOpen} />
    </Box>
  );
}

MiniDrawer.PropTypes={
  NavbarItems: PropTypes.array.isRequired
}