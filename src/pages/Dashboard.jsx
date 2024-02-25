import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersListTable from "./UsersList";
import PatientIdForm from "./patientSearchForm";
import Appbar from "../components/Appbar";
import SideDrawer from "../components/SideDrawer";
import ProfileMenu from "../components/ProfileMenu";

import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import ProfileMenuList from "../components/ProfileMenuList";

function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (anchor) => {
    setAnchorEl(anchor);
  };

  const NavbarItems = [
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
  ];

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
  }));

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Appbar showDrawerIcon={true}>
          <ProfileMenu onProfileMenuOpen={handleProfileMenuOpen}>
            <ProfileMenuList
              anchor={anchorEl}
              isMenuOpen={isMenuOpen}
              closeMenu={setAnchorEl}></ProfileMenuList>
          </ProfileMenu>
        </Appbar>
        <SideDrawer NavbarItems={NavbarItems} />,
        <Box
          component="main"
          sx={{
            width: "100%",
            minHeight: "80vh",
            flexGrow: 1,
            mt: 8,
          }}>
          {/* <DrawerHeader /> */}
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
    </Box>
  );
}

export default Dashboard;
