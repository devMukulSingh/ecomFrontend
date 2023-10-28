import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from "./Navbar";
import CarouselSection from "./CarouselSection";
import { getProductsApi } from '../../redux/actions/productActions';
import Slides from './Slides'; 
import AdSlide from './AdSlide';
import { Box, styled } from '@mui/material';
////////////////////////////////////////////////////////////

const MainBox = styled(Box)({
  width:"100vw !important",
  height:"100vh"
})


const Home = () => {

  const { products } = useSelector( state => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect( () => {
      dispatch(getProductsApi());
  },[dispatch])

  return (
    <MainBox>
        <Navbar/>
        <CarouselSection/>
        <AdSlide products = {products} title = "Deal of the Day" />   
        <Slides products = {products} title = "Discounts for You" />   
        <Slides products = {products} title = "Suggested Items" />   
        <Slides products = {products} title = "Trending Offers" />   
        <Slides products = {products} title = "Season Top Picks" />   

    </MainBox>
  )
}

export default Home