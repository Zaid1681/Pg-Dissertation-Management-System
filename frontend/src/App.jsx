import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsTable from "./components/AdminSection/StudentsTable";
import { NavbarTools, Navbar } from "./components/index";
import {
  Home,
  About,
  Tutorials,
  ContactUs,
  Researches,
  FAQ,
  Login,
  Register,
  Student,
  Guide,
  Admin,
  Profile,
  View,
} from "./pages/index";
import CounterCard from "./components/CounterCard";
import StdAllDissertation from "./components/StdAllDissertation";
import AddDissertations from "./components/AddDissertations";
import GuideDashboard from "./components/GuideDashboard";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminSection/AdminDashboard";
//import ViewStudents from "../components/AdminSection/ViewDissertations";
import ViewGuides from "./components/AdminSection/ViewGuides";
import ViewDissertations from "./components/AdminSection/ViewDissertations";
import GroupDissertation from "./components/GroupDissertations";
import SynopsisTable from "./components/AdminSection/SynopsisTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTools />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view" element={<View />} />

          <Route path="/guide" element={<Guide />}>
            <Route path="viewdissertations" element={<ViewDissertations />} />
            <Route path="groupdissertations" element={<GroupDissertation />} />

            <Route path="add" element={<AddDissertations />} />
            <Route path="all" element={<StdAllDissertation />} />
            <Route path="/guide" element={<GuideDashboard />} />
          </Route>

          <Route path="/student" element={<Student />}>
            <Route path="add" element={<AddDissertations />} />
            <Route path="all" element={<StdAllDissertation />} />
            <Route path="/student" element={<StudentDashboard />} />
          </Route>

          <Route path="/admin" element={<Admin />}>
            <Route path="viewsynopsis" element={<SynopsisTable />} />
            <Route path="viewguides" element={<ViewGuides />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/counter" element={<CounterCard />} />
          <Route path="/table" element={<StudentsTable />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
