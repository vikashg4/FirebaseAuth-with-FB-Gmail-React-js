import React from 'react'
import Sidenav from '../Components-2/Sidenav'
// import { Box } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Components-2/Navbar';

export default function Home ()  {
  return (
    <>
    
< Navbar />
    <Box height={40} />

    <Box sx={{ display: 'flex' }}>

    <Sidenav  />
    <Box component="main" sx = {{ flexGrow : 1,p: 3}}>
    <h1>Home</h1>
    
    </Box>
    </Box>

   
    </>
  );
}

