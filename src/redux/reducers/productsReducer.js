import * as actionType from "../constants/productsConstants";

export const getProductsReducer = ( state = { products: []}, action ) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
                return { products: action.payload }
        case actionType.GET_PRODUCTS_FAILURE:
            return { errror :action.payload }
        
        default:
            return state;
    }
}

export const getProductsDetailsReducer = ( state = { product :{} }, action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQ:
            return { loading:true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading:false, product:action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return { loading:false, error:action.payload }
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return { product : { } }
            default:
                return state
    }
}