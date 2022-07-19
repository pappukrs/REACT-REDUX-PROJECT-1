import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';

const ProductComponent = () => {

    const products=useSelector((state) =>state.allproducts.products);
    const renderList=products.map((product )=>{
        const {id,title,image,price,category}=product
        <Link to={`/product/${id}`}>
          return (
            <>
            <div className="four column wide" key={id}>
            <div className="ui link cards">
               <div className="cards">
                   <div className="image">
                    <img src={image} alt={title} />
                   </div>
                   <div className="content">
                       <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                   </div>
               </div>
            </div>
            </Link>
           </div>
           </>
          )

    });
    
    retuen(
        <>
        {renderList}
        </>
    )
  
}

export default ProductComponent