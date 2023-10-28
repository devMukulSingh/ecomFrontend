import { Box, Typography, styled, ButtonGroup, Button, Divider } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartApi } from "../../redux/actions/cartActions";

const MainBox = styled(Box) (({theme}) => ({
    padding:'1.5rem 2rem',
    marginRight:'1rem',
    background:'#fff',
    minWidth:500,
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }

}))
const ProductTitle = styled(Typography)({
    display:' -webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1',
    overflow: 'hidden',
})
const RemoveButton = styled(Button)({
    marginTop:'auto',
    width:'5rem',
    color:'#000',
    fontWeight:600,
    fontSize:16,
    '&.MuiButton-root:hover':{
        color:'blue',
        background:'#fff',
    }

})

const QuantityBtn = styled(Button)({
    borderRadius:'50%',
    background:'#fff',
    color:'#000',
})

const CartProducts = ( { item } ) => {
    const Fassured = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();
    const handleRemoveBtn = () => {
        dispatch(removeCartApi(item.id));
    }
  return (
    <MainBox>   
        <Box>
            <Typography>My Cart(1)</Typography>
        </Box>
        <Divider sx={{margin:'10px 0'}}/> 

        <Box sx={ {display:'flex',gap:2 }}>
            
            <Box sx={{ display:'flex',flexDirection:'column'}} >
                <img src={item.url} alt="productimg" style={ {width:'6rem',margin:'10px 0'} }/>
                <ButtonGroup variant="contained">
                  <QuantityBtn>-</QuantityBtn>
                  <Button>1</Button>
                  <QuantityBtn>+</QuantityBtn>
                </ButtonGroup>
            </Box>

            <Box sx={{ display:'flex',flexDirection:'column', gap:1,}}>
                <ProductTitle>{item.title.longTitle}</ProductTitle>
                <Typography sx={ { color:'#878787', fontSize:14}}>
                    Seller:YourGadgetStore
                    <span><img style={{width:'3.5rem',marginLeft:10,}} src={Fassured} alt="Fassured" /></span>
                </Typography> 
                <Typography sx={{ marginTop:1}}>
                    <strike style = {{ color:'#878787',fontSize:14}}>₹{item.price.mrp}</strike>
                    <span style = {{ fontWeight:500,fontSize:18, margin:'0 10px'}}>₹{item.price.cost}</span>
                    <span style = {{ fontSize:14, color:'#388E3C'}} >{item.price.discount} off</span>
                </Typography>
                <RemoveButton onClick={ () => handleRemoveBtn()}>Remove</RemoveButton>
            </Box>

            <Box>
                <Typography sx = {{ fontSize:14, whiteSpace:'nowrap'}}>Delivery by Sun Sep 24 | <span style={{ color:'#878787'}}>₹40</span></Typography>
            </Box>
        </Box>

    </MainBox>
  )
}

export default CartProducts