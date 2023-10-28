import { Dialog, Box, Typography, Button, TextField, styled } from '@mui/material';
import React, { useState, useContext } from 'react';
import { authenticateLogin, saveUserDataApi } from '../../api/api.js';
import { LoginContext } from '../../dataProvider/ContextProvider.js';
///////////////////////////////////////////////////////

const MainBox = styled(Box) (({theme}) =>  ({
    height:'77vh',
    width:'45rem',
    display:'flex',

    [theme.breakpoints.down('md')]:{
        width:'100%',
        justifyContent:'center',
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        justifyContent:'flex-start',
        height:'60vh',
    }

}))
const LeftBox =styled(Box) (({theme}) => ({
    background:'#2874F0 url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png") center 85% no-repeat',
    width:'40%',
    padding:'2rem 2rem',
    [theme.breakpoints.down('md')]:{
        display:"none",
    }

}))
const RightBox =styled(Box) (({theme}) => ({
    padding:'4rem 2rem',
    position:'relative',
    width:'60%',
    [theme.breakpoints.down('sm')]:{
        width:'80%',
        padding:'2rem 1rem',

    }

}))


////////////////////////////VARIABLES STARTS////////////////////////////////////////
const accountInitialValues = {
    login:{
        view:'login',
        heading:'Login',
        subheading:'Get access to your Orders, Wishlist and Recommendations',
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subheading:'Sign up with your mobile number to get started',
    }
}
const StyledBtn = styled(Button)({
    width:'100%',
    textTransform:'none',
    marginTop:'1rem' ,
    height:'3rem'
})
const ErrorMessage = styled(Typography)({
    fontSize:12,
    color:'#FF6161',
    fontWeight:600,
})
//////////////////////////////////MAIN FUNCTIONS STARTS/////////////////////////////////////////////////////
const LoginDialog = ( { loginDialog , setLoginDialog} ) => {

    const{ setUsername } = useContext(LoginContext);
    const[ error, setError ] = useState(false);

    ///Setting Login Values into States
    const intialValuesLogin = {
        username:'',
        password:'',
    }
    const[ loginValues, setLoginValues ] = useState(intialValuesLogin);
    const onChangeLogin = (e) =>{
        setLoginValues( {...loginValues,[e.target.name]:e.target.value} );
        console.log(loginValues);
    }

    ///Setting SignUp Values into States
    const initalValueSignup = {
        firstname:'',
        lastname:'',
        username:'',
        phonenumber:'',
        email:'',
        password:'',
    }
    const[ signUp, setSignUp] = useState(initalValueSignup);
    const onChangeSignup = (e) => {
        setSignUp( {...signUp, [e.target.name]:e.target.value });
    }

    ////Saving SignUP data into Database through API
    const saveSignupData = async() => {
        const response = await saveUserDataApi(signUp);
        if(!response){
            setError(true);
        }
        else{
            setUsername(signUp.username);
            setLoginDialog(false);
        }
    }

    const handleLogin = async() => {
        const response = await authenticateLogin(loginValues);
        if(!response){
            setError(true);
        }
        else{
            setError(false);
            setUsername(loginValues.username);
            setLoginDialog(false);
        }
    }

    ///////Toggling SignUp and Login Window
    const[signin, toggleSignin ] = useState(accountInitialValues.login);

    const handleClose = () => {
        setLoginDialog(false);
        setError(false);

    }
    const handleSignupBtn = () => {
        toggleSignin(accountInitialValues.signup);
    }
    const handleLoginBtn = () => {
        toggleSignin(accountInitialValues.login);
    }
    
    

///////////////////////////////////////////////////////////////JSX PART STARTs//////////////////////////////////////////////////
  return (
    <>
        <Dialog 
            open={loginDialog}
            onClose={ () => handleClose() }
            maxWidth='md'
            fullWidth={true}
            PaperProps={{ sx: {maxWidth:'50rem'} }}
    
            >
             <MainBox>
                        <LeftBox>   
                            <Typography sx={{ fontSize:28,color:'white',fontWeight:600}} >{signin.heading}</Typography>
                            <Typography sx={{ fontSize:17,color:'#DBDBDB',fontWeight:500, marginTop:1.5}}>{signin.subheading}</Typography>
                        </LeftBox>
                {
                    ////////////////////////////////////////////LOGIN SECTION/////////////////////////////////////////////////
                    signin.view === 'login' ? 

                        <RightBox>
                            <TextField fullWidth variant="standard" label='Enter Username' name="username" onChange={ (e) => { onChangeLogin(e) }} />
                            <TextField fullWidth variant="standard" label='Enter Password' name="password" onChange={ (e) => { onChangeLogin(e) }} />
                            {
                                 error && <ErrorMessage>Enter valid Username/Password</ErrorMessage>
                            }
                            <Typography sx ={{ marginTop:'2rem', fontSize:12, color:'#878787'}}>
                                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                            </Typography>
                            <StyledBtn variant="contained" sx={{bgcolor:'#FB641B','&:hover':{ background:'#FB641B' }}}
                                onClick={ () => handleLogin() }>
                                Continue
                            </StyledBtn>
                            <Typography sx={{ position:'absolute', bottom:'2rem',color:'#2874F0', fontSize:14, textAlign:'center',width:'100%',cursor:'pointer'  }}
                             onClick ={ () =>handleSignupBtn() } >
                                New to Flipkart? Create an account
                            </Typography>
                        </RightBox> 
                :

                ////////////////////////////////////SIGN UP Section/////////////////////////////////////////////////////////////////////////

                    <RightBox>
                        <TextField fullWidth variant="standard" label='First Name' onChange={ (e) => onChangeSignup(e)} name='firstname' />
                        <TextField fullWidth variant="standard" label='Last Name' onChange={ (e) => onChangeSignup(e)} name='lastname' />
                        <TextField fullWidth variant="standard" label='User name' onChange={ (e) => onChangeSignup(e)} name='username' />
                        <TextField fullWidth variant="standard" label='Phone Number' onChange={ (e) => onChangeSignup(e)} name='phonenumber' />
                        <TextField fullWidth variant="standard" label='Email' onChange={ (e) => onChangeSignup(e)} name='email' />
                        <TextField fullWidth variant="standard" label='Password' onChange={ (e) => onChangeSignup(e)} name='password' />
                        {
                           error && <ErrorMessage>User already Exist</ErrorMessage>
                        }
                        <Typography sx ={{ marginTop:'2rem', fontSize:12, color:'#878787'}} >
                            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </Typography>
                        <StyledBtn variant="contained" sx={{ bgcolor:'#FB641B','&:hover':{ background:'#FB641B' } }} 
                        onClick={ () =>{ saveSignupData(); }}>
                            CONTINUE
                        </StyledBtn>
                        <StyledBtn variant="contained" onClick={ () => handleLoginBtn()} sx={{ bgcolor:'#fff','&:hover':{ background:'#fff' },color:'#2874F0' }}>
                            Existing User? Log in
                        </StyledBtn>

                    </RightBox>
        
            }
            </MainBox>
        </Dialog>
    </>
  )
}

export default LoginDialog