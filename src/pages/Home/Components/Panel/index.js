import { Box, Typography } from '@mui/material'
import React from 'react'

const Panel = ({img='', text=''}) => {
  return (
    <Box sx={{
        height: '200px',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
        }}>
        <Box sx={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 37%, rgba(0,0,0,0.9) 92%)',
          zIndex: 2,
          content:"''",
          position: 'absolute',
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
  )
}

export default Panel