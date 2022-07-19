import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios';
import setProducts from '../redux/actions/productsActions.jsX'
const ProductListing = () => {
   
    const dispatch=useDispatch();
   
  const fetchProduct=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products`).catch((err)=>console.log(err));
   
    dispatch(setProducts(response.data));
}

useEffect(()=>{
    fetchProduct();
});

  return (
       <div className="ui grid container">
        <ProductComponent/>
        </div>
  )
}

export default ProductListing
