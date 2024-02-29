import React, { useState } from "react";
import backgroundImage from "../../assets/art.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Person } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { VpnKey } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { Divider, IconButton, createTheme } from "@mui/material";
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";


const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Loginpage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("click");
    navigate("/dashboard")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}>
        <Box
          sx={{
            width: "100%",
            height: "auto",
          }}>
          <img
            style={{
              marginTop: "10px",
              marginLeft: "20px",
              height: "70px",
              backgroundSize: "contain",
            }}
            src="https://static.wixstatic.com/media/feedf7_adcf469e7f52497d894434defc0bcfba~mv2.png/v1/fill/w_517,h_167,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20ki%20med%20weiss_lowres.png"
            alt="logo"
          />
          <Container
            sx={{
              mt: 10,
              backdropFilter: "blur(16px) saturate(180%)",
              WebkitBackdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.5)",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
              pb:6
            }}
            component="main"
            maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py:3,
              }}>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h6" sx={{fontSize:24}}>
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 2 }}>
                <Typography sx={{ mt: 2 }} >Enter Email Address</Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email address"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <Box sx={{
                        height: 30, display: 'flex',
                        alignItems: 'center',
                        mr: 1
                      }}>
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                        <Divider sx={{ px: 0.4 }} orientation="vertical" />
                      </Box>
                    ),
                    sx: { pl: 2,color:'#E7E7E7F6' } // Adding padding-left of 2 units (adjust as needed)
                  }}
                  sx={{ color: "white", borderColor: "white" }}
                />

                <Typography sx={{ mt: 2 }}>Enter password</Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  placeholder="password"
                  sx={{ color: "white", borderColor: "white" }}
                  InputProps={{
                    startAdornment: (
                      <Box sx={{
                        height: 30, display: 'flex',
                        alignItems: 'center',
                        mr: 1
                      }}>
                        <InputAdornment position="start">
                         <VpnKey/>
                        </InputAdornment>
                        <Divider sx={{ px: 0.4 }} orientation="vertical" />
                      </Box>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => handleClickShowPassword()}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: { pl: 2,color:'#E7E7E7F6' } // Adding padding-left of 2 units (adjust as needed)
                  }}

                />
                <FormControlLabel
                sx={{mt:4}}
                  control={<Checkbox color="primary" />}
                  label={
                    <Typography variant="body2">
                      I accept the <Link to="/terms">terms</Link> and <Link to="/policy">policy</Link>
                    </Typography>
                  }
                />
                <Button
                onClick={handleSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
