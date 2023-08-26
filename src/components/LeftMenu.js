import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup} from 'reactstrap';

function LeftMenu() {
    return (
        <div className='my-1'>
            <ListGroup>
                <Link className='list-group-item list-group-item-action' tag="a" to="/">Home</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="/addCourse">Add Course</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="/viewCourse">View Course</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="/about">About</Link>
                <Link className='list-group-item list-group-item-action' tag="a" to="/contact">Contact</Link>
            </ListGroup>
        </div>
    )
}

export default LeftMenu
