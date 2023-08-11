

// import React from 'react'
// import Sidenav from '../Components-2/Sidenav'
// // import { Box } from '@mui/material'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Navbar from '../Components-2/Navbar';

// export default function projects ()  {
//   return (
//     <>

//     <Navbar />
//     <Box height={40} />

//     <Box sx={{ display: 'flex' }}>

//     <Sidenav  />
//     <Box component="main" sx = {{ flexGrow : 1,p: 3}}>
    
    
//     <Typography variant="h4" noWrap component="div" style={{color: 'red'}}>
//           Projects
//         </Typography>
//         <Typography variant="h4" noWrap component="div" style={{color: 'black'}}>
//           Page
//         </Typography>

//     <Typography paragraph>
//            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//            posuere sollicitudin aliquam ultrices sagittis orci a.
//          </Typography>

//     </Box>
//     </Box>




//     </>
//   );
// }



import React,{useState,useEffect} from 'react'
import Sidenav from '../Components-2/Sidenav'
import Tabledashboard from '../Components-2/Tabledashboard'
// import { Box } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../Components-2/Navbar";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { onAuthStateChanged } from "firebase/auth";
import useAuth from '../components/hooks/useAuth';
import AccountCircle from '@mui/icons-material/AccountCircle';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import FilterFramesTwoToneIcon from '@mui/icons-material/FilterFramesTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardReturnSharpIcon from '@mui/icons-material/KeyboardReturnSharp';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import '../Dashboard.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';




export default function Projects ()  {
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
    
    <Box sx={{ display:'flex' }} >

    <Navbar   user={user}/>

    <Box height={70}   />

    <div className='bgcolor'>



    <Box sx={{ display: 'flex' , marginTop:16 ,marginLeft:2}}>

    <Sidenav  />
    <Box component="main" sx = {{ flexGrow : 1,p: 3  }}>

       
        <Grid container spacing={2} >
        <Grid item xs={18} >


        <Stack direction="row" spacing={3}>


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
  <Grid item xs={8} >
  <Stack direction="row" spacing={4}  >



<Card  sx={{ height: 52 + 'vh' , width :1600 , paddingTop: 0, textAlign:'center' }}  className='gradientlight' >

<CardContent>




<div >

<Stack direction="row" spacing={3} sx={{ marginTop:1}}>


<Typography variant="h5" noWrap component="div" style={{color: 'red'}} >
          Top Selling 
        </Typography>
        <Typography variant="h5" noWrap component="div" color={'white'}>
          -  Projects
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
<Typography variant="h5" noWrap component="div" style={{color: 'red'}} >
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
    </Box>
     </Box>
     </div>

      </Box> 

    </>
  );
}

