import { Box } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ImgLogo from 'assets/img/escudo-club-ejercito.png'

const Head = () => {
  return (
    <>
    <Box sx={{width: '100%', height: '10px', backgroundColor: '#FEFE00'}}/>
    <Box sx={{width: '100%', height: '50px', backgroundColor: 'red', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{
            display: 'flex',
            placeItems: 'center',
            height: '100%',
            '> *': {
                marginLeft: '5px'
            },
            position: 'absolute',
            left: 0
        }}>
            <InstagramIcon/>
            <FacebookIcon/>
            <WhatsAppIcon/>
        </Box>
        <img src={ImgLogo} height={'75px'} width={'60px'} style={{zIndex: 5}}/>
    </Box>

    {/* <Box sx={{
            width: '35px', 
            height: '50px', 
            backgroundColor: 'red', 
            backgroundImage: 'linear-gradient(to bottom right, red 50%, #FEFE00 50%)'
        }}>
    </Box> */}
    </>
  )
}

export default Head