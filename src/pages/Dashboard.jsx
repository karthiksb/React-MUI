import React from "react";
import { Box } from "@mui/material";
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
  const [isDrawerOpen,setDrawerOpen] = React.useState(true);

  const handleProfileMenuOpen = (anchor) => {
    setAnchorEl(anchor);
  };
  
  const handleOpenDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
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


  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Appbar showDrawerIcon={true} showRecommendation={true} drawerOpenHandle={handleOpenDrawer}>
          <ProfileMenu onProfileMenuOpen={handleProfileMenuOpen}>
            <ProfileMenuList
              anchor={anchorEl}
              isMenuOpen={isMenuOpen}
              closeMenu={setAnchorEl}></ProfileMenuList>
          </ProfileMenu>
        </Appbar>
        <SideDrawer NavbarItems={NavbarItems} isDrawerOpen={isDrawerOpen} />,
      </Box>
    </Box>
  );
}

export default Dashboard;
