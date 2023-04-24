import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function BasicExample() {
const[userlogin,setUserlogin] = useState({
    email:'',
    password:''

})
const inputHandler = (e)=>{
setUserlogin({...userlogin,[e.target.name]:e.target.value})
}

const loginHandler = async (e)=>{

    try{
      
        e.preventDefault();

        let logedin =  await axios.post('http://localhost:5099/login',userlogin)
        console.log(logedin)
    }catch(err){
        console.log(err.message)
    }
  

}


  return (
    <center>

 
<Card style={{ width: '18rem' }}>
<Card.Title>Login Form</Card.Title>
<Card.Body>
<Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' onChange={inputHandler} placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={inputHandler} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  {/* <Card.Title> <h3></h3></Card.Title>
  <Card.Title> <h3></h3></Card.Title>
  <Card.Text>
  <p>Happy Outfit for summer</p>
  </Card.Text>
  <Button  variant="primary">Add to Cart</Button>
  <Button variant="secondary">Buy Now</Button> */}
</Card.Body>
</Card>


</center>
  
  );
}

export default BasicExample;

