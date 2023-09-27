import React, { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoadingButton } from "@mui/lab";
import CustomInput from "./CustomInput";
import techStackOptions from "./TechStackOptions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastStyles } from "../../toastConfig";
import "react-toastify/dist/ReactToastify.css";
import {
  Typography,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import useStyles from "./AuthStyles";
import Axios from "axios";
import { apiDomain } from "../../utils/apiDomain";

function SignupForm() {
  const navigate = useNavigate();
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
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Register");

  const handleTechStackChange = (e) => {
    const { value } = e.target;
    if (formData.techStack.includes(value)) {
      setFormData({
        ...formData,
        techStack: formData.techStack.filter((item) => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        techStack: [...formData.techStack, value],
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // action on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }
    setIsLoading(true);
    setButtonText("Please Wait");

    // post request to API
    Axios.post(`${apiDomain}/users`, formData)
      .then((response) => {
        // console.log(response);
        setIsLoading(false);
        setButtonText("Register");
        toast.success("Account created successfully");
        navigate("/login");
      })
      .catch(({ response }) => {
        console.log(response);
        setIsLoading(false);
        setButtonText("Register");
        toast.error(response.data.message, toastStyles.error);
        toast.error(response.data.error, toastStyles.error);
      });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom className={classes.registerTitle}>
        Register
      </Typography>
      <Paper
        elevation={3}
        square={false}
        className={classes.paper}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box className={classes.inputParent}>
            <Box className={classes.inputElm}>
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
            </Box>
            <Box className={classes.inputElm}>
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
            </Box>
          </Box>

          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="yearOfStudy">Year</InputLabel>
            <Select
              label="Year"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
            >
              <MenuItem value="1"> First </MenuItem>
              <MenuItem value="2"> Second </MenuItem>
              <MenuItem value="3">Third</MenuItem>
              <MenuItem value="4">Fourth</MenuItem>
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
            <Grid container>
              {techStackOptions.map((option) => (
                <Grid item xs={12} md={6} key={option}>
                  <FormControlLabel
                    name="techStack"
                    value={option}
                    control={
                      <Checkbox
                        checked={formData.techStack.includes(option)}
                        onChange={handleTechStackChange}
                      />
                    }
                    label={option}
                  />
                </Grid>
              ))}
            </Grid>
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
          {!passwordMatch && (
            <Typography variant="caption" color="error">
              Passwords do not match.
            </Typography>
          )}
          <LoadingButton
            sx={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className={classes.submitBTN}
            type="submit"
            variant="outlined"
            loadingPosition="start"
            loading={isLoading}
            startIcon={<HowToRegIcon />}
          >
            {buttonText}
          </LoadingButton>
          <Typography
            variant="body2"
            component="p"
            gutterBottom
            className={classes.HaveAccount}
          >
            Have an account? <a href="/login">Login</a>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
}

export default SignupForm;
