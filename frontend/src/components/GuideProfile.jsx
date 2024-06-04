import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GuideProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
  
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        role: user?.role || "", 
        college: user?.college || "", 
        // department: user?.department || "", 
        university:user?.university || "",
        qualification:user?.qualification || "",
        expertise:user?.expertise || "",
        achievements: user?.achievements || "", 
        experience: user?.experience || "", 
    });
 
    useEffect(() => {
      const fetchData = async () => {
        const updatedData = await axios.get(`/api/${user.role}/get/${user._id}`);
        setFormData(updatedData.data);
      };
  
      fetchData();
    }, [user._id, user.role]);
  
    const { name, email, role, college, university, qualification, expertise, achievements, experience } = formData;
    
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
            college, 
            university,
            qualification,
            expertise,
            achievements,
            experience
          };

          //console.log("User ID:" + user._id);
          const res = await axios.put(
            `/api/${user.role}/update/${user._id}`,
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

            <div className="qualification my-5">
              <label htmlFor="qualification" className="text-sm font-semibold">Qualification</label>
              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="qualification"
                name="qualification"
                value={qualification}
                placeholder="Enter your qualification"
                onChange={handleChange}
              />
            </div>

            <div className="expertise my-5">
              <label htmlFor="expertise" className="text-sm font-semibold">Expertise</label>

              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="expertise"
                name="expertise"
                value={expertise}
                placeholder="expertise"
                onChange={handleChange}
              />
            </div>

            <div className="expertachievementsise my-5">
              <label htmlFor="achievements" className="text-sm font-semibold">Achievements</label>

              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="achievements"
                name="achievements"
                value={achievements}
                placeholder="achievements"
                onChange={handleChange}
              />
            </div>

            <div className="experience my-5">
              <label htmlFor="experience" className="text-sm font-semibold">Experience</label>

              <input
                type="text"
                className="border-2 w-full px-2 py-2 rounded-lg"
                id="experience"
                name="experience"
                value={experience}
                placeholder="Experience"
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

export default GuideProfile