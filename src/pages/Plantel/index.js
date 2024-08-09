import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import values from './values'
import Card from './Components/Card'
const Plantel = () => {
  return (
    <Container >
        <Typography align='center' sx={{
            fontWeight: '700',
            fontSize: '1.5rem',
            marginBottom: 4 ,
            color: '#fff'
        }}>
            {'APERTURA 2024'}
        </Typography>
        <Grid container rowSpacing={2} sx={{
            alignItems: 'flex-start',
            paddingBottom: 5
        }}>
            {values.map((value)=>(
                <Card
                    img={value.imagen}
                    nombre={value.nombre}
                    key={value.nombre}
                />
            ))}
        </Grid>
    </Container>
  )
}

export default Plantel