import { useState , useEffect } from "react"
import "../styles/ProductList.css"
import Product from "../components/Product"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



function ProductListing() {
    const [products, setProducts] = useState([])
          
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>{
        //          setProducts(json)
        //     })
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
              setProducts(res.data)
        })
        .catch(err => {
          console.log("some error")
        })
      },[])

    return (
       <Container>
            <h1 className = "contact-title">  Product List</h1>
            <div className="product-list">
              <Row>
              {products.map((product, index) => {
                 return(
                  <Col xs = {12} sm = {6} md = {4} lg = {3} xxl = {2}  key = {index}>
                       <Product productData = {product}/>
                  </Col>
                 )
              })}
              </Row>
            </div>        
        </Container>   
    )
}
export default ProductListing