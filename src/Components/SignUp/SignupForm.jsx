import React, { useState } from "react";
import CustomInput from "./CustomInput";
import {
  Typography,
  Button,
  Paper,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import useStyles from "./FormStyles";
import Axios from "axios";
import { apiDomain } from "../../utils/apiDomain";

function SignupForm() {
  const classes = useStyles();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userName: "",
    phoneNo: "",
    course: "",
    yearOfStudy: "",
    techStack: [],
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${apiDomain}/users`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch(({ response }) => {
        console.log(response);
      });

    // console.log(formData);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom className={classes.registerTitle}>
        Register
      </Typography>
      <Paper elevation={3} square={false} className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <CustomInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="User Name"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
          <CustomInput
            label="Phone Number"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
            required
          />

          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="yearOfStudy">Year</InputLabel>
            <Select
              label="Year"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </FormControl>
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

          <Typography variant="subtitle1" gutterBottom>
            Preferred Stack
          </Typography>
          <FormGroup>
            <FormControlLabel
              name="techStack"
              value="techStack"
              control={<Checkbox defaultChecked />}
              label="Cyber security"
            />
            <FormControlLabel
              name="techStack"
              value="techStack"
              control={<Checkbox />}
              label="Power Platform"
            />
            <FormControlLabel
              name="techStack"
              value="techStack"
              control={<Checkbox />}
              label="Web development"
            />
          </FormGroup>

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
            className={classes.submitBTN}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default SignupForm;
