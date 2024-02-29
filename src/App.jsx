import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImage from "./assets/art.png";


const theme = createTheme({
  typography: {
    fontFamily: "work sans, sans-serif",
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
        root:{
        },
        paper: {
          color:'white',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`, // Add a semi-transparent overlay
        },
      },
    },
  
  }  
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
