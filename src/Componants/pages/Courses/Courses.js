import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Nav from "../../Navbar/Nav";
import ContentDetails from "./ContentDetails";
import "./course.css";
import Sidebar from "./Sidebar";
const Courses = () => {
  const sidebarData=useLoaderData()
 console.log(sidebarData,"sidebar data")
  return (
    <div div className="max-h-screen overflow-hidden">
      <Nav />
      <div className="flex mt-2">
        <Sidebar sidebarData={sidebarData?.data} />
        <div className=" h-[60%] flex-1 overflow-scroll">

         <ContentDetails contentdetails={sidebarData?.data} />

        </div>
      </div>
    </div>
  );
};

export default Courses;
