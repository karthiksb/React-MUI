import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Divider, Paper, Box } from "@mui/material";

const PasswordResetForm = () => {
  const [loading, setLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password reset logic here
  };

  // Simulate loading for 2 seconds before showing the form
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const styles = {
    textField: {
      borderBottom: "1px solid grey", // You can customize the color and other properties
    },
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={2} sx={{ mt: 15, px: 3, pt: 2, borderRadius: 3 }}>
        <CardContent
          sx={{
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Forgot password
            </Typography>
            <Divider />{" "}
            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="200px">
                <CircularProgress />
              </Box>
            ) : (
              <>
                <Typography paragraph sx={{ mt: 2 }}>
                  Lost your password? Please enter your username or email
                  address. You will receive a link to create a new password via
                  email.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="standard-basic"
                    label="Enter your Email"
                    variant="standard"
                    sx={{ width: "100%" }}
                  />

                  <Box sx={{ mt: 2, width: 150 }}>
                    <Button
                      sx={{ textTransform: "none" }}
                      type="submit"
                      variant="contained"
                      fullWidth>
                      Reset Password
                    </Button>
                  </Box>
                </form>
              </>
            )}
          </Box>

          <Box>
            <Divider></Divider>
            <Typography sx={{ mt: 2 }} variant="body2">
              Remember your password? <Link href="/">Login here</Link>.
            </Typography>
          </Box>
        </CardContent>
      </Paper>
    </Container>
  );
};

export default PasswordResetForm;
