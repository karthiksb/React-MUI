import { Box } from '@mui/system'
import Typography from "@mui/material/Typography";
import UsersListTable from "../pages/UsersList";
import PatientIdForm from "../pages/patientSearchForm";
import {  Route, Routes } from "react-router-dom";
import Appbar from './Appbar';
import PropTypes from 'prop-types';

export default function MainContent({drawerOpenHandle}) {
    return (
        <Box component="main" sx={{ flexGrow: 1, position: "relative", backgroundColor: '#EEEEEE', height: '100vh' }}>
            <Box sx={{ px: 3 }}>
                <Appbar toggleDrawerOpen={drawerOpenHandle} />
                <Routes>
                    <Route
                        index
                        element={
                            <Typography paragraph></Typography>
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
    )
}

MainContent.PropTypes={
    drawerOpenHandle:PropTypes.func.isRequired
}