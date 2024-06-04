import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "", // Default role
  });

  const { email, password, role } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, { autoClose: 1000 });
      dispatch(reset());
    }

    if (isSuccess && user) {
      // Check if the entered role during login matches the registered role
      // Check the role and redirect accordingly
      if (user.role === "student") {
        navigate("/student");
      } else if (user.role === "guide") {
        navigate("/guide");
      } else if (user.role === "admin") {
        navigate("/admin");
      }
    }
    dispatch(reset());
  }, [user, role, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSwitch = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      role, // Include the role in the login request
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-[80%] mx-auto mt-10">
      <section className="w-[50%] mx-auto text-center">
        {/* <img
          src="https://cdn.expresspharma.in/wp-content/uploads/2019/07/23170458/Ministry-of-AYUSH-logo-1-3.jpg"
          alt=""
          className="w-22 mx-auto"
        /> */}
        <h1 className="text-medium lg:text-extra-large font-semibold uppercase">
          Login
        </h1>
        {/* <p>Login and Start</p> */}
      </section>

      <section className="w-[50%] mx-auto mt-10">
        <form onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="email"
              className="border-2 w-full px-2 py-2 rounded-lg"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </div>

          <div className="password my-5">
            <input
              type="password"
              className="border-2 w-full px-2 py-2 rounded-lg"
              id="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>

          <div className="role my-5">
            <select
              className="border-2 w-full px-2 py-2 rounded-lg"
              id="role"
              name="role"
              value={role}
              onChange={handleChange}
            >
              <option value="none">Select Your Role</option>
              <option value="student">student</option>
              <option value="guide">guide</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <div className="">
            <button
              type="submit"
              className="bg-dark-blue text-offblue px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Login
            </button>
          </div>
        </form>
      </section>

      <section className="w-[50%] mx-auto mt-5">
        <button className="text-red-500">
          New Here?{" "}
          <span
            onClick={handleSwitch}
            className="underline text-blue-700 hover:text-blue-500 cursor-pointer"
          >
            Register
          </span>
        </button>
      </section>
    </div>
  );
};

export default Login;
