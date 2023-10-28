import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetailsApi } from '../../redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import  { Box, styled,Grid } from "@mui/material";
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const MainBox = styled(Box)(({theme}) =>({
  background:'#ffffff',
  padding:'2rem',
  margin:'0rem 5rem',

  [theme.breakpoints.down('lg')]: {
    margin:0,
    padding:'1rem',
  }

}))

const ProductsDetails = () => {
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getProductDetailsApi(id));
        console.log(product);
    },[dispatch, id])

  return (
      <MainBox>
        {
         product && Object.keys(product).length &&
            <Grid container sx={{ display:'flex', justifyContent:'center'}}>
              <Grid item lg={4} md={4} sm={8} xs={12}>
                <LeftBox product = {product}/> 
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={12}>
                <RightBox product ={product}/>
            </Grid>
            </Grid>   
        }
      </MainBox>
  )
}

export default ProductsDetails