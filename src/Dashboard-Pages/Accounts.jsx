// import React from 'react'
// import Sidenav from "../Sidenav"

// const Profile = () => {
//   return (
//     <>
    
//     <Sidenav  />
//     <div>
//       profile
//     </div>
    
    
//     </>
//   )
// }

// export default Profile







// import React from 'react'
// import Sidenav from '../Components-2/Sidenav'
// // import { Box } from '@mui/material'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Navbar from '../Components-2/Navbar';

// export default function Accounts ()  {
//   return (
//     <>
    
//     <Navbar />

//     <Box height={40} />


//     <Box sx={{ display: 'flex' }}>

//     <Sidenav  />
//     <Box component="main" sx = {{ flexGrow : 1,p: 3}}>






//    <Typography variant="h4" noWrap component="div" style={{color: 'red'}}>
//           Accounts
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




export default function Accounts ()  {
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

















// // import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// //import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// // import MuiAppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// //import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';
// import { Navigate, useNavigate } from 'react-router-dom';
// // import Navbar from './Navbar'
//  // import Navbar from './Components-2/Navbar'
// // import useNavigate from 'react-router-dom';
// // import {useAppStore} from '../appStore';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// // import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
// import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
// import FilterFramesTwoToneIcon from '@mui/icons-material/FilterFramesTwoTone';
// import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
// import InfoIcon from '@mui/icons-material/Info';
// import HomeIcon from '@mui/icons-material/Home';
// import ThreePIcon from '@mui/icons-material/ThreeP';
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
// import '../Dashboard.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useAppStore } from '../appStore';
// // import '../Dashboard-Pages/Dashboards'
// import DashBoards from '../Dashboard-Pages/Dashboards';
// //import Navbar from "../Components-2/Navbar";
// import Stack from '@mui/material/Stack';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';


// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   // backgroundColor : " #333333 " ,
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// // const AppBar = styled(MuiAppBar, {
// //   shouldForwardProp: (prop) => prop !== 'open',
// // })(({ theme, open }) => ({
// //   zIndex: theme.zIndex.drawer + 1,
// //   transition: theme.transitions.create(['width', 'margin'], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   ...(open && {
// //     marginLeft: drawerWidth,
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   }),
// // }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function Accounts() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);
//   const  navigate = useNavigate();

//   //const updateOpen = useAppStore((state) => state.updateOpen);
//   //const open = useAppStore((state) => state.dopen);



//   // const handleDrawerOpen = () => {
//   //   setOpen(true);
//   // };

//   // const handleDrawerClose = () => {
//   //   setOpen(false);
//   // };





// return (
//   <>


//   {/* <Navbar /> */}


// <Box sx={{ display: 'flex'  }}  >
//   <CssBaseline />  
//   <Box height={30} />
//   <Drawer variant="permanent" open={open}>
  


//     <DrawerHeader sx={{marginTop:8.4}} >
     
//     <Stack  sx={{marginRight:1.7}}  direction="row" spacing={0}>
//      <Typography  variant="h4" noWrap component="div" style={{color: 'red'}}>
//         M
//       </Typography>
//       <Typography variant="h4" noWrap component="div" style={{color: 'black'}}>
//         -SoftTech
//       </Typography>
//      </Stack>
      
//       {/* <IconButton onClick={handleDrawerClose}> */}
      
     
     
     
     
//       < MenuOpenIcon sx={{marginRight:2}} onClick={()=>setOpen(!open)} >

//       {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}

//       </MenuOpenIcon> 





//       {/* <IconButton onClick={()=>updateOpen(!open)}         >
//         {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//       </IconButton>  */}
      
//      </DrawerHeader>
//     <Divider />
//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block'  }}   onClick={()=>{navigate("/Dashboards")}} >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >

//                 <div className='iconstyle'>
//                 <DashboardCustomizeIcon />
//                 </div>

//             </ListItemIcon>
//             <ListItemText  primary = "Dashboards" sx={{ opacity: open ? 1 : 0 , color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>






