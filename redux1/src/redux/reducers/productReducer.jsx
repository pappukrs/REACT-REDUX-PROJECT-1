
import  SET_PRODUCTS  from '../contants/action-types.jsX'
import {SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} from '../contants/action-types.jsX'

const initialState = {
    products:[
    ],
}
const productReducer = (state=initialState, {type,payload}) => {
     
           switch(type) {
            case SET_PRODUCTS:
                return{
                    ...state,
                    products:payload
                }  ;
                       
                

                default:
                    return state
                    
           }
}

export const selectedProductReducer = (state={},{type,payload})=>{
    switch(type) {
        case SELECTED_PRODUCT:
            return { ...state,...payload};

            case REMOVE_SELECTED_PRODUCT:
                return {};
            default:
                return state
    }
}




export default productReducer