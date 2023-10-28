import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from "./components/Cart/Cart";
import ProductsDetails from './components/ProductDetails/ProductsDetails';
import ContextProvider from './dataProvider/ContextProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <Header/>
        <Box sx = {{ marginTop:9, width:'100% !important'}}>
          <Routes>
            <Route path = "/"  element = {<Home/>}/>
            <Route path = "/product/:id" element = { <ProductsDetails/> } />
            <Route path = "/cart" element = { <Cart/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ContextProvider>
    </>
  );
}

export default App;
