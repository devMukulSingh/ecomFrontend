import { createStore, applyMiddleware, combineReducers } from 'redux';
import  thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductsDetailsReducer } from './reducers/productsReducer';
import { addCartReducer } from "./reducers/cartReducer";
 

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails : getProductsDetailsReducer,
    addCart : addCartReducer,
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;