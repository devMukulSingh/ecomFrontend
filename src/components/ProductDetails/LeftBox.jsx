import React, { useState } from 'react'
import  { Box, styled, Typography, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCartApi } from "../../redux/actions/cartActions";
import { payUsingPaytmApi } from '../../api/api';
import { post } from '../../utils/paytm';
///////////////////////////////////////////////////////////////////////////

const MainBox = styled(Box)({

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
})
const StyledButton = styled(Button) (({theme}) => ({
    height:"3.5rem",
    fontSize:14,
    fontWeight:500,
    borderRadius:2,
    width:'48%',
    marginLeft:5,
    whiteSpace:'nowrap',

    [theme.breakpoints.down('lg')]:{
        width:'40%',
        fontSize:12,
         marginLeft:3,
         fontWeight:600,
    }

}))
const ProductImg = styled('img')(({theme}) => ({
    width:'40vmin',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}))

const LeftBox = ( { product } ) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(addCartApi(product.id,quantity));
        navigate("/cart");
    }
    const handleBuyNowBtn = async() =>{
        const response = await payUsingPaytmApi({amount:400,email:'mukulsingh2276@gmail.com'});
        const information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params:response,
        }
        post(information);
    }

  return (
            <MainBox>

                <Box sx = {{ padding:'1rem', border:'1px solid #F0F0F0'}}>
                    <ProductImg src={product.detailUrl} alt="productImg" />
                </Box>

                <Box sx={{ width:'100%', marginTop:1,whiteSpace:'nowrap',display:'flex',alignItems:'center',justifyContent:'center', }}>
                    <StyledButton variant="contained" sx={{ bgcolor:'#FF9F00' }}
                     onClick = { () => handleAddToCart() } >
                        <ShoppingCartIcon fontSize='small' sx={{ marginRight:1}}/>
                        Add to Cart
                    </StyledButton>
                    <StyledButton variant="contained" sx={{ bgcolor:'#FB641B' }} onClick={ () => handleBuyNowBtn()}>
                        <FlashOnIcon fontSize='small' sx={{ marginRight:1}} />
                        Buy Now
                    </StyledButton>
                </Box>

         </MainBox>
  )
}

export default LeftBox