import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 290;

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
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideDrawer({ NavbarItems }) {
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const [openSublist, setOpenSublist] = React.useState({});

  const toggleSublist = (index) => {
    setOpenSublist((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          display: { md: "block" },
        }}
        variant="permanent"
        open={isDrawerOpen}>
        <DrawerHeader />
        <Divider />
        <List>
          {NavbarItems.map((navItem, index) => (
            <Box key={index}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <Link to={navItem.navigationPath}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.0,
                    }}
                    onClick={() =>
                      navItem.sublist.length && toggleSublist(index)
                    }>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        transition: "margin-right 1s ease",
                      }}>
                      {navItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={navItem.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {navItem.sublist.length > 0 && (
                      <IconButton
                        sx={{
                          ml: "auto",
                          display: open ? "initial" : "none",
                        }}>
                        {openSublist[index] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    )}
                  </ListItemButton>
                </Link>
              </ListItem>
              <Collapse in={openSublist[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {navItem.sublist.map((subItem, subIndex) => (
                    <Link to={subItem.navigationPath}>
                      <ListItem key={subIndex} disablePadding>
                        <ListItemButton sx={{ pl: isDrawerOpen ? 4 : "auto" }}>
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.label} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
