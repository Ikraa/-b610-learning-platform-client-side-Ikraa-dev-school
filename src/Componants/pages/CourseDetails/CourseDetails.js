import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../Navbar/Nav';

const CourseDetails = () => {
    const {id}=useParams()
    const [course,setCourse]=useState({})
    useEffect(()=>{
        fetch("../Sidebar.json")
        .then(res=>res.json())
        .then(data=>{
            const singleData=data.find(item=>item.id=== +id)
            setCourse(singleData)
            console.log(singleData)

        })
     },[id])
    console.log(course)
    return (
        <div>
            <Nav />
            <div className='flex items-center  w-[80%] mx-auto h-[80vh]'>
                <div className='grid grid-cols-2 '>
                    <img className='w-[100%] h-[300px] object-cover' src={course.url} alt="" />
                    <div className='ml-[30px]'>
                        <h1 className='text-3xl font-bold'>{course.title}</h1>
                        <h3 className='font-semibold text-lg mt-2'>{course?.headline}</h3>
                        <p className='mt-2'>{course?.description}</p>
                        {
                            [...Array(course.rating).keys()].map(item => <i class="fa-sharp fa-solid fa-star text-[#F7AE09]"></i>)
                        }

                      <div>
                      <button className='btn btn-primary mt-3  text-white font-bold'>Get Premium Access</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;