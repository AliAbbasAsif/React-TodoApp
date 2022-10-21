import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'
import { Box, Typography } from '@mui/material'
function Blog() {
  return (
    <div>
      <div className='bg' >
      <Box sx={{p:6}}>
      <Navbar />
      </Box>
      <Box sx={{mt:8}}>

      <Typography color='white' variant='h3'align='center' >Welcome!</Typography>
      <Typography color='white' variant='h4'align='center' >This is Blog Page</Typography>
      <Typography color='white' variant='h5'align='center' >For TodoApp Please Login!</Typography>
      </Box>

    </div>
    </div>
  )
}

export default Blog
