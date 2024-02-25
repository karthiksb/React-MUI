import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useCallback } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import the AccountCircle icon
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Import the ExitToApp icon

export default function ProfileMenuList({ anchor, isMenuOpen, closeMenu }) {
  const menuId = "primary-search-account-menu";
  const handleMenuClose = useCallback((event) => {
    closeMenu(null);
  });

  return (
    <Menu
      anchorEl={anchor}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem>
        <AccountCircleIcon style={{ marginRight: "8px" }} /> Profile
      </MenuItem>
      <MenuItem>
        <ExitToAppIcon style={{ marginRight: "8px" }} /> Logout
      </MenuItem>
    </Menu>
  );
}
