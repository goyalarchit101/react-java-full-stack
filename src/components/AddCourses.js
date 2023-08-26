import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";
import base_url from '../api/Constants';
import { toast } from 'react-toastify';

function AddCourses() {
    const initialState = {
        id: '',
        title: '',
        description: ''
    }

    const [inputForm, setInputForm] = useState(initialState)

    const inputsHandler = (e) => {
        e.preventDefault();
        setInputForm({...inputForm, [e.target.name]: e.target.value })
    }

    const submitButton = (e) => {
        axios.post(`${base_url}/courses`, inputForm)
            .then(res => {
                setInputForm(res.data);
                toast.success("course added scccessfully");
                clearFrom();

            },
                (error) => {
                    console.log(error);
                    toast.error("something went wrong");
                }
            )
    }

    const clearFrom = () => {
        // e.preventDefault();
        setInputForm(initialState);
    }


    return (
        <Form className='m-3' >
            <FormGroup>
                <Label for="id">Course Id</Label>
                <Input type="text" name="id" id="CourseId" placeholder="Input the Id" onChange={inputsHandler}
                    value={inputForm.id}
                />

                <Label for="title">Title</Label>
                <Input type="text" name="title" id="formTitle" placeholder="Input the title" onChange={inputsHandler}
                    value={inputForm.title}
                />

                <Label for="description">Description</Label>
                <Input type="text" name="description" id="formTitle" placeholder="Input the Description" onChange={inputsHandler}
                    value={inputForm.description}
                />

            </FormGroup>

            <Button onClick={submitButton} color="success">Add Course</Button>
            <Button onClick={clearFrom} className='m-3' color="warning">Clear</Button>
        </Form>
    )
}

export default AddCourses
