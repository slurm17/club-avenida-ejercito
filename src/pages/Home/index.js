import { Box, Typography } from '@mui/material'
import React from 'react'
import Head from './Head'
import ImgPlantel from 'assets/img/plantel-primera.png'
import ImgFixturePosic from 'assets/img/fixture-posiciones.png'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Panel from './Components/Panel'
import MyDivider from './Components/MyDivider'

const Home = () => {
  return (
    <>
      <Head/>
      <Panel img={ImgPlantel} text={'PLANTEL DE PRIMERA'}/>
      <MyDivider/>
      <Panel img={ImgFixturePosic} text={'FIXTURE Y POSICIONES'}/>
      <MyDivider/>
    </>
  )
}

export default Home