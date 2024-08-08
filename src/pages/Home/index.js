import React from 'react'
import { Container, Grid } from '@mui/material'
import ImgPlantel from 'assets/img/plantel-primera.png'
import ImgFixturePosic from 'assets/img/fixture-posiciones.png'
import ImgCamiseta from 'assets/img/camiseta.jpg'
import ImgEstadio from 'assets/img/estadio.jpg'
import Panel from './Components/Panel'

const Home = () => {
  // const theme = useTheme()
  // const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
      <Container maxWidth={'lg'} sx={{paddingTop: '50px'}} >
        <Grid container 
            // spacing={{xs: 0, sm: 10}}
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%', 
                // pb: 2.5, 
                // padding: '50px',
                '& > *':{
                    marginBottom: '15px !important'
                }}
            }>
            <Panel img={ImgPlantel} text={'PLANTEL DE PRIMERA'}/>
            <Panel img={ImgFixturePosic} text={'FIXTURE Y POSICIONES'}/>
            <Panel img={ImgEstadio} text={'EJÉRCITO STADIUM'} />
            <Panel img={ImgCamiseta} text={'NUEVA CAMISETA'} dividerBottom={false}/>
        </Grid>
    </Container>
  )
}

export default Home