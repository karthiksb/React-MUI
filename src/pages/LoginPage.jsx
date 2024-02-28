import React from "react";
import Appbar from "../components/Appbar";
import { Box } from "@mui/system";
import LoginForm from "../Feature/Login/LoginForm";
import { Route, Routes } from "react-router-dom";
import PasswordResetForm from "../Feature/ForgotPassword/PasswordResetForm";
import ResetPasswordConfirmationForm from "../Feature/ResetPassword/ResetPasswordConfirmationForm";
function LoginPage() {
  return (
    <>
      <Box>
        <Routes>
          <Route
            index
            element={
              <>
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
