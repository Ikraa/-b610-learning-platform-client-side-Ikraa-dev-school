import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Sidebar = ({sidebarData}) => {
  
    const navigate=useNavigate()
  
    return (
        <div className="bg-black   w-[250px]">
        <div className="sidebar-wrapper">
          {sidebarData?.map((item) => (
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