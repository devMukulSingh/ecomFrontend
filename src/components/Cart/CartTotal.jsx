import React, { useEffect, useState } from 'react'
import { Box, Divider, Table, TableBody, TableCell, TableRow, Typography,styled } from '@mui/material'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const OuterBox = styled(Box) (({theme}) => ({
    position:'absolute',
    top:24,
    width:"25rem",
    [theme.breakpoints.down('md')]:{
        position:'static',
        margin:'2rem auto',
    },
    [theme.breakpoints.down('sm')]:{
        margin:'2rem 5rem',
    }
}))
const MainBox = styled(Box) (({theme}) => ({
    background:'#fff',
    padding:'1.5rem',

}))

const StyledRow = styled(TableRow)({
    ' & > td':{
        borderBottom:0,
    },

})
const EndBox = styled(Box) (({theme}) => ({
    display:'flex', 
    alignItems:'center', 
    margin:'1rem ',
    padding:10,
    width:"100%",
    [theme.breakpoints.down('md')]:{
        margin:'1rem 0rem',
        padding:0,
        width:'50%',
        whiteSpace:'nowrap',
    },
    [theme.breakpoints.down('sm')]:{
        whiteSpace:'normal',
        width:'100%'
    }
}))


////////////////////////////////MAIN FUNCTION START/////////////////////////////////////////////////////////
const CartTotal = ( { cartItems }) => {

    useEffect( () => {
        productTotal();
    },[cartItems])

    const[ totalMrp,setTotalMrp ] = useState();
    const[ totalDiscount,setTotalDiscount ] = useState();

    const productTotal = () => {
        let totalMrp=0 ; let totalDiscount=0;
        cartItems.map( (product,index) => {
                totalMrp += product.price.mrp;
                totalDiscount += product.price.mrp-product.price.cost;
        })
        setTotalDiscount(totalDiscount);
        setTotalMrp(totalMrp);
    }
  return (
    <OuterBox>
    <MainBox>
        <Typography sx={{ color:'#878787', fontWeight:600, }}>PRICE DETAILS</Typography>
        <Divider sx={{ margin:'10px 0'}}/>
        <Table>
            <TableBody>
                <StyledRow>
                    <TableCell>Price (1 items)</TableCell>
                    <TableCell>₹{totalMrp}</TableCell>
                </StyledRow>
                <StyledRow>
                    <TableCell>Discount</TableCell>
                    <TableCell>-₹{totalDiscount}</TableCell>
                </StyledRow>
                <StyledRow>
                    <TableCell>Delivery Charges</TableCell>
                    <TableCell>Free</TableCell>
                </StyledRow>
                <Divider/>
                <StyledRow>
                    <TableCell>Total Amount</TableCell>
                    <TableCell>₹{totalMrp-totalDiscount}</TableCell>
                </StyledRow>
                <Divider/>
            </TableBody>
        </Table>
    </MainBox>
    
    <EndBox >
        <GppGoodOutlinedIcon fontSize='large' color='action'/>
        <Typography sx={{ color:'#878787', fontSize:14}}>
        Safe and Secure Payments.Easy returns.100% Authentic products.
        </Typography>
    </EndBox>

    </OuterBox>
  )
}

export default CartTotal