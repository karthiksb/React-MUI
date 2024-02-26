import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {  Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputFiled from "../../../components/InputField";
import ButtonInput from "../../../components/ButtonInput";


export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/dashboard");
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 20 }}>
      <Paper elevation={2} sx={{ px: 3, py: 3, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <InputFiled name="email" margin="normal" label="Email address" type="text"/>
            <InputFiled name="password" margin="normal" label="Password"/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonInput
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,color:'red' }}>
             Sign in
            </ButtonInput>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
