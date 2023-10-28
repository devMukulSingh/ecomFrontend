import React, { useEffect } from 'react'
import { Box,Grid, styled } from "@mui/material";
import CartProducts from './CartProducts';
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from 'react-redux';
import { addCartApi } from '../../redux/actions/cartActions';
import { useParams } from 'react-router-dom';
import CartEmpty from "./CartEmpty";
/////////////////////////////////////////

const MainGrid = styled(Grid)  (({theme}) => ({
  padding:'1.5rem 8rem',
  position:'relative',

  [theme.breakpoints.down('lg')]:{
    padding:'1.5rem 1rem',
  },
  [theme.breakpoints.down('md')]:{
    padding:'0',
  },
}))

const Cart = () => {

  const { cartItems } = useSelector(state => state.addCart);

  return (
    <>
      {
        cartItems?.length ? 
        <MainGrid container>
        {
          cartItems.map( (item,index) => {
            return(

              <Grid items lg={8} md={8} sm={12} xs={12} key={index} >
                 <CartProducts item = {item}/>
              </Grid>
          )
          })
        }
        <Grid items lg={4} md={4} sm={12} xs={12} >
          <CartTotal cartItems= {cartItems}/>
        </Grid>

      </MainGrid> : 
      
      <CartEmpty/>
      }

      </>
  )
}

export default Cart