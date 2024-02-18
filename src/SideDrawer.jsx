import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const items = [
    {
      label: "Administration Settings",
      sublist: [
        {
          label: "Users",
          icon: <PersonIcon />,
          navigationPath: "/dashboard/users",
        },
        {
          label: "Configs",
          icon: <BuildIcon />,
          navigationPath: "/dashboard/configs",
        },
      ],
      icon: <SettingsIcon />,
      navigationPath: null,
    },
    {
      label: "Search Patient",
      sublist: [],
      icon: <SearchIcon />,
      navigationPath: "/dashboard/search-patient",
    },
    {
      label: "Workspace",
      icon: <WorkIcon />,
      sublist: [],
      navigationPath: "/dashboard/workspace",
    },

    // ... other items
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          display: { md: "block", sm: "none", xs: "none" },
        }}
        variant="permanent"
        open={open}>
        <DrawerHeader />
        <Divider />
        <List>
          {items.map((navItem, index) => (
            <div key={navItem.label}>
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
                      <ListItem key={subItem.label} disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.label} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
