import React from 'react'
import  { Box, styled, Typography, Button, Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
////////////////////////////////////////////////////////////////////


const MainBox = styled(Box)({
    marginLeft:'1rem',
    marginTop:'2rem',
})

const ImgAss = styled('img')({
    width:'5rem',
    marginLeft:10,
})
const BadgeIcon = styled(LocalOfferIcon)({
    color:'#14BE47', 
    marginRight:10
})
const Offers = styled(Typography)({
    fontSize:14,
    '& > p':{
        fontWeight:400
    }
})
const SupercoinImg = styled('img')({
  width:'25rem',

})
const HeadingTable = styled(TableCell)({
  fontSize:14,
  color:'#878787',
})
const RowStyled = styled(TableRow)(({theme}) => ({
    verticalAlign:'baseline',
    '& > td':{
      borderBottom:0
    }
}))

const SuperCoinBox = styled(Box) (({theme}) => ({
  marginLeft:10,
    [theme.breakpoints.down('sm')]:{
      margin:0,
    },
    '& > img':{
      [theme.breakpoints.down('sm')]:{
        width:300
      }
    }
}))

/////////////////////////////////////////MAIN FUNCTION/////////////////////////
const RightBox = ({ product }) => {
    const Fassured = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png';
    const superCoinImg = "https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <MainBox>  
        <Typography sx={{ fontSize:16}}>
            {product.title.longTitle}
        </Typography>

              <Typography sx={{ color:'#878787', fontSize:14}}>
                    67,693 Ratings & 4,375 Reviews
                <span style={{ marginTop:10}}><ImgAss src={Fassured} alt="fassured" /></span>
              </Typography>

              <Typography sx= { { color:'#388E3C', fontSize:16, marginTop:1}}>
                Special Price
              </Typography>

              <Typography>
                <Box component='span' sx={{ fontSize:30, fontWeight:500 }}>  ₹{product.price.cost}</Box>
                <Box component='span' sx={{ fontSize:16,  color:'#878787', margin:'0px 8px' }}> <strike> ₹{product.price.mrp}</strike> </Box>
                <Box component='span'  sx={{ fontSize:16, color:'#388E3C'}}>{product.price.discount} off</Box>
              </Typography>

              <Typography sx={{ margin:'10px 0px', fontWeight:600}}>Available Offers</Typography>

              <Box sx={{ '& >p ':{ display:'flex',marginTop:1}}}>
              <Offers>
                <BadgeIcon fontSize='small'/>
                Bank Offer Flat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns, Min Txn Value ₹10,000 T&C
                </Offers>
              <Offers>
                <BadgeIcon fontSize='small'/>
                Bank Offer 10% Instant Discount on ICICI Bank Credit Card Txns, up to ₹1250, on orders of ₹5000 and above T&C
                </Offers>
              <Offers>
                <BadgeIcon fontSize='small'/>
                Bank Offer Flat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns, Min Txn Value ₹10,000 T&C
                </Offers>
              <Offers>
                <BadgeIcon fontSize='small'/>
                Bank Offer Get extra 10% off (price inclusive of cashback/coupon) T&C
                </Offers>
              </Box>

              <Table sx={{ marginTop:2}}>
                <TableBody>

                  <RowStyled>
                    <HeadingTable>Warranty</HeadingTable>
                    <TableCell>1 year brand Warranty</TableCell>
                  </RowStyled>
                  <RowStyled>
                    <HeadingTable>Delivery</HeadingTable>
                    <TableCell>Delivery by </TableCell>
                  </RowStyled>
                  <RowStyled>
                    <HeadingTable>Seller</HeadingTable>
                    <TableCell><Box component='span'sx={{ color:'#2874F0',marginBottom:10}}>Amazestore</Box>  <br /> 7 Days Replacement Policy</TableCell>
                  </RowStyled>
                  <RowStyled>
                    <HeadingTable>Description</HeadingTable>
                    <TableCell>{product.description} </TableCell>
                  </RowStyled>

                </TableBody>
              </Table>

            <SuperCoinBox >
              <SupercoinImg src={superCoinImg} alt="superCoinImg" />
            </SuperCoinBox>
    </MainBox>
  )
}

export default RightBox