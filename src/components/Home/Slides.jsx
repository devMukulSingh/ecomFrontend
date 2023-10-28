import styled from '@emotion/styled';
import { Box, Divider, Typography, Button } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel' 
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
/////////////////////////////////////////
const MainBox = styled(Box)({
    background:'#fff',
    padding:'1rem 1rem',
    margin:'1rem'
})
const ProductBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    border:'1px solid #EEEEEE',
    padding:'10px 0px',
    marginLeft:'1rem',
    borderRadius:5

})
const ProductImg = styled('img')({
    height:160,
    marginBottom:10

})
const Heading = styled(Typography)({
    fontSize:18,
    fontWeight:600,
})
const TimerBox = styled(Box)({
    marginLeft:40,
    display:'flex',
    alignItems:'center',
})
const Timer = styled(Typography)({
    fontSize:16,
    color:'#7f8c8d',
    marginLeft:10,
})

const Slides = ( {products, title} ) => {
  return (
    <MainBox>

        <Box sx={ {display:'flex' ,alignItems:'center', marginBottom:2 }} >
            <Heading>{title}</Heading>
            <Button variant='contained' size="small" 
            sx={{ marginLeft:'auto',textTransform:'none', borderRadius:'50%',minWidth:10, height:25 ,bgcolor:'#1C41D6',fontSize:15}}>
                &gt;
            </Button>
        </Box>

        <Box sx={{ marginTop:2}}>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
                
                    {
                        products.map( (product,index) => {
                            return(
                                <Link to={`product/${product.id}`} style={{ textDecoration:'none'}} key={index}>
                                    <ProductBox>
                                        <ProductImg src={product.url} alt="productimg" />
                                        <Typography sx={{ fontSize:16,fontWeight:600 , }}>{product.title.shortTitle}</Typography>
                                        <Typography sx={{ fontSize:14, color:'#2ecc71',margin:'10px 0px' }}>{product.discount}</Typography>
                                        <Typography sx={{ fontSize:14, color:'#7f8c8d', fontWeight:300 }}>{product.tagline}</Typography>
                                    </ProductBox>
                                </Link>
                                )
                            })
                        }
        </Carousel>
    </Box>

    </MainBox>
  )
}

export default Slides