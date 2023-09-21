import React, { useState } from "react";
import CustomInput from "../SignUp/CustomInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastStyles } from "../../toastConfig";
import { Typography, Button, Paper, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/styles";
import useStyles from "../SignUp/AuthStyles";
import Axios from "axios";

function LoginForm() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
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
    <Box>
      <Typography variant="h4" gutterBottom className={classes.registerTitle}>
        Login
      </Typography>
      <Box>
        <Paper elevation={3} square={false} className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="User Name"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
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

            <Button
              type="submit"
              variant="contained"
              className={classes.submitBTN}
            >
              Login
            </Button>
            <Typography
              variant="body2"
              component="p"
              gutterBottom
              className={classes.dontHavAccount}
            >
              Don't have an account? <a href="/signup">Signup</a>
            </Typography>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}

export default LoginForm;
