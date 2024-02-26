import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AccountCircle from "@mui/icons-material/AccountCircle";
export default function ProfileMenu({ onProfileMenuOpen }) {
  const menuId = "primary-search-account-menu";

  const handleClick = (event) => {
    if (onProfileMenuOpen) {
      onProfileMenuOpen(event.currentTarget);
    }
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", alignItems: "center", md: "flex" },
      }}>
      <Typography>Admin</Typography>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit">
        <AccountCircle />
      </IconButton>
    </Box>
  );
}
