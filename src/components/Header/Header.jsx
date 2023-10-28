import React from 'react'
import { AppBar, Toolbar, Typography,styled, Box } from '@mui/material';
import SearchBar from "./SearchBar";
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////

const NavBar = styled(AppBar) (({theme}) => ({
    background:'white',
    boxShadow:'none',
    display:'flex',
    justifyContent:'center',
    padding:'0rem 1rem',
    minWidth:200,

    [theme.breakpoints.down('md')]:{
        paddingLeft:'0',
    },

    '&.css-1j3vlsi-MuiToolbar-root':{
        padding:0
    }

}))
const LogoBox = styled(Link) (({theme}) => ({
    textDecoration:'none',
    color:'inherit',


}))

const Logo = styled('img') (({theme}) =>  ({
    width:'8rem',
    [theme.breakpoints.down('sm')]:{
       display:'none',
    }

}))
const Heading = styled(Typography)({
    color:'#9E9E9E',
    fontStyle:'italic',
    fontSize:12,
    fontWeight:600,
})

const PlusBox = styled(Box) (({theme}) => ({
    display: 'flex', 
    alignItems:'center',
     marginLeft:40,
     [theme.breakpoints.down('sm')]:{
        display:'none',
     }
}))
//////////////////////////MAIN FUNCTION ////////////////////////////////////////////////
const Header = () => {
    const logo =  "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
    const plus = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
/////////////////////////////////JSX PART/////////////////////////////////////////////////////////    
    return (
    <>
      <NavBar position="fixed" >
         <Toolbar sx={{ display:'flex'}}>

            <LogoBox to="/">
                <Logo src={logo} alt="logo"/>
                <PlusBox>
                    <Heading>Explore</Heading> &nbsp;
                    <Box component="span" sx={{ color:"#FFC200", fontSize:12, fontStyle:'italic', fontWeight:600,}} >Plus</Box>
                    <img src={plus} style={{ marginLeft:5 }} alt="plus" />
                </PlusBox>
            </LogoBox>
            <SearchBar/>
            <CustomButton/>
         </Toolbar>
       </NavBar>
    </>
  )
}

export default Header