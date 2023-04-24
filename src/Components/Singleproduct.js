import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Singleproduct() {

    const params = useParams();
    console.log(params)
const[particularproduct,setParticularproduct] = useState({});
useEffect(()=>{
getMethod();
},[])

const getMethod = async ()=>{
    try{
axios.get(`http://localhost:5099/singleproduct/${params.id}`).then((response)=>{
            // console.log(response.data.singleproduct)

            setParticularproduct(response.data.singleproduct)
      
  })
    }catch(err){
        console.log(err.message)
    }

}
console.log(particularproduct)

  return (
    <div>
        <h3>Single Product Page</h3>
        <center>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {particularproduct.image} />
      <Card.Body>
        <Card.Title> <h3>{particularproduct.title}</h3></Card.Title>
        <Card.Title> <h3>Rs.{particularproduct.price}</h3></Card.Title>
        <Card.Text>
        <p>Happy Outfit for summer</p>
        </Card.Text>
        <Button  variant="primary">Add to Cart</Button>
        <Button variant="secondary">Buy Now</Button>
      </Card.Body>
    </Card>
        </center>
    
      
       
    </div>
  )
}

export default Singleproduct;