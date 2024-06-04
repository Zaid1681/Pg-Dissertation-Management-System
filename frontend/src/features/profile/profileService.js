import axios from "axios";
import { toast } from "react-toastify";

//const API_URL = "/api/users/";
const API_URL = "/api/";

// get User

const register = async (userData) => {
  
    let REGISTER_API_URL = `${ API_URL + userData.role}/`
    
    const response = await axios.post(REGISTER_API_URL + 'register', userData);
  
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("User Registered Successfully", { autoClose: 1000 });
    }
  
    return response.data;
  };