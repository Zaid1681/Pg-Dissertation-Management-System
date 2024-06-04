import { useState } from 'react';

const View = () => {

    const [isStudentDetailsVisible, setStudentDetailsVisible] = useState(false);
    const [isGuideDetailsVisible, setGuideDetailsVisible] = useState(false);

    const toggleStudentDetails = () => {
        setStudentDetailsVisible(!isStudentDetailsVisible);
        // Close Guide Details when opening Student Details
        setGuideDetailsVisible(false);
    };

    const toggleGuideDetails = () => {
        setGuideDetailsVisible(!isGuideDetailsVisible);
        // Close Student Details when opening Guide Details
        setStudentDetailsVisible(false);
    };

    const [isApproved] = useState(false);


    return (
        <div className="space-y-6 p-4">
            <h1 className="mb-6 text-center text-3xl font-bold">
                Project Hub: Collaborative Platform For Students And Faculty
            </h1>

            {/* Description */}
            <div className="mb-4">
                <label className="text-gray-600 block font-bold">
                    Project Hub, a cutting-edge collaborative platform, redefines the
                    educational experience by seamlessly integrating students and faculty
                    into a dynamic digital ecosystem. This user-friendly and adaptable
                    solution empowers students to take control of their educational
                    journey, managing projects across academic years and branches with
                    ease while granting faculty real-time insights into project progress.
                    Despite its potential, the project faces a formidable challenge in
                    surmounting resistance to change, both among faculty members
                    comfortable with established teaching methods and students accustomed
                    to traditional learning approaches. However, ’Project Hub’ unlocks a
                    world of opportunities, fostering increased student-faculty
                    engagement, showcasing recent work, nurturing networking and skill
                    development, promoting exposure to new ideas, supporting collaborative
                    research, engaging alumni, boosting campus promotion, advancing career
                    development, and facilitating global collaboration.
                </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                    <h2>Submission Date: 12-12-12</h2>
                </span>
                <span style={{ color: isApproved ? 'green' : 'red' }}>
                    {isApproved ? 'Approved' : 'Not Approved'}
                </span>
            </div>


            {/* Project Details */}
            <div>
                <div className="mb-4 cursor-pointer" onClick={toggleStudentDetails}>
                    <h4 className="mb-2 text-xl font-semibold text-black">
                        Student Details
                    </h4>
                </div>
                {isStudentDetailsVisible && (
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3.5">
                            <span className="text-black-400">Student Name:</span>
                            <a href="/profile" className="icon-link flex items-center">
                                <span className="text-black">Vishal Gupta</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <span className="text-black-400">Department:</span>
                            <span className="text-black">IT</span>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <span className="text-black-400">University:</span>
                            <span className="text-black dark:text-white">VCET</span>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <span className="text-black-400">Field of Interest:</span>
                            <div className="flex gap-1">
                                <a href="#" className="icon-link">
                                    <span className="text-black">MERN</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <div className="mb-4 cursor-pointer" onClick={toggleGuideDetails}>
                        <h4 className="mb-2 text-xl font-semibold text-black">
                            Guide Details
                        </h4>
                    </div>
                    {isGuideDetailsVisible && (
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3.5">
                                <span className="text-black-400">Guide Name:</span>
                                <a href="/profile" className="icon-link flex items-center">
                                    <span className="text-black">Vishal Gupta</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-3.5">
                                <span className="text-black-400">Guide Domain:</span>
                                <span className="text-black">IT</span>
                            </div>
                            {/* Add the rest of your project details here */}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default View;