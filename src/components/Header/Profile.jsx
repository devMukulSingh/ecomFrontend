import React, { useState } from 'react';
import { Menu, MenuItem, Typography,Box } from "@mui/material";
import styled from '@emotion/styled';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Username = styled(Typography)({
    cursor:'pointer',
    color:'black',
})

const MenuStyled = styled(Menu)({
    marginTop:5,

})
const Profile = ({ username, setUsername}) => {

    const[ open, setOpen ] = useState(false);

    const handleProfile = (e) =>{
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleLogoutBtn = () =>{
      setUsername('');
    }
  return (
    <>
      <Box>
        <Username onClick={ (e) => handleProfile(e)}>Hello, {username}</Username>
        </Box>
      <MenuStyled
        anchorEl={open}
        open={open}
        onClose={handleClose}
      > 
        <MenuItem onClick={ () => { handleClose(); handleLogoutBtn(); } }>Logout  <PowerSettingsNewIcon fontSize='small'color='primary' sx={{marginLeft:1,}}/></MenuItem>
       
      </MenuStyled>
    </>
  )
}

export default Profile