import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Work Sans, sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        paper: {
          border: 0,
        },
      },
    },
    MuiDrawer: {
      defaultProps: {},
      styleOverrides: {
        paper: {
          backgroundColor: "#EEEEEE",
          border: 0,
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
          </Routes>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
