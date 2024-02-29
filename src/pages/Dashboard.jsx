import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import SideDrawer from "../components/SideDrawer";

import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/WorkOutline";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import BuildIcon from "@mui/icons-material/BuildOutlined";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import OrganizationIcon from '@mui/icons-material/ApartmentOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Dashboard() {

  const navIconStyle = {
    color: 'white'
  }

  const NavbarItems = {
    navigation: [
      {
        label: "Dashboard",
        sublist: [],
        icon: <DashboardOutlinedIcon sx={navIconStyle} />,
        navigationPath: "/dashboard/",
      },
      {
        label: "Search Patient",
        sublist: [],
        icon: <SearchIcon sx={navIconStyle} />,
        navigationPath: "/dashboard/search-patient",
      },
      {
        label: "Workspace",
        icon: <WorkIcon sx={navIconStyle} />,
        sublist: [],
        navigationPath: "/dashboard/workspace",
      },
      {
        label: "Administration Settings",
        sublist: [
          {
            label: "Organization",
            icon: <OrganizationIcon sx={navIconStyle} />,
            navigationPath: "/dashboard/users",
          },
          {
            label: "Users",
            icon: <GroupOutlinedIcon sx={navIconStyle} />,
            navigationPath: "/dashboard/users",
          },
          {
            label: "Configs",
            icon: <BuildIcon sx={navIconStyle} />,
            navigationPath: "/dashboard/configs",
          },
        ],
        icon: <SettingsIcon sx={navIconStyle} />,
        navigationPath: null,
      },
    ],
    profileNavigation: [
      {
        label: "My Profile",
        icon: <AccountCircleOutlinedIcon sx={navIconStyle} />,
        sublist:[],
        navigationPath: "/dashboard/my-profile",
      },
      {
        label: "Edit Profile",
        icon: <EditOutlinedIcon sx={navIconStyle} />,
        sublist:[],
        navigationPath: "/dashboard/edit-profile",
      },
    ],
  };



  return (
    <Box>
      <SideDrawer NavbarItems={NavbarItems} />,
    </Box>
  );
}

export default Dashboard;
