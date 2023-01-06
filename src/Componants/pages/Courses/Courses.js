import React, { useEffect, useState } from "react";
import Nav from "../../Navbar/Nav";
import ContentDetails from "./ContentDetails";
import "./course.css";
import Sidebar from "./Sidebar";
const Courses = () => {

  return (
    <div div className="max-h-screen overflow-hidden">
      <Nav />
      <div className="flex mt-2">
        <Sidebar />
        <div className=" h-[60%] flex-1 overflow-scroll">

         <ContentDetails />

        </div>
      </div>
    </div>
  );
};

export default Courses;
