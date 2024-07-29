import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Panel = ({img='', text=''}) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box sx={{
        height: mobile ? '200px' : '250px' ,
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        borderRadius: mobile ? '0px' : '5px',
        // boxShadow:' 1px 1px 20px 11px rgba(255,0,0,0.57); -webkit-box-shadow: 1px 1px 20px 11px rgba(255,0,0,0.57); -moz-box-shadow: 1px 1px 20px 11px rgba(255,0,0,0.57);'
        // borderWidth: '4px',
        // borderStyle: 'solid',
        // background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(to right, red, yellow) border-box',
        // borderRadius: '50em',
        // border: '4px solid red'
        // borderImage: 'linear-gradient(to right, red, yellow) 1'
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
  )
}

export default Panel