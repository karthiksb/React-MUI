import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Divider, Paper, Box } from "@mui/material";

export default function ResetPasswordConfirmationForm() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate passwords
    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters long and contain both letters and numbers."
      );
      return;
    }

    if (password != retypePassword) {
      setError("Passwords do not match. Please re-enter your passwords.");
      return;
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRetypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };

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
              Reset Password
            </Typography>
            <Divider />
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
                  To reset your password, please enter a new password and
                  re-enter it for confirmation.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="password"
                    label="New Password"
                    type="password"
                    variant="standard"
                    sx={{ width: "100%", mt: 2 }}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <TextField
                    id="retypePassword"
                    label="Retype Password"
                    type="password"
                    variant="standard"
                    sx={{ width: "100%", mt: 2 }}
                    value={retypePassword}
                    onChange={handleRetypePasswordChange}
                  />
                  {error && (
                    <Typography color="error" sx={{ mt: 1 }}>
                      {error}
                    </Typography>
                  )}
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
}
