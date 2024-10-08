import { Box } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ImgLogo from 'assets/img/escudo-club-ejercito.png'
import { useNavigate } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
const Head = () => {
    const fontSize = '28px'
    const navigate = useNavigate()
  return (
    <>
    <Box sx={{width: '100%', height: '10px', backgroundColor: '#FEFE00'}}/>
    <Box sx={{width: '100%', height: '50px', backgroundColor: 'red', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{
            display: 'flex',
            placeItems: 'center',
            height: '100%',
            // marginLeft: '15px',
            '> *': {
                // width: '40px'
                padding: '3px'
            },
            position: 'absolute',
            left: 5
        }}>
            <InstagramIcon sx={{fontSize: fontSize }}/>
            <FacebookIcon sx={{fontSize: fontSize}}/>
            <WhatsAppIcon sx={{fontSize: fontSize}}/>
        </Box>
        <Box 
            component={'img'} 
            alt='logo' 
            src={ImgLogo} 
            width={'68px'} 
            sx={{
                zIndex: 5, 
                marginTop: '12px'
            }}
            onClick={()=>{navigate(ROUTES.LANDING)}}
        />
    </Box>
    </>
  )
}

export default Head