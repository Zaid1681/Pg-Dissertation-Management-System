import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

const StudentProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
  
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        role: user?.role || "", 
        about: user?.about || "", 
        currentYear:user?.currentYear || "",
        currentSem:user?.currentSem || "",
        college: user?.college || "", 
        department: user?.department || "", 
        university:user?.university || "",
        guide:user?.guide || "",
        dissertation:user?.dissertation || "",
        goal: user?.goal || "", 
    });

    useEffect(() => {
      const fetchData = async () => {
        const updatedData = await axios.get(`/api/student/get/${user._id}`);
        setFormData(updatedData.data);
      };
  
      fetchData();
    }, [user._id, user.role]);
  
    const { name, email, role, about,currentYear, currentSem, college, department, university, guide, dissertation, goal } = formData;
    
    const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
    };
  
  
    const handleSubmit = async(e) => {
        e.preventDefault();
    
        if (role !== user.role) {
          toast.error("Role not matched!")
        } else {
          const userData = {
            name,
            email,
            role,
            about, 
            currentYear,
            currentSem,
            college, 
            department, 
            university,
            guide,
            dissertation,
            goal
          };

          //console.log("User ID:" + user._id);
          const res = await axios.put(
            `/api/student/update/${user._id}`,
            userData
          );
         
          toast.success("User updated successfully", {autoClose: 1000});
        }
      };
  

    return (
      <div className="w-[80%] mx-auto mt-10">
        <section className="w-[50%] mx-auto text-center">
          <h1 className="text-medium lg:text-extra-large font-semibold uppercase">
            EDIT PROFILE
          </h1>
        </section>
  
        <section className="w-[50%] mx-auto mt-10">
          <form onSubmit={handleSubmit}>
            <div className="name w-full">
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
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
  
            <div className="email my-5 w-full">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
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
  
  
            <div className="role my-5">
              <label htmlFor="role" className="text-sm font-semibold text-gray-700">
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
                <option value="student">Student</option>
                <option value="guide">Guide</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="about my-5">
              <label htmlFor="about" className="text-sm font-semibold">About</label>
              <textarea
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="about"
                name="about"
                value={about}
                placeholder="Enter About Yourself"
                onChange={handleChange}
              />
            </div>

            <div className="my-5">
              <label htmlFor="currentYear" className="text-sm font-semibold text-gray-700">
                Your Current Year:
              </label>
              <select
                id="currentYear"
                name="currentYear"
                className="border-2 w-full px-2 py-2 rounded-lg"
                value={currentYear}
                onChange={handleChange}
              >
                <option defaultValue="none">Select Year</option>
                <option value="I">I</option>
                <option value="II">II</option>
              </select>
            </div>

            <div className="my-5">
            <label htmlFor="currentSem" className="text-sm font-semibold text-gray-700">
                Your Current Sem:
              </label>
              <select
                id="currentSem"
                name="currentSem"
                className="border-2 w-full px-2 py-2 rounded-lg"
                value={currentSem}
                onChange={handleChange}
              >
                <option defaultValue="none">Select Your Semester</option>
                <option value="SEM 1">SEM 1</option>
                <option value="SEM 2">SEM 2</option>
                <option value="SEM 3">SEM 3</option>
                <option value="SEM 4">SEM 4</option>
                
              </select>
            </div>

            <div className="my-5">
              <label htmlFor="college" className="text-sm font-semibold">College</label>
              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="college"
                name="college"
                value={college}
                placeholder="Enter your College"
                onChange={handleChange}
              />
            </div>

            <div className="university my-5">
              <label htmlFor="university" className="text-sm font-semibold">University</label>
              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="university"
                name="university"
                value={university}
                placeholder="Enter your University"
                onChange={handleChange}
              />
            </div>

            <div className="goal my-5">
              <label htmlFor="goal" className="text-sm font-semibold">Goal</label>

              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="goal"
                name="goal"
                value={goal}
                placeholder="goal"
                onChange={handleChange}
              />
            </div>
  
            <div className="button">
              <button
                type="submit"
                className="bg-dark-blue text-offblue px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
  
      </div>
    );
}

export default StudentProfile