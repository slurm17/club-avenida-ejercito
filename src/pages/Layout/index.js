import React from 'react'
import { Outlet } from 'react-router-dom'
// import ResponsiveAppBar from './ResponsiveAppBar'
import { Box } from '@mui/material'
import Footer from 'pages/Layout/Footer'
import Head from 'pages/Layout/Head'
// import ImgBackgound from 'assets/img/background.png'

const Layout = () => {
  return (
    <>
    <Head/>
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#000',
        position: 'relative'
        }}>
        <Box sx={{ 
          position: 'absolute', 
          bottom: 0, 
          height: '200px', 
          background: 'linear-gradient(180deg, rgba(0,0,0,1) 5%, rgba(255,255,0,1) 92%);',
          width: '100%'
        }}/>
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          height: '200px', 
          background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 94%);',
          width: '100%'
        }}/>
      <main>
          <Outlet/>
      </main>
    </Box>
    <Footer/>
    </>
  )
}

export default Layout