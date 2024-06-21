import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './ResponsiveAppBar'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <Box sx={{width: '100%'}}>
      {/* <ResponsiveAppBar/> */}
      <main>
          <Outlet/>
      </main>
    </Box>
  )
}

export default Layout