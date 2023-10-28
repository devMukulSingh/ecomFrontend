import axios from "axios";
import * as actionTypes from "../constants/cartConstants";
const url = "http://localhost:8000";


export const addCartApi = (id,quantity) => async(dispatch) => {

    try {
            const{ data } = await axios.get(`${url}/product/${id}`);
            dispatch( { type:actionTypes.ADD_CART_SUCCESS, payload:{...data,quantity} });
    } catch (error) {
        dispatch( { type:actionTypes.ADD_CART_FAIL , payload:error.message } );
    }

    }
    
    export const removeCartApi = (id) => async(dispatch) => {
            dispatch( { type:actionTypes.REMOVE_CART_SUCCESS, payload:id } );
        }