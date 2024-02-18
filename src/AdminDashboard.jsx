import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Sidebar from "./SideDrawer";
import PrimarySearchAppBar from "./Appbar";
import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import CustomPaginationActionsTable from "./pages/UsersList";
import UsersListTable from "./pages/UsersList";
import PatientIdForm from "./pages/patientSearchForm";

function AdminDashboard() {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <PrimarySearchAppBar />
      <Sidebar />
      <Box component="main" sx={{ width: "100%", flexGrow: 1, p: 3 }}>
        <DrawerHeader />
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

export default AdminDashboard;
