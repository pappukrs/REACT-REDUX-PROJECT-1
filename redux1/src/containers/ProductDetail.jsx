import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {selectedProduct,removeselectedProducts} from '../redux/actions/productsActions.jsX'
const ProductDetail = () => {
    const product=useSelector((state)=>state.product)
    const{image,title,price,category,description}=product;
    const poductid=useParams();
   const dispatch = useDispatch()
    const fetchproductDetail=async()=> {
        const res=await axios.get(`https://fakestoreapi.com/products/${poductid}`).catch(err=>console.log(err))
       dispatch(selectedProduct(res.data))
    
    }

    useEffect(()=>{
        if(poductid && poductid!=="")  fetchproductDetail();
       
        return ()=>{
            dispatch(removeselectedProducts())
        }
    },[poductid])
  return (
    <div className="ui grid container">
        {Object.keys(product).length===0?(<div>...Loading...</div>):(
              <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">ADD</div>
                    <div className="middle aligned row">
                        <div className="column 1p">
                            <img src="{image}" alt="img" className="ui fluid image" />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a href="#" className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown bloack header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
             
        )}
   </div>
  )
}

export default ProductDetail
