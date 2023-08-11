import React,{useState,useEffect} from 'react'
import Sidenav from '../Components-2/Sidenav'
import Tabledashboard from '../Components-2/Tabledashboard'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../Components-2/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { onAuthStateChanged } from "firebase/auth";
import useAuth from '../components/hooks/useAuth';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import FilterFramesTwoToneIcon from '@mui/icons-material/FilterFramesTwoTone';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import '../Dashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
// import SettingsIcon from '@mui/icons-material/Settings';
// import InfoIcon from '@mui/icons-material/Info';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import CardActions from '@mui/material/CardActions';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
// import KeyboardReturnSharpIcon from '@mui/icons-material/KeyboardReturnSharp';
// import { Box } from '@mui/material'

export default function DashBoards ()  {
  const navigate = useNavigate()
const [user,setUser]=useState([])
const { logout, auth } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return navigate("/");
      console.log(user)
      setUser(user);
    });
  }, [auth , navigate]);

  return (
    <>
    
    <div className='bgcolor'>
    <Box  sx={{ maxHeight: '100vh', width: '100%', display: 'flex'  }}>
     {/* sx={{ height:'100vh', width:'100%' , display:'flex' }} > */}

    <Navbar   user={user}/>

    {/* <Box height={70}   /> */}

     

    <Box sx={{ display: 'flex' , marginTop:16 ,marginLeft:-2 }}>

    <Sidenav  />

    



    
     </Box>
       


     <Box component="main" sx = {{ height:'100vh',width:'100%',flexGrow : 1 ,p: 3  }}>

<div >
 <Grid container spacing={2} >
 <Grid 
 // item xs={12} md={6}> 
 item xs={18} >


 <Stack sx={{marginTop:9, }} direction="row" spacing={3}>

<Card sx={{ height: 17 + 'vh' , width :370 , textAlign:'center' }} className='gradientlight'>

<CardContent >

<Stack direction="row" spacing={3}>


<div className='iconstyle'  >
           <SupportAgentTwoToneIcon   style={{ fontSize: 40 }}/>
           </div>


<div className='customer'>

 </div>
  </Stack>

  <Typography  marginTop={-4}className='Number' gutterBottom variant="h4" component="div" color={'white'}>
   67 
 </Typography>
 <Typography gutterBottom variant="h5" component="div" color={'white'} >
 <span>  Customer </span> 
 </Typography>
</CardContent>
</Card>
<Card sx={{ height: 17 + 'vh' , width :370 ,  textAlign:'center' }}  className='gradientlight'>
<CardContent>
<Stack direction="row" spacing={3}>

<div className='iconstyle' >
           <ArticleOutlinedIcon  style={{ fontSize: 40 }}  />
           </div>

<div className='customer'>

 </div>
  </Stack>
<Typography marginTop={-4} gutterBottom variant="h4" component="div" color={'white'}>
   88 
 </Typography>
 <Typography gutterBottom variant="h5" component="div" color={'white'}>
 <span>  Project   </span> 
 </Typography>
 <Typography variant="body2" color="text.secondary">
             
  </Typography>
</CardContent>

</Card>
<Card sx={{ height: 17 + 'vh' , width :370 , textAlign:'center' }}   className='gradientlight' >

<CardContent>
<Stack direction="row" spacing={3}>
 
<div className='iconstyle'>
           <FilterFramesTwoToneIcon style={{ fontSize: 40 }} />
           </div>

<div className='customer'>

 </div>
  </Stack>
<Typography marginTop={-4} className='Number'  gutterBottom variant="h4" component="div" color={'white'}>
   99 
 </Typography>
 <Typography gutterBottom variant="h5" component="div" color={'white'}>
 <span>  Orders     </span> 
 </Typography>
 <Typography variant="body2" color="text.secondary">
             
  </Typography>
</CardContent>  
</Card>
<Card sx={{ height: 17 + 'vh' , width :370 ,textAlign:'center'  }}  className='gradientlight' >

<CardContent>

<Stack direction="row" spacing={3}>
<div className='iconstyle'>
           <PlaylistAddCheckOutlinedIcon  style={{ fontSize: 40 }} />
           </div>



<div className='customer'>

 </div>
  </Stack>

<Typography marginTop={-4} gutterBottom variant="h4" component="div" color={'white'}>
   78 
 </Typography>
 <Typography gutterBottom variant="h5" component="div" color={'white'}>
 <span>  Tasks    </span> 
 </Typography>
 <Typography variant="body2" color="text.secondary">
                
  </Typography>
</CardContent>

</Card>
</ Stack  >
</Grid>
</Grid>
<Box height={20} sx={{marginTop:6}}/>

<Grid container spacing={2} >
<Grid item xs={10} >
<Stack direction="row" spacing={4}  >

<Card  sx={{ height: 52 + 'vh' , width :1600 , paddingTop: 0, textAlign:'center' }}  className='gradientlight' >

<CardContent>
<div >

<Stack direction="row" spacing={3} sx={{ marginTop:1}}>
<Typography variant="h5" noWrap component="div" style={{color: 'white' , fontWeight:'600' }} >
   Top Selling -  Projects
 </Typography>
 

</Stack>
<Tabledashboard />
</div>
</CardContent>
</Card>
<Card sx={{ height: 52 + 'vh' , width :700 ,  }}  className='gradientlight'>
<CardContent>
<div class="col-div-4">
<div class="box-4">
<div class="content-box">
<Typography variant="h5" noWrap component="div" style={{color: 'white' , fontWeight:'600' , textAlign:'center'}} >
   Total Selling Projects
 </Typography>
 
{/* <p className='fontcolor'>Total Sale <span>Sell All</span></p> */}

<div class="circle-wrap" >
<div class="circle" >
<div class="mask full">
<div class="fill"></div>
</div>
<div class="mask half">
<div class="fill"></div>
</div>
<div class="inside-circle"> 70% </div>
</div>
</div>
</div>
</div>
</div>
</CardContent>
</Card>
</Stack>  
</Grid>
</Grid>
</div>
</Box>
   </Box> 

   </div>
  </>
  );
}




















