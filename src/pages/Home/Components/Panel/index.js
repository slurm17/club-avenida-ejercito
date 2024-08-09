import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Panel = ({img='', text='', ruta = ''}) => {
  // const theme = useTheme()
  const navigate = useNavigate()
  // const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid item xs={12} 
      component={'article'}
      onClick={() => navigate(ruta)}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: {sx: 0, sm: 5}, 
    }}>
        <Box sx={{
          height:'230px' ,
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          borderRadius: '10px',
          maxWidth: '550px',
          width: '100%',
          boxShadow: '0px 5px 10px 1px rgba(255,255,255,0.35)'
          }}>
        <Box sx={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 37%, rgba(0,0,0,0.9) 92%)',
          zIndex: 2,
          content:"''",
          position: 'absolute',
          borderRadius: '7px',
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
              fontSize: '1.9em'
          }}
          >
            {text}
          </Typography>
      </Box>
      {/* {dividerBottom && <MyDivider/>} */}
    </Grid>
    
  )
}

export default Panel