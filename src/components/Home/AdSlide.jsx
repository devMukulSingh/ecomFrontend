import React from 'react'
import Slides from './Slides';
import { Box,styled } from '@mui/material';
////////////////////////////////////

const MainBox = styled(Box)({
    display:'flex',
})
const AdImg = styled('img')({
    width:250,
})
const SlideBox = styled(Box) (({theme}) => ({
    width:'82vw',
    flex:0.9,
    [theme.breakpoints.down('lg')]: {
        flex:1,
        width:'100vw'
    }
}))
const ImgBox = styled(Box)(({ theme}) => ({
    marginLeft:'auto',
    marginRight:'0.5rem',
    flex:0.1,
    [theme.breakpoints.down('lg')]:{
        display:'none',
    }
}))
const AdSlide = ( {products, title}) => {
    const ad = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/f506197754c5ca89.jpg?q=20';
  return (
    <MainBox>
        <SlideBox>
            <Slides products={products} title={title} />
        </SlideBox>
        <ImgBox>
            <AdImg src={ad} alt="adImg" />
        </ImgBox>
    </MainBox>
  )
}

export default AdSlide