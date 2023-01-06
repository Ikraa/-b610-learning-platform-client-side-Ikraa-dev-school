import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [sidebarData,setSidebarData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
       fetch("./Sidebar.json")
       .then(res=>res.json())
       .then(data=>setSidebarData(data))
    })
    return (
        <div className="bg-black   w-[250px]">
        <div className="sidebar-wrapper">
          {sidebarData.map((item) => (
            <p key={item.id}>
              <i class={item.icon}></i>{" "}
              <span onClick={()=>navigate(`/courses/${item?.id}`)}  className="ml-4">{item.title}</span>
            </p>
          ))}
        </div>
      </div>
    );
};

export default Sidebar;