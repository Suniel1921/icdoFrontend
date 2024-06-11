import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Layout from "./components/layout/Layout";
import Banner from "./components/banner/Banner";
import About from "./components/pages/about/About";
import OurTeam from "./components/pages/ourteams/OurTeam";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import toast, { Toaster } from "react-hot-toast";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import Staffs from "./components/admin/Staffs";
import StaffsList from "./components/admin/StaffsList";
import Contact from "./components/pages/contact/Contact";
import ContactData from "./components/admin/ContactData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  //for aos animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* protected admin routes */}
            <Route path="/dashboard" element={<AdminProtectedRoute />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="/dashboard/admin/staffs" element={<Staffs />} />
              <Route path="/dashboard/admin/staffList" element={<StaffsList />}/>
              <Route path="/dashboard/admin/contact" element={<ContactData />}/>
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
