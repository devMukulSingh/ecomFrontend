import * as actionTypes from "../constants/cartConstants";

export const addCartReducer = (state = { cartItems:[] } ,action) => {
    switch(action.type){
        case actionTypes.ADD_CART_SUCCESS:
            const item = action.payload;
            const exist = state.cartItems.find( product => product.id === item.id);

            if(exist){
                return { ...state,cartItems: state.cartItems.map( data => data.product === exist.product ? item:data) }
            }
            else{
                return { ...state, cartItems :[ ...state.cartItems,item ]};
            }
        case actionTypes.REMOVE_CART_SUCCESS:
            return { ...state, cartItems: state.cartItems.filter( product => product.id !== action.payload)};

        default:
            return state;
    }
}
