import React from "react";
import StudentSidebar from "../components/StudentSidebar.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Student() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user.role != "student") {
      navigate("/login");
    }
  }, [user, navigate]);
  return <StudentSidebar />;
}

export default Student;
