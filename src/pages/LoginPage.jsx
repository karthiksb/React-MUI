import Appbar from "../components/Appbar";
import { Box } from "@mui/system";
import LoginForm from "../features/Login/Components/LoginForm";
import { Route, Routes } from "react-router-dom";
import PasswordResetForm from "../features/forgot-password/Components/PasswordResetForm";
import ResetPasswordConfirmationForm from "../features/reset-password/Components/ResetPasswordConfirmationForm";
function LoginPage() {
  return (
    <>
      <Box>
        <Routes>
          <Route
            index
            element={
              <>
                <Appbar showDrawerIcon={false} />
                <LoginForm />
              </>
            }
          />
          <Route
            path="forgotpassword"
            element={
              <>
                <Appbar showDrawerIcon={false} />
                <PasswordResetForm />
              </>
            }
          />
          <Route
            path="resetpassword"
            element={
              <>
                <Appbar showDrawerIcon={false} />
                <ResetPasswordConfirmationForm />
              </>
            }
          />
        </Routes>
      </Box>
    </>
  );
}

export default LoginPage;
