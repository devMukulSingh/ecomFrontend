import React, { useContext, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography,styled, Box, Button} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginDialog from '../Login/LoginDialog';
import { LoginContext } from '../../dataProvider/ContextProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////

const MainBox = styled(Box)({
    display:'flex', 
    alignItems:'center',
    paddingRight:"1rem"
    // width:'100%',
})

const IconsBox = styled(Link) (({theme}) => ({
    display:'flex', 
    alignItems:'center',
    marginLeft:'2rem',
    cursor:'pointer',
    textDecoration:'none',

    [theme.breakpoints.down('lg')]:{
        marginLeft:'1rem',
    },
    [theme.breakpoints.down('md')]:{
        marginLeft:10,
    },

    '& > button':{
        textTransform:"none",
        color:'#212121',
        whiteSpace:'nowrap',
        fontSize:14,
        fontWeight:300,
        padding:10,
        borderRadius:10,
        '&:hover':{
            backgroundColor:'#2A55E5',
            color:'white',
        },

    },
    '& > p':{
        color:'#212121',
        fontSize:14,
        marginLeft:10,
        fontWeight:300,
        whiteSpace:'nowrap',

        [theme.breakpoints.down('lg')]:{
            display:'none',
        }
    }
}))

const SignIn = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down('lg')]:{
        display:'none',
    }
}))
//////////////////////////MAIN FUNCTION ////////////////////////////////////////////////
const CustomButton = () => {

    const[ loginDialog, setLoginDialog ] = useState(false);
    const { username , setUsername} = useContext(LoginContext);

    const handleLoginBtn = () => {
        setLoginDialog(true);
    }
    
/////////////////////////////////JSX PART/////////////////////////////////////////////////////////    
  return (
    <MainBox>
        <IconsBox>
            <StorefrontIcon sx={{ color:'#212121'}}/>
            <Typography>Become a Seller</Typography>
        </IconsBox>
        <IconsBox>
                {
                     username ? <Profile username={username} setUsername={setUsername} />
                :
                <Button onClick = { () => handleLoginBtn() }>
                    <PersonIcon sx={{ color:'#212121', marginRight:1}} />
                    <SignIn>Sign In</SignIn>
                </Button>

                }
        </IconsBox>
        <IconsBox to="/cart">
            <ShoppingCartOutlinedIcon sx={{ color:'#212121'}}/>
            <Typography>Cart</Typography>
        </IconsBox>
        <IconsBox>
            <MoreVertIcon color='action'/>
        </IconsBox>
        <LoginDialog loginDialog= {loginDialog} setLoginDialog={setLoginDialog} />
    </MainBox>
  )
}

export default CustomButton