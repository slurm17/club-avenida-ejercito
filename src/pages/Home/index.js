import React from 'react'
import Head from './Head'
import ImgPlantel from 'assets/img/plantel-primera.png'
import ImgFixturePosic from 'assets/img/fixture-posiciones.png'
import ImgCamiseta from 'assets/img/camiseta.jpg'
import Panel from './Components/Panel'
import MyDivider from './Components/MyDivider'
import { useTheme } from '@emotion/react'
import { Box, useMediaQuery } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const Home = () => {
  // const theme = useTheme()
  // const mobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box>
      <Head/>
      {/* {mobile && */}
        <Grid2 container sx={{display: 'grid', placeItems: 'center', width: '100%'}}>
          <Grid2 xs={12} mt={{xs: 0, sm: 2.5}} sx={{maxWidth: '600px'}}>
            <Panel img={ImgPlantel} text={'PLANTEL DE PRIMERA'}/>
            <MyDivider/>
          </Grid2>
          <Grid2 xs={12} mt={{xs: 0, sm: 2.5}} sx={{maxWidth: '600px'}}>
            <Panel img={ImgFixturePosic} text={'FIXTURE Y POSICIONES'}/>
            <MyDivider/>
          </Grid2>
          <Grid2 xs={12} mt={{xs: 0, sm: 2.5}} sx={{maxWidth: '600px'}}>
            <Panel img={ImgCamiseta} text={'NUEVA CAMISETA'}/>
            <MyDivider/>
          </Grid2>
        </Grid2>
      {/* } */}
    </Box>
  )
}

export default Home