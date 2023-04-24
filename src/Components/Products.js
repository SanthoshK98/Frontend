import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function Products(props) {


  const [cartlist,setCartlist] = useState([]);

    const{data} = props;
    console.log(data)

const cartHandler = (cartdata)=>{

  let result = cartlist.find((items)=>{
      return cartdata._id === items._id
  })

  if(result){
    result.price = result.price + cartdata.price;
  }else{
    setCartlist([...cartlist,{...cartdata}])
  }

  

}


console.log(cartlist)
  return (
    <div>
        <h1>Products </h1>
        <Container>
      <Row>
         
        {
        data.map((item)=>{
return(
    <>
      <Col xs={12} md={4} lg={3} xl={3} sm={6}>
        <Link to = {`/singleproduct/${item._id}`}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {item.image} />
      <Card.Body>
        <Card.Title> <h3>{item.title}</h3></Card.Title>
        <Card.Title> <h3>Rs.{item.price}</h3></Card.Title>
        <Card.Text>
        <p>Happy Outfit for summer</p>
        </Card.Text>
        <Button onClick={()=>cartHandler(item)} variant="primary">Add to Cart</Button>
        <Button variant="secondary">Buy Now</Button>
      </Card.Body>
    </Card>
        </Link>
  

    </Col>

    {/*
 <img src = />
    <h3>{item.price}</h3>
    <h3>{item.description}</h3> */}
    
    
    </>
)

        })

        }

      </Row>
    </Container>
    </div>
  )
}

export default Products;