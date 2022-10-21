import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function Home() {
  return (
    <div className='bg' >
      <Box sx={{p:6}}>
      <Navbar />
      </Box>
      <Box sx={{mt:8}}>

      <Typography color='white' variant='h3'align='center' >Welcome!</Typography>
      <Typography color='white' variant='h4'align='center' >This is home Page</Typography>
      <Typography color='white' variant='h5'align='center' >For TodoApp Please Login!</Typography>
      </Box>

    </div>
  )
}

export default Home
