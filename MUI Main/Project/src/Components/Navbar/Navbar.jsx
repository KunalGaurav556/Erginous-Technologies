import React from 'react'
import {Stack,Typography,Link, Accordion, Chip, Button} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import './Navbar.css'

const Navbar = () => {
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
                    <Button>Features</Button>
                    <Button>Discover</Button>
                    <Button>Community</Button>
                    <Button>FAQ</Button>
                    <Button>All Pages</Button>
                </Stack>
            </Stack>
            <Stack className='rightNav' direction={'row'}>              
                    <Chip label='LOGIN' id='chipLogIn'/>
                    <Chip label='REGISTER' id='chipRegister'/>
                    <SettingsIcon/>
            </Stack>
        </Stack>
    </>
  )
}

export default Navbar