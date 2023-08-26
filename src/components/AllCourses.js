import React, { useEffect, useState } from 'react'
import Courses from './Courses';
import axios from "axios";
import base_url from '../api/Constants';
import { toast } from 'react-toastify';


function AllCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllcourses();
    }, [])

    const getAllcourses = () => {
        axios.get(`${base_url}/courses`)
            .then(res => {
                setCourses(res.data);
                toast.success("All courses are loaded");
            },
                (error) => {
                    console.log(error);
                    toast.error("something went wrong");
                }
            )
    }
    return (
        <div>
            {courses.length > 0 ?
                courses.map((course) => {
                    return <Courses getAllcourses= {getAllcourses}  key={course.id} course={course} > </Courses>;
                })
                :
                <h1>NO course found</h1>
            }
        </div>
    )
}

export default AllCourses;


