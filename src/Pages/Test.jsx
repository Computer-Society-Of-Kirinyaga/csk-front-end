import React, { useState } from "react";
import SignupLogo from "../assets/images/SignupLogo.png";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Grid,
  Hidden,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
  },
}));

const SignupPage = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolEmail: "",
    phoneNumber: "",
    courseYear: "",
    preferredStack: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "courseYear") {
      const isValidCourseYear = value >= 1 && value <= 4;
      if (isValidCourseYear) {
        setFormData({ ...formData, [name]: value });
      } else {
        alert("Invalid Course Year");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={4}>
        <Hidden smDown>
          <Grid item xs={12} sm={6} className={classes.imageContainer}>
            <img
              src={SignupLogo}
              alt="logo of the Computer Society of Kirinyaga"
              className={classes.image}
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "1rem" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Register
            </Typography>
            <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="School Email"
            name="schoolEmail"
            type="email"
            value={formData.schoolEmail}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Course Year"
            name="courseYear"
            type="number"
            value={formData.courseYear}
            onChange={handleInputChange}
            required
            margin="normal"
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="preferredStack">Preferred Stack</InputLabel>
            <Select
              label="Preferred Stack"
              name="preferredStack"
              value={formData.preferredStack}
              onChange={handleInputChange}
            >
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Mobile">Mobile</MenuItem>
              <MenuItem value="AI/ML">AI/ML</MenuItem>
              <MenuItem value="Power Platform">Power Platform</MenuItem>
              <MenuItem value="Cyber Security">Cyber Security</MenuItem>
            </Select>
          </FormControl>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupPage;
