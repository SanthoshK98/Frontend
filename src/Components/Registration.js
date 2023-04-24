import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function BasicExample() {
const[userdata,setUserdata] = useState(
    {
        name:'',
        email:'',
        mobile:'',
        password:'',
        confirmpassword:''

    }
)

const inputHandler = (e)=>{
    setUserdata({...userdata,[e.target.name]:e.target.value})
}

const formHandler =  async (e)=>{
  e.preventDefault();
  try{

let found = await  axios.post('http://localhost:5099/postuser',userdata)
console.log(found)
}catch(err){
    console.log(err.message)
  }
  } 





  return (
    <div>
      <center>

   
      <Card style={{ width: '18rem' }}>

      <Card.Title>   Registration Page</Card.Title>
      <Card.Body>
    <Form onSubmit={formHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name='name' onChange={inputHandler} placeholder="Enter Your Name" />
     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' onChange={inputHandler} placeholder="Enter email" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" name='mobile' onChange={inputHandler} placeholder="Enter Your Mobile Number" />
     
      </Form.Group>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={inputHandler} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirmpassword' onChange={inputHandler} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </center>
    </div>

  );
}

export default BasicExample;