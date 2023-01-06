import React, { useEffect, useState } from 'react';
import Content from './Content';

const ContentDetails = () => {
    const [contentDetails,setContentDetails]=useState([])
    useEffect(()=>{
       fetch("./Sidebar.json")
       .then(res=>res.json())
       .then(data=>setContentDetails(data))
    })
    return (
        <div className='grid grid-cols-2 gap-4 ml-2 h-[600px] overflow-scroll'>
            {
                contentDetails.map(item=><Content id={item.id} item={item} />)
            }
        </div>
    );
};

export default ContentDetails;