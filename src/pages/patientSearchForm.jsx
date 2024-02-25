import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Skeleton,
  Box,
} from "@mui/material";


const PatientIdForm = () => {
  const [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;

    if (/^\d+$/.test(input) && input.length <= 8) {
      setPatientId(input);
      setError("");
    } else {
      setPatientId("");
      setError("Please enter a valid patient ID (up to 8 digits)");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" component="h2" gutterBottom>
          Enter Patient ID
        </Typography>

        <TextField
          label="Patient ID"
          variant="outlined"
          fullWidth
          value={patientId}
          onChange={handleChange}
          error={Boolean(error)}
          helperText={error}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!patientId}
          style={{ marginTop: "16px" }}>
          Search
        </Button>
      </form>
      <Box sx={{ width: "100%", mt: "10px" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />

        {/* <Skeleton animation={false} /> */}
      </Box>
    </Container>
  );
};

export default PatientIdForm;
