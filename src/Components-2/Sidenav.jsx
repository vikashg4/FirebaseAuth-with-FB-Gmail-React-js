import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Navigate, useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import FilterFramesTwoToneIcon from "@mui/icons-material/FilterFramesTwoTone";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ThreePIcon from "@mui/icons-material/ThreeP";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import "../Dashboard.css";
import Stack from "@mui/material/Stack";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

//import { useAppStore } from "../appStore";
//import DashBoards from "../Dashboard-Pages/Dashboards";
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import MenuIcon from '@mui/icons-material/Menu';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Navbar from './Navbar'
// import Navbar from './Components-2/Navbar'
// import useNavigate from 'react-router-dom';
// import {useAppStore} from '../appStore';
// import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
//import MenuIcon from "@mui/icons-material/Menu";
// import '../Dashboard-Pages/Dashboards'
//import Navbar from "../Components-2/Navbar";








const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  // backgroundColor : " #333333 " ,
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));




const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
 const [selectedItem, setSelectedItem] = React.useState("");



 
  //const updateOpen = useAppStore((state) => state.updateOpen);
  //const open = useAppStore((state) => state.dopen);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // let CustomListItem = ({ to, primary }) => (
  //   <ListItem
      
  //     component={Link}
  //     to={to}
  //     selected={to === location.pathname}
  //   >
  //     <ListItemText primary={primary} />
  //   </ListItem>
  // )





  return (
    <>
    
      {/* <Navbar /> */}

      <Box sx={{ display: "flex" , maxHeight:'100vh'}}>
        <CssBaseline />
        <Box height={30} />

        <Drawer variant="permanent" anchor="left"  open={open}>

          <DrawerHeader sx={{ marginTop: 8.4 }}>
            <Stack sx={{ marginRight: 1.7 }} direction="row" spacing={0}>
              <Typography
                variant="h4"
                noWrap
                component="div"
                style={{ color: '#2f5dbf', fontWeight:'600' }}
              >
                M
              </Typography>
              <Typography
                variant="h4"
                noWrap
                component="div"
                style={{ color: "black" ,fontWeight:'400' }}
              >
                -SoftTech
              </Typography>
            </Stack>

            {/* <IconButton onClick={handleDrawerClose}> */}

            <MenuOpenIcon
              sx={{ marginRight: 2 }}
              onClick={() => setOpen(!open)}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </MenuOpenIcon>

            {/* <IconButton onClick={()=>updateOpen(!open)}         >
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>  */}
          </DrawerHeader>
          <Divider />
         
         
         
          <List className="gradientdark">
            <ListItem  
                        
                        disablePadding
                        sx={{ display: "block", backgroundColor: selectedItem === "Dashboards" ? "white" : "transparent" }}
                        onClick={() => {
                          setSelectedItem("Dashboards");

                          navigate("/Dashboards");
                        }}

                      


                        // for text color show active 
                        // disablePadding
                        // sx={{ display: "block" }}
                        // selected={activeItem === "Dashboards"}
                        // onClick={() => {
                        //   navigate("/Dashboards");
                        //   setActiveItem("Dashboards");

              // original code no actve sidnav
              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/Dashboards");
              //}}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    <DashboardCustomizeIcon   disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Dashboards" ? "black" : "white" }} />
                  </div>
                </ListItemIcon>
                <ListItemText 
                                 //  for test color active show  use this 
                                //     primary="Dashboards"
                                //     sx={{
                                // opacity: open ? 1 : 0,
                                //   color: activeItem === "Dashboards" ? "red" : "inherit",
                                // fontWeight: activeItem === "Dashboards" ? "bold" : "normal",
                                //     }}

                  primary="Dashboards"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Dashboards" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "green" }}
                />
              </ListItemButton>
            </ListItem>
          </List>



          <List className="gradientdark">
            <ListItem 
                       disablePadding
                       sx={{ display: "block", backgroundColor: selectedItem === "/" ? "white" : "transparent" }}
                      //  onClick={() => {
                      //    navigate("/");
                      //    setSelectedItem("/");
                      //  }}



              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/");
               // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    <HomeIcon   disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Home" ? "black" : "white" }}/>
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="Home"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Home" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List className="gradientdark">
            <ListItem

                        disablePadding
                        sx={{ display: "block", backgroundColor: selectedItem === "Customers" ? "white" : "transparent" }}
                        onClick={() => {
                          navigate("/Customers");
                          setSelectedItem("Customers");
                        }}

                
              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/Customers");
              // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle"      >
                    <SupportAgentTwoToneIcon  disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Customers" ? "black" : "white" }}  />
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="Customers"
                  // sx={{ opacity: open ? 1 : 0, color: "white" }}
                  disablePadding
                        sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Customers" ? "black" : "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List className="gradientdark">
            <ListItem  
                         disablePadding
                         sx={{ display: "block", backgroundColor: selectedItem === "Projects" ? "white" : "transparent" }}
                         onClick={() => {
                           navigate("/Projects");
                           setSelectedItem("Projects");
                         }}





              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/Projects");
              // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    <ThreePIcon   disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Projects" ? "black" : "white" }}/>
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="Projects"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Projects" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List className="gradientdark">
            <ListItem
              
              
              disablePadding
                         sx={{ display: "block", backgroundColor: selectedItem === "Orders" ? "white" : "transparent" }}
                         onClick={() => {
                           navigate("/Orders");
                           setSelectedItem("Orders");
                         }}
              
              
              // disablePadding 
              // sx={{ display: "block" , fontWeight: "bold", color: "yellow"}}
              // onClick={() => {
              //   navigate("/Orders");
              // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    <FilterFramesTwoToneIcon  disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Orders" ? "black" : "white" }} />
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="Orders"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Orders" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          {/* <Divider /> */}

          <List className="gradientdark">
            <ListItem 
                         disablePadding
                         sx={{ display: "block", backgroundColor: selectedItem === "Accounts" ? "white" : "transparent" }}
                         onClick={() => {
                           navigate("/Accounts");
                           setSelectedItem("Accounts");
                         }}



              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/Accounts");
              // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* <InboxIcon />  */}
                  <div className="iconstyle">
                    <AccountCircle  disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Accounts" ? "black" : "white" }} />
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="Accounts"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Accounts" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          {/* <Divider /> */}

          <List className="gradientdark">
            <ListItem 
                      disablePadding
                      sx={{ display: "block", backgroundColor: selectedItem === "About" ? "white" : "transparent" }}
                      onClick={() => {
                        navigate("/About");
                        setSelectedItem("About");
                      }}

              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/About");
              // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    <InfoIcon  disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "About" ? "black" : "white" }} />
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="About"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "About" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          {/* <Divider /> */}

          <List className="gradientdark">
            <ListItem  
                        disablePadding
                        sx={{ display: "block", backgroundColor: selectedItem === "Tasks" ? "white" : "transparent" }}
                        onClick={() => {
                          navigate("/Tasks");
                          setSelectedItem("Tasks");
                        }}

              // disablePadding
              // sx={{ display: "block" }}
              // onClick={() => {
              //   navigate("/Tasks");
              // }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    <PlaylistAddCheckOutlinedIcon   disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Tasks" ? "black" : "white" }}/>
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="Tasks"
                  disablePadding
                  sx={{ opacity: open ? 1 : 0, color: "white" , display: "block", color: selectedItem === "Tasks" ? "black" : "white" }}
                  // sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          {/*  here for making a spcae line in side navbar in bottom side  */}

         



          <List className="gradientdark">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={()=>{navigate("/Tasks")}}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    {/* <PlaylistAddCheckOutlinedIcon    disablePadding
                       sx={{ opacity: open ? 1 : 0, color: "black" ,display: "block", color: selectedItem === "Dashboards" ? "black" : "white" }} />  */}
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary=" "
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List className="gradientdark">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              // onClick={()=>{navigate("/Tasks")}}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    {/* <PlaylistAddCheckOutlinedIcon    />  */}
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary=" "
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List className="gradientdark">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
             // onClick={()=>{navigate("/Test")}}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    {/* <PlaylistAddCheckOutlinedIcon    />  */}
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary=" "
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <List className="gradientdark">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
                //onClick={()=>{navigate("/Test")}}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <div className="iconstyle">
                    {/* <PlaylistAddCheckOutlinedIcon    />  */}
                  </div>
                </ListItemIcon>
                <ListItemText
                  primary="   "
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </List>








          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>

      
    </>
  );
}
