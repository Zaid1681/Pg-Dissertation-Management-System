import React, { useState } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function AddDissertations() {
  const { user } = useSelector((state) => state.auth);
  console.log("log data", user);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    year: "",
    semester: "",
    guideDomain: "",
    guideName: "",
    fieldOfInterest: "",
    studentId: user?._id,
    studentname: user?.name,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object to send files along with other details
    // const formData = new FormData();
    // formData.append("title", projectDetails.title);
    // formData.append("description", projectDetails.description);
    // formData.append("year", projectDetails.year);
    // formData.append("semester", projectDetails.semester);
    // formData.append("guideDomain", projectDetails.guideDomain);
    // formData.append("guideName", projectDetails.guideName);
    // formData.append("fieldOfInterest", projectDetails.fieldOfInterest);
    // formData.append("studentId", projectDetails.studentId);
    // formData.append("studentname", projectDetails.studentname);
    // console.log(formData);

    try {
      // Make a POST request using axios
      const response = await axios.post("/api/idea/submitIdea", projectDetails);

      // Handle response or perform actions upon successful submission
      console.log("Submission successful:", response.data);

      // Reset form after successful submission
      setProjectDetails({
        title: "",
        description: "",
        year: "",
        semester: "",
        guideDomain: "",
        guideName: "",
        fieldOfInterest: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  console.log(projectDetails);

  return (
    <>
      {/* <h1 className='text-center font-bold mt-10'>Add your Dissertations</h1> */}
      <div className="p-4 dark:bg-boxdarktext-white ">
        <h1 className="text-2xl font-bold">Research Details</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block  text-black">Dissertation Title</label>
            <input
              type="text"
              name="title"
              value={projectDetails.title}
              onChange={handleInputChange}
              className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none bg-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block  text-black">Abstract</label>
            <textarea
              name="description"
              rows="4"
              value={projectDetails.description}
              onChange={handleInputChange}
              className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none  bg-gray-300"
            />
          </div>
          {/* year and semester */}
          <div className="mb-4 flex py-3">
            <div className="mr-2 flex-1">
              <label className="block  text-black">Year</label>
              <select
                name="year"
                value={projectDetails.year}
                onChange={handleInputChange}
                className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none   bg-gray-300"
              >
                <option value="">Select Year</option>
                <option value="III">First Year</option>
                <option value="IV">Second Year</option>
              </select>
            </div>
            <div className="mr-2 flex-1">
              <label className="block  text-black">Semester</label>
              <select
                name="semester"
                value={projectDetails.semester}
                onChange={handleInputChange}
                className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none bg-gray-300"
              >
                <option value="">Select Semester </option>
                <option value="I">Sem-1</option>
                <option value="II">Sem-2</option>
                <option value="III">Sem-3</option>
                <option value="IV">Sem-4</option>
              </select>
            </div>
          </div>
          {/* year and semester */}
          <div className="mb-4 flex py-3">
            <div className="mr-2 flex-1">
              <label className="block  text-black">Domain</label>
              <select
                name="guideDomain"
                value={projectDetails.guideDomain}
                onChange={handleInputChange}
                className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none bg-gray-300"
              >
                <option value="">Select Domain</option>
                <option value="I">AI/ML</option>
                <option value="II">Data Science</option>
                <option value="III">Robotics</option>
                <option value="IV">Cyber Security</option>
                <option value="V">Blockchain</option>
                <option value="VI">Others</option>
              </select>
            </div>
            <div className="mr-2 flex-1">
              <label className="block  text-black">Preferred Guide</label>
              <input
                type="text"
                name="guideName"
                value={projectDetails.guideName}
                onChange={handleInputChange}
                className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none bg-gray-300"
              />
            </div>{" "}
          </div>
          <div>
            <div className="mb-4 flex">
              <div className="mr-2 flex-1">
                <label className="block  text-black">Field Of interest</label>
                <div className="flex gap-10">
                  {" "}
                  <input
                    type="text"
                    name="fieldOfInterest"
                    value={projectDetails.fieldOfInterest}
                    onChange={handleInputChange}
                    className="focus:border-blue-500 w-full rounded border px-3 py-2 focus:outline-none  bg-gray-300"
                  />
                </div>
              </div>{" "}
            </div>
            <div className="m-auto flex justify-center">
              {/* <Button type="primary  text-black dark:text-white bg-blue">Primary Button</Button> */}
              <Button
                type="primary"
                to="/"
                onClick={handleSubmit}
                className="inline-flex items-center justify-center rounded bg-primary py-4 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-15"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddDissertations;
