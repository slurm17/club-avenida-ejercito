import React from 'react'
import { Outlet } from 'react-router-dom'
// import ResponsiveAppBar from './ResponsiveAppBar'
import { Box } from '@mui/material'
// import ImgBackgound from 'assets/img/background.png'

const Layout = () => {
  return (
    <Box 
      sx={{
        width: '100%',
        background: ' linear-gradient(0deg, rgba(0,0,0,1) 54%, rgba(5,0,0,1) 50%, rgba(254,0,0,1) 87%);',
        // background: 'linear-gradient(0deg, rgba(254,254,0,1) 10%, rgba(254,0,0,1) 61%);',
        // backgroundImage: `url(${ImgBackgound})`,
        // height: '1000px',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center center',
        // backgroundRepeat: 'no-repeat',
        }}>
      {/* <ResponsiveAppBar/> */}
      <main>
          <Outlet/>
      </main>
    </Box>
  )
}

export default Layout