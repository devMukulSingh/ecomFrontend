import axios from "axios";
import * as actionTypes from "../constants/productsConstants";
const url = "http://localhost:8000";


export const getProductsApi = () => async(dispatch) => {
try {
        const { data } = await axios.get(`${url}/products`);
        dispatch( {type: actionTypes.GET_PRODUCTS_SUCCESS ,payload:data} );

    } catch (error) {
        dispatch( {type: actionTypes.GET_PRODUCTS_FAILURE ,payload:error.message } );
    }
}

export const getProductDetailsApi = (id) => async(dispatch) => {
    dispatch( { type:actionTypes.GET_PRODUCT_DETAILS_REQ});

   try {
     const { data } = await axios.get(`${url}/product/${id}`);
     dispatch( { type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data});
   } catch (error) {
        dispatch( { type : actionTypes.GET_PRODUCT_DETAILS_FAIL, payload:error.message });
   }

}

