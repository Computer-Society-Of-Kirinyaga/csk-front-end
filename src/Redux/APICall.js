import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginStart, loginSuccess, loginFailure, logOut } from "./userSlice";
import { toastStyles } from "./../toastConfig";
import Axios from "axios";
import { apiDomain } from "./../utils/apiDomain";

export const loginUser = async (dispatch, user, callback) => {
  dispatch(loginStart());
  try {
    const { data } = await Axios.post(`${apiDomain}/users/auth/login`, user);
    if (data.token) {
      setIsLoading(false);
      setButtonText("Login");
      dispatch(loginSuccess(data));
      toast.success("Login Successful", toastStyles.success);
      callback();
    }
  } catch (response) {
    setIsLoading(false);
    setButtonText("Login");
    dispatch(loginFailure());
    toast.error(response.response.data.message, toastStyles.error);
  }
};

export const logoutUser = (dispatch) => {
  dispatch(logOut());
  toast.success("Logout Successful", toastStyles.success);
};
