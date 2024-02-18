import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  styled,
  Skeleton,
  Box,
} from "@mui/material";

const PatientIdForm = () => {
  const [patientId, setPatientId] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;

    // Validate that the input is a number and does not exceed 8 digits
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

    // Handle form submission logic here
    // You can use the 'patientId' state for further processing
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
          Submit
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
