
import React,{Component} from 'react'
import Carousel from './Carousel';
import Card from './Card';
import Bigdiscount from './Bigdiscount';
import Banner from './Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer';

const Products = () => {
  return (
    <div>
      
    <Carousel/>
    <Card/>
    <Bigdiscount/>
    <Banner/>
    <Footer/>
      
    </div>
  )
}

export default Products
