import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import Panel from './Components/Panel'
import MyDivider from './Components/MyDivider'
import ImgPlantel from 'assets/img/plantel-primera.png'
import ImgFixturePosic from 'assets/img/fixture-posiciones.png'
import ImgCamiseta from 'assets/img/camiseta.jpg'
import ImgEstadio from 'assets/img/estadio.jpg'
import { Container, Grid } from '@mui/material'
const Body = () => {
  return (
    <Container maxWidth={'lg'} sx={{padding: 0}} >
        <Grid container 
            // spacing={{xs: 0, sm: 10}}
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%', 
                // pb: 2.5, 
                '>*':{
                    // mt:{xs: 0, sm: 2.5}
                }}
            }>
            <Panel img={ImgPlantel} text={'PLANTEL DE PRIMERA'}/>
            <Panel img={ImgFixturePosic} text={'FIXTURE Y POSICIONES'}/>
            <Panel img={ImgEstadio} text={"EJÉRCITO'S STADIUM"} />
            <Panel img={ImgCamiseta} text={'NUEVA CAMISETA'} dividerBottom={false}/>
        </Grid>
    </Container>
  )
}

export default Body