import React from 'react';
import { useNavigate } from 'react-router-dom';

const Content = ({item}) => {
    const navigate=useNavigate()
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl p-2">
                <figure><img className='h-[200px] w-[300px]' src={item?.url} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{item?.title}</h2>
                    <p>{item?.headline}</p>
                    <div class="card-actions justify-end">
                        <button onClick={()=>navigate(`/courses/${item?.id}`)} class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;