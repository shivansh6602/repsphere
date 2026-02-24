import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExcersises from '../components/SearchExcersises'
import Excersises from '../components/Excersises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcersises />
      <Excersises />
    </Box>
  )
}

export default Home