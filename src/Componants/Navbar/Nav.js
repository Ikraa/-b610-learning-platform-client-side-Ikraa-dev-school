import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.config";

const Nav = () => {
    const [user,loading]=useAuthState(auth)
    const [isDark,setIsDark]=useState(false)
    console.log(user)
    if(loading){
        return ;
    }
  const menuElement = (
    <>
      <li>
        <button className={`btn ${isDark?"bg-black text-white":"bg-white text-black"}`} onClick={()=>setIsDark(!isDark)}>{isDark?"Dark":"Light"}</button>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/courses"}>Course</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/faq"}>FAQ</Link>
      </li>
     {user?.email && <li data-tip={user?.displayName} className="flex items-center tooltip tooltip-bottom mr-[20px]">
        <img style={{borderRadius:"50%"}} className="  h-12 w-12 object-cover p-1 ml-4" src={user?.photoURL} alt="" />
       </li>}
     {!user?.email ? <li className="flex items-center mr-[40px]">
        <Link to={"/login"}>Login</Link>
      </li>:<li className="flex items-center mr-[40px]"><button onClick={()=>signOut(auth)} className="btn btn-md btn-error ">LogOut</button></li>}

       

      
    </>
  );
  console.log(user,"url");
  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuElement}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dev School</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuElement}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
