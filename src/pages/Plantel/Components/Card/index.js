import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import imgPerfil from 'assets/img/perfil-sin-foto.jpg'
const Card = ({img='', nombre='Pepe Argento'}) => {
  return (
    <Grid item xs={6} sm={4} md={3} component='article' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }}>
        <Box 
            component={'img'} 
            alt='perfil' 
            src={img || imgPerfil} height={'140px'}
            sx={{
                borderRadius: '10px',
                marginBottom: '5px'
            }}    
        />
        <Typography align='center' color={'#fff'} sx={{maxWidth: '140px'}}>
            {nombre}
        </Typography>
    </Grid>
  )
}

export default Card