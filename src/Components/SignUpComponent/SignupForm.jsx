import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { Typography, Button, Paper, Box } from "@mui/material";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolEmail: "",
    phoneNumber: "",
    course: "",
    courseYear: "",
    preferredStack: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box flex={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <Paper elevation={3} square={false} sx={{ padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <CustomInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="School Email"
            name="schoolEmail"
            type="email"
            value={formData.schoolEmail}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="Year"
            name="courseYear"
            select
            value={formData.courseYear}
            onChange={handleInputChange}
            options={["One", "Two", "Three", "Four"]}
            required
          />
          <CustomInput
            label="Course"
            name="course"
            select
            value={formData.course}
            onChange={handleInputChange}
            options={[
              "Software Engineering",
              "Computer Science",
              "IT",
              "Maths Science",
            ]}
            required
          />
          <CustomInput
            label="Preferred Stack"
            name="preferredStack"
            select
            value={formData.preferredStack}
            onChange={handleInputChange}
            options={[
              "Web Development",
              "Mobile",
              "AI/ML",
              "Power Platform",
              "Cyber Security",
            ]}
            required
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default SignupForm;
