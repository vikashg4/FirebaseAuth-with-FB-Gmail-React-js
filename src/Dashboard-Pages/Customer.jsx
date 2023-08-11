

import React from 'react'
import Sidenav from '../Components-2/Sidenav'
// import { Box } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Components-2/Navbar';
import Tabledashboard from '../Components-2/Tabledashboard';
import { Card } from '@mui/material';
import CustomerTables from '../Components-2/CustomerTables';
export default function Customers ()  {
  return (
    <>
    
<Navbar />
{/* <Box height={40} /> */}


    <Sidenav  />
    

    {/* <Typography sx={{ marginTop:1 ,color:'#000', textAlign:'center',fontSize:25 , fontWeight:'600'}}>Customers Table</Typography> */}

<Card  sx = {{ border:'none' ,height:'100vh',display:'flex' ,justifyContent:'center' , alignItems:'center' ,marginLeft:'2in', marginTop:'-0.5in'}}>

<Box  sx = {{ border:'none' ,height:'100vh',display:'flex' ,justifyContent:'center', width:'100%', alignItems:'center',}} >



<CustomerTables  />

</Box>
  


</Card>
    

   



 </>
  );
}






{/* <Card className='gradientlight' component="main" sx = {{ flexGrow : 1,p: 3}}> */}








