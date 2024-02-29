import Typography from "@mui/material/Typography";
import { Box, Badge, IconButton } from '@mui/material';
import { Person } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import Card from "@mui/material/Card";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import ProfileMenuList from "./ProfileMenuList";
import PropTypes from 'prop-types';

export default function Appbar({toggleDrawerOpen}) {
  const [anchor,setAnchor] = React.useState(null); 
  const isMenuOpen = Boolean(anchor);
  const closeProfileDropdown =()=>{
    setAnchor(null);
  }

  return (
    <Box sx={{ width: '100%', height: 70, display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
      <Box sx={{display:'flex',alignItems:'center',gap:2}}>
        <IconButton onClick={toggleDrawerOpen}>
          <Card sx={{ width: 30, height: 30, borderRadius: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ChevronLeftIcon />
          </Card>
        </IconButton>
        <Typography sx={{fontSize:22}}>Dashboard</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <IconButton>
          <Badge badgeContent={1} color="secondary">
            <Notifications color="action" />
          </Badge>
        </IconButton>
        <IconButton  onClick={(event)=>setAnchor(event.currentTarget)}><Person /></IconButton>
      </Box>
      <ProfileMenuList anchor={anchor} isMenuOpen={isMenuOpen} closeMenu={closeProfileDropdown}/>
    </Box>
  );
}

Appbar.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
};