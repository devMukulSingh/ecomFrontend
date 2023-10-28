import { Typography, Button ,styled,Box} from '@mui/material'
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const MainBox = styled(Box) (({theme}) => ({
    background:'#fff',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    padding:"2rem",
    alignItems:'center',
    margin:'1.5rem 8rem',
    gap:15,

    [theme.breakpoints.down("md")]:{
        margin:'1.5rem 0rem',
    }

}))

const StyledButton = styled(Button)({
    width:'13rem',
    textTransform:'none',
    borderRadius:2,
    padding:'0.5rem 0rem',

})

const CartEmpty = () => {
    const emptyCartImg = "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
    const navigate = useNavigate();
    const handleClick = () => {
       navigate('/');
    }
    return (

    <MainBox>
        <img src={emptyCartImg} alt="emptyCartImg" style={{ width:'14rem'}}/>
        <Typography sx={{ fontSize:18}}>Your cart is empty!</Typography>
        <Typography sx={{ fontSize:13}}>Add items to it now.</Typography>
        <StyledButton variant="contained" onClick={ () => handleClick()}>
          Shop Now
        </StyledButton>

    </MainBox>
  )
}

export default CartEmpty