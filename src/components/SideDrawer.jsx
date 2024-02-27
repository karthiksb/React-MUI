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
import { grey } from "@mui/material/colors";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import BuildIcon from "@mui/icons-material/BuildOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersListTable from "../pages/UsersList";
import PatientIdForm from "../pages/patientSearchForm";
import Appbar from "./Appbar";

import ProfileMenuList from "../components/ProfileMenuList";
import ProfileMenu from "../components/ProfileMenu";

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [navItems, setNavItems] = React.useState(null);
  const [openSublist, setOpenSublist] = React.useState({});

  const toggleSublist = (index) => {
    setOpenSublist((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    setNavItems(NavbarItems);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (anchor) => {
    setAnchorEl(anchor);
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <Appbar showDrawerIcon={true}>
        <ProfileMenu onProfileMenuOpen={handleProfileMenuOpen}>
          <ProfileMenuList
            anchor={anchorEl}
            isMenuOpen={isMenuOpen}
            closeMenu={setAnchorEl}></ProfileMenuList>
        </ProfileMenu>
      </Appbar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            backgroundColor: "#363636",
            display: "flex",
            justifyContent: "center",
          }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={
                open
                  ? "https://static.wixstatic.com/media/feedf7_adcf469e7f52497d894434defc0bcfba~mv2.png/v1/fill/w_517,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20ki%20med%20weiss_lowres.png"
                  : "https://static.wixstatic.com/media/feedf7_adcf469e7f52497d894434defc0bcfba~mv2.png/v1/fill/w_517,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20ki%20med%20weiss_lowres.png"
              }
              alt="Logo"
              style={{
                imageRendering: "crisp-edges",
                width: open ? "160px" : "60px", // Adjust the width based on the open state
                height: "auto", // Maintain aspect ratio
                marginRight: "8px", // Adjust margin as needed
              }}
            />
          </Box>
          {/* <Typography>{open ? "Onco Connect system" : "OCS"}</Typography> */}
        </DrawerHeader>
        <Divider />
        <List>
          <Box
            sx={{
              marginBlock: "2px",
              marginLeft: "2px",
              width: "100%",
              height: "25px",
            }}>
            {open && (
              <Typography sx={{ fontSize: "14px", paddingInline: "24px" }}>
                Navigation
              </Typography>
            )}
          </Box>

          {navItems &&
            navItems.map((navItem, index) => (
              <>
                <ListItem
                  key={navItem.label}
                  disablePadding
                  sx={{ display: "block" }}>
                  <Link to={navItem.navigationPath}>
                    <ListItemButton
                      onClick={() =>
                        navItem.sublist.length && toggleSublist(index)
                      }
                      sx={{
                        m: 0,
                        paddingBlock: open ? 0 : 1,
                        // backgroundColor: 'cyan',
                        display: "flex",
                        justifyContent: "center",
                        minHeight: 48,
                      }}>
                      <Box
                        sx={{
                          backgroundColor: open ? "transparent" : "#DBDBDB",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "7px",
                          mr: open ? 1 : 0,
                        }}>
                        {navItem.icon}
                      </Box>

                      <ListItemText
                        primary={navItem.label}
                        sx={{
                          color: grey[700],
                          display: open ? "block" : "none",
                        }}
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
                        <ListItem
                          key={subIndex}
                          disablePadding
                          sx={{ display: "block" }}>
                          <ListItemButton
                            sx={{
                              m: 0,
                              paddingBlock: open ? 0 : 1,
                              display: "flex",
                              minHeight: 48,
                              "&:hover": {
                                backgroundColor: open
                                  ? "transparent"
                                  : "#DBDBDB",
                              },
                            }}>
                            {open ? (
                              <>
                                <Box
                                  sx={{
                                    backgroundColor: open
                                      ? "transparent"
                                      : "#DBDBDB",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "7px",
                                    mr: open ? 1 : 0,
                                  }}>
                                  <Box
                                    sx={{
                                      display: open ? "block" : "none",
                                      width: "2px",
                                      backgroundColor: "#DBDBDB",
                                      height: "118%",
                                    }}></Box>
                                </Box>
                                <Box
                                  sx={{
                                    backgroundColor: open
                                      ? "transparent"
                                      : "#DBDBDB",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "7px",
                                    mr: open ? 1 : 0,
                                  }}>
                                  {subItem.icon}
                                </Box>
                                <ListItemText
                                  primary={subItem.label}
                                  sx={{
                                    color: grey[700],
                                    display: open ? "block" : "none",
                                  }}
                                />
                              </>
                            ) : (
                              <Box
                                sx={{
                                  backgroundColor: open
                                    ? "transparent"
                                    : "#DBDBDB",
                                  width: "40px",
                                  height: "40px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: "7px",
                                  mr: open ? 1 : 0,
                                }}>
                                {subItem.icon}
                              </Box>
                            )}
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
      <Box component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
        <IconButton
          disableTouchRipple
          disableRipple
          disableFocusRipple
          onClick={handleDrawerClose}
          sx={{
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add your desired shadow values
            top: 65,
            left: -20,
            zIndex: 1260,
            width: 32, // Adjust the width
            height: 32, // Adjust the height
          }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Routes>
          <Route
            index
            element={
              <Typography paragraph>Default Dashboard Content</Typography>
            }
          />
          <Route path="search-patient" element={<PatientIdForm />} />
          <Route
            path="workspace"
            element={<Typography paragraph>Workspace</Typography>}
          />
          <Route path="users" element={<UsersListTable />} />
          <Route
            path="configs"
            element={<Typography paragraph>Configs</Typography>}
          />
        </Routes>
      </Box>
    </Box>
  );
}
