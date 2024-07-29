import { Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

const MyDivider = () => {
  return (
    <Grid2 container sx={{position: 'relative', display: {xs: 'flex', sm: 'none'}}}>
        <Box sx={{
          backgroundColor: 'black',
          height: '15px',
          width: '15px',
          position: 'absolute',
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundImage: 'linear-gradient(to bottom right, #FEFE00 50%, red 50%)'
        }}/>
        <Grid2 xs={6} sx={{
          height: '15px',
          backgroundColor: 'yellow'
        }}/>
        <Grid2 xs={6} sx={{
          height: '15px',
          backgroundColor: 'red'
        }}/>
    </Grid2>
  )
}

export default MyDivider