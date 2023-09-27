import React, { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoadingButton } from "@mui/lab";
import CustomInput from "../SignUp/CustomInput";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Typography, Paper, Box } from "@mui/material";
import useStyles from "../SignUp/AuthStyles";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/APICall";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Login");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonText("Please Wait");
    await loginUser(dispatch, formData, () => navigate("/"));
    // console.log(formData);
    setIsLoading(false);
    setButtonText("Login");
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

            <LoadingButton
             sx={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
              type="submit"
              variant="outlined"
              loadingPosition="start"
              loading={isLoading}
              startIcon={<HowToRegIcon />}
              className={classes.submitBTN}
            >
              {buttonText}
            </LoadingButton>
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
