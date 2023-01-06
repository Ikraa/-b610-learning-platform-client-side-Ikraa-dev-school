import React, { useEffect, useState } from 'react';
import Content from './Content';

const ContentDetails = ({contentdetails}) => {
    
  
    return (
        <div className='grid grid-cols-2 gap-4 ml-2 h-[600px] overflow-scroll'>
            {
                contentdetails.map(item=><Content id={item.id} item={item} />)
            }
        </div>
    );
};

export default ContentDetails;