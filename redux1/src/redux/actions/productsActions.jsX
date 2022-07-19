

import * as que from '../contants/action-types.jsX'
  const setProducts=(products)=>{
   
    
    return{
       type:que.SET_PRODUCTS,
        payload:products,
    };
};



 const selectedProduct=(product)=>{
    return{
        type:que.SELECTED_PRODUCT,
        payload:product,
    };
};

  const removeselectedProducts=()=>{
    return{
        type:que.REMOVE_SELECTED_PRODUCT,
       
    };
};
export default setProducts;
export {selectedProduct,removeselectedProducts}


