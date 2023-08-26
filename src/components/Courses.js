import React from 'react';
import {
    Card, CardText, CardBody,
    CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from '../api/Constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";



const deleteCourse = (id, getAllcourses) => {
    axios.delete(`${base_url}/courses/`+id)
        .then(res => {
            toast.success("course deleted scccessfully");
            getAllcourses();
        },
            (error) => {
                console.log(error);
                toast.error("something went wrong");
            }
        )
}


const Courses = ({course, getAllcourses}) => {

    return (
        <div>
            <Card className='text-center my-1'>
                <CardBody>
                    <CardSubtitle>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container>
                        <Button color='warning'>
                            <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/updateCourse">Update</Link>
                        </Button>
                        <Button onClick={()=>deleteCourse(course.id, getAllcourses)}  style={{ margin: "20px" }} color='danger '>Delete
                        </Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Courses
