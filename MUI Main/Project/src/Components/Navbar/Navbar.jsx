import React from 'react'
import {Stack,Typography,Link, Accordion, Chip, Button} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import './NavbarMedia.css';
import AnchorTemporaryDrawer from '../Menu/Manu';

const Navbar = () => {
    const Navigate = useNavigate();
  return (
    <>
        <Stack className='mainNav' direction={"row"}>
            <Stack className='leftNav' direction={'row'}>
                <Stack className='leftNavLogoTitle'direction={"row"}>
                    <Typography component={"span"} id='navLogoImage'>
                        <img id='navbarLogo' src="https://verselion.netlify.app/_next/static/images/logo-verselion-53c3f39c69e67bfb482ee97245f61e7f.png" alt="image" />
                    </Typography>
                    <Typography id='AroraNav' variant='h3'>Awrora</Typography>
                </Stack>
                <Stack className='leftNavItems' direction={"row"}>
                    <Button onClick={()=>{Navigate('/')}}>Features</Button>
                    <Button>Discover</Button>
                    <Button>Community</Button>
                    <Button>FAQ</Button>
                    <Button>All Pages</Button>
                </Stack>
            </Stack>
            <Stack className='rightNav' direction={'row'}>              
                    <Chip label='LOGIN' id='chipLogIn' sx={{paddingTop:'6px',paddingBottom:'6px'}} onClick={()=>{Navigate('/LogInPage')}} />
                    <Chip label='REGISTER' id='chipRegister'sx={{paddingTop:'6px',paddingBottom:'6px'}}/>
                    <SettingsIcon/>
            </Stack>
        </Stack>

        {/* MediaQuery  */}

        <Stack direction={'row'} className='mMStack'>
            <Stack direction={'row'} className='mMArora'>
                <img src="https://verselion.netlify.app/_next/static/images/logo-verselion-53c3f39c69e67bfb482ee97245f61e7f.png" alt="" />
                <Typography fontSize={'20px'} fontWeight='800'>Awrora</Typography>
            </Stack> 

            <Stack direction={'row'} className='mMLRBtns'>
                <Button id='mMLogInBtn'>LogIn</Button>
                <Button id='mMRegisterBtn'>Register</Button><hr />
                <SettingsIcon/>
                <AnchorTemporaryDrawer/>
            </Stack>   
        </Stack>
    </>
  )
}

export default Navbar