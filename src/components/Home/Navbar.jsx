import React from 'react'
import { styled ,Box, Typography} from '@mui/material'
import { navData } from '../../constants/constants.js';
//////////////////////////////////////////////////////////////////////

const MainBox = styled(Box) (({theme}) =>  ({
    backgroundColor:'white',
    margin:'0.5rem 1rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflowX:'scroll',
    
    '&:-webkit-scrollbar':{
        display: 'none'
      },

    [theme.breakpoints.down('sm')]:{
       margin:0,
    },
}))
const ProductBox = styled(Box) (({theme}) => ({
    marginLeft:'2rem',
    padding:'1rem 1rem',
    [theme.breakpoints.down('lg')]:{
        marginLeft:'1rem',
        padding:'0.5rem',
    },
    [theme.breakpoints.down('md')]:{
        padding:'0rem',
    },

    '& > img':{
        width:'4rem',
        [theme.breakpoints.down('md')]:{
            width:'3rem',
        },
    },
    '& > p':{
        textAlign:'center',
        whiteSpace:'nowrap',
        [theme.breakpoints.down('md')]:{
           fontSize:12,
        },
    },
    
}))

//////////////////////////////MAIN FUNCTIONS STARTS////////////////////////////////
const Navbar = () => {
  return (
    <MainBox>
        {
            navData.map( (data,index ) => {
                return(

                    <ProductBox key={index}>
                        <img src={data.url} alt="imgproduct" />
                        <Typography>{data.text}</Typography>
                    </ProductBox>
                )
            })
        }
    </MainBox>
  )
}

export default Navbar