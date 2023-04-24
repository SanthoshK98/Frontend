import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import {Routes,Route} from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Singleproduct from './Components/Singleproduct';



function App() {

  const[products,setProducts] = useState([]);

useEffect(()=>{
axios.get('http://localhost:5099/getproducts').then((response)=>{
// console.log(response.data.productdata)

setProducts(response.data.productdata)
console.log(products)
})

},[])




  return (
    <div className="App">
<Navigation/>
<Routes>
<Route path='/register' element={<Registration/>}></Route>
<Route path='/products' element={<Products data = {products}/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/singleproduct/:id' element={<Singleproduct/>}></Route>
</Routes>
    </div>
  );
}

export default App;
