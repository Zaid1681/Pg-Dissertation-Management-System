import axios from "axios";
import { toast } from "react-toastify";

//const API_URL = "/api/users/";
const API_URL = "/api/";

// Register User

const register = async (userData) => {
  
  let REGISTER_API_URL = `${ API_URL + userData.role}/`
  
  const response = await axios.post(REGISTER_API_URL + 'register', userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    toast.success("User Registered Successfully", { autoClose: 1000 });
  }

  return response.data;
};

// login User

const login = async (userData) => {

  let LOGIN_API_URL = `${ API_URL + userData.role}/`
  const response = await axios.post(LOGIN_API_URL + "login", userData);


  if (response.data) {
    console.log(response.data)
    localStorage.setItem("user", JSON.stringify(response.data));
    toast.success("Successfully Logged In", { autoClose: 1000 });
  }

  return response.data;
};


// Logout User

const logout = () => {
  localStorage.removeItem("user");
  toast.success("Successfully Logged Out", { autoClose: 1000 });
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
