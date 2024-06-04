import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    role: "", 
  });

  const { name, email, password, cpassword, role } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, { autoClose: 1000 });
    }
    if (isSuccess || user) {
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSwitch = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      console.log("Password not matched");
    } else {
      const userData = {
        name,
        email,
        password,
        role, // Include the selected role
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-[80%] mx-auto mt-10">
      <section className="w-[50%] mx-auto text-center">
        <h1 className="text-medium lg:text-extra-large font-semibold uppercase">
          Register
        </h1>
        {/* <p>Register and Start</p> */}
      </section>

      <section className="w-[50%] mx-auto mt-10">
        <form onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="name"
              className="border-2 w-full px-2 py-2 rounded-lg"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your Name"
              onChange={handleChange}
            />
          </div>

          <div className="email my-5">
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

          <div className="cpassword my-5">
            <input
              type="password"
              className="border-2 w-full px-2 py-2 rounded-lg"
              id="cpassword"
              name="cpassword"
              value={cpassword}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>

          <div className="role my-5">
            <label htmlFor="role" className="text-gray-700">
              Select User Role:
            </label>
            <select
              id="role"
              name="role"
              className="border-2 w-full px-2 py-2 rounded-lg"
              value={role}
              onChange={handleChange}
            >
              <option defaultValue="none">Select your role</option>
              <option value="student">student</option>
              <option value="guide">guide</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <div className="button">
            <button
              type="submit"
              className="bg-dark-blue text-offblue px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              Register
            </button>
          </div>
        </form>
      </section>

      <section className="w-[50%] mx-auto mt-5">
        <button className="text-red-500">
          Already have an account?{" "}
          <span
            onClick={handleSwitch}
            className="underline text-blue-700 hover:text-blue-500 cursor-pointer"
          >
            Login
          </span>
        </button>
      </section>
    </div>
  );
};

export default Register;