//        <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate("/")}}>
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//                <div className='iconstyle'>
//                <HomeIcon /  >
//                </div>
//             </ListItemIcon>
//             <ListItemText  primary = "Home" sx={{ opacity: open ? 1 : 0 ,color:'white'}} />
//           </ListItemButton>
//         </ListItem>
//     </List>





//     <List  className='gradientdark' > 
//     <ListItem disablePadding sx={{ display: 'block' }} 
//      onClick={()=>{navigate("/Customers")}}
//     >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//                 <div className='iconstyle'>
//                 <SupportAgentTwoToneIcon    />
//                 </div>
//             </ListItemIcon>
//             <ListItemText  primary = "Customers" sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>






//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }}
//       onClick={()=>{navigate("/Projects")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//                 <div className='iconstyle'>
//                 <ThreePIcon   />
//                 </div>
//             </ListItemIcon>
//             <ListItemText  primary = "Projects" sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>






//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }} 
//      onClick={()=>{navigate("/Orders")}}
//     >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >  
//             <div className='iconstyle'>
//             <FilterFramesTwoToneIcon    />
//             </div>
               
//             </ListItemIcon>
//             <ListItemText  primary = "Orders" sx={{ opacity: open ? 1 : 0 ,color:'white'}} />
//           </ListItemButton>
//         </ListItem>
//     </List>





//     {/* <Divider /> */}

//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block',bgcolor:'red' }}
//      onClick={()=>{navigate("/Accounts")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//                {/* <InboxIcon />  */}
//              <div className='iconstyle'>
//              <AccountCircle  />
//              </div>

//             </ListItemIcon>
//             <ListItemText  primary = "Accounts" sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>
//     {/* <Divider /> */}

//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }} 
//      onClick={()=>{navigate("/About")}}
//     >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//                 <div className='iconstyle'>
//                 <InfoIcon  /> 
//              </div>
//             </ListItemIcon>
//             <ListItemText  primary = "About" sx={{ opacity: open ? 1 : 0  ,color:'white'}} />
//           </ListItemButton>
//         </ListItem>
//     </List>

//     {/* <Divider /> */}

//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }}
//       onClick={()=>{navigate("/Tasks")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//              <div className='iconstyle'>
//              <PlaylistAddCheckOutlinedIcon    /> 
//              </div>
//             </ListItemIcon>
//             <ListItemText  primary = "Tasks" sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>




// {/*  here for making a spcae line in side navbar in bottom side  */}







// <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }}
//       // onClick={()=>{navigate("/Tasks")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//              <div className='iconstyle'>
//              {/* <PlaylistAddCheckOutlinedIcon    />  */}
//              </div>
//             </ListItemIcon>
//             <ListItemText  primary = " " sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>






//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }}
//       // onClick={()=>{navigate("/Tasks")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//              <div className='iconstyle'>
//              {/* <PlaylistAddCheckOutlinedIcon    />  */}
//              </div>
//             </ListItemIcon>
//             <ListItemText  primary = " " sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>







//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }}
//       // onClick={()=>{navigate("/Tasks")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//              <div className='iconstyle'>
//              {/* <PlaylistAddCheckOutlinedIcon    />  */}
//              </div>
//             </ListItemIcon>
//             <ListItemText  primary = " " sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>





//     <List  className='gradientdark' >
//     <ListItem disablePadding sx={{ display: 'block' }}
//       //  onClick={()=>{navigate("/Test")}}
//      >
//           <ListItemButton
//             sx={{
//               minHeight: 48,
//               justifyContent: open ? 'initial' : 'center',
//               px: 2.5,
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: 0,
//                 mr: open ? 3 : 'auto',
//                 justifyContent: 'center',
//               }}
//             >
//              <div className='iconstyle'>
//              {/* <PlaylistAddCheckOutlinedIcon    />  */}
//              </div>
//             </ListItemIcon>
//             <ListItemText  primary = "   " sx={{ opacity: open ? 1 : 0 ,color:'white' }} />
//           </ListItemButton>
//         </ListItem>
//     </List>





















//     <Divider />

   
//   </Drawer>
//   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

//     <DrawerHeader />
//   </Box>
// </Box>

// </>
// );
// }