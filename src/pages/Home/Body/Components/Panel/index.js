import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MyDivider from '../MyDivider'

const Panel = ({img='', text='', dividerBottom= true}) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid item xs={12} lg={6} sx={{
      display: {sx: 'block', sm: 'flex'},
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: {sx: 0, sm: 5}, 
    }}>
        <Box sx={{
          height: mobile ? '200px' : '250px' ,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          borderRadius: mobile ? '0px' : '5px',
          maxWidth: '550px',
          width: '100%'
          }}>
        <Box sx={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 37%, rgba(0,0,0,0.9) 92%)',
          zIndex: 2,
          content:"''",
          position: 'absolute',
          borderRadius: mobile ? '0px' : '3px',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}/>
          <Typography sx={{
              position: 'absolute',
              fontFamily: 'monospace',
              left: 10,
              bottom: 5,
              color: '#fff',
              fontWeight: '700',
              zIndex:5,
              fontSize: '2.2em'
          }}
          >
            {text}
          </Typography>
      </Box>
      {dividerBottom && <MyDivider/>}
    </Grid>
    
  )
}

export default Panel