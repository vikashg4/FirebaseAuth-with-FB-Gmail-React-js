import { TextField, Typography, Link, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import PasswordInput from "../../components/PasswordInput";
import useAuth from "../../components/hooks/useAuth";
import useAlert from "../../components/hooks/useAlert";
import {
  GoogleLoginButton,
  FacebookLoginButton,
   GithubLoginButton,
  //  GoogleButton,
} from "react-social-login-buttons";
import Divider from "../../components/Divider";
import Container from "../../components/Container";
import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function SignIn() {
  const [inputColor, setInputColor] = useState("white");

  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    login,
    googleLogin,
    facebookLogin,
     githubLogin
  } = useAuth();

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // //  here i change the code for font color in white

  //   const handleInputChange = (event) => {
  //         setFormData({ ...formData, [event.target.name]: event.target.value });

  //     // Change the inputColor based on the user input
  //     if (event.target.value === '') {
  //       setInputColor('black');
  //     } else {
  //       setInputColor('white');
  //     }
  //   };

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);

    if (!formData?.email || !formData?.password) {
      setMessage({ type: "error", text: "Todos os campos são obrigatórios!" });
      return;
    }

    const { email, password } = formData;

    const emailPattern = /^\w+@gmail\.com$/;
    // const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // password validation
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setMessage({
        type: "error",
        text: "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number.",
      });
      return;
    }

    try {
      await login({ email, password });
      navigate("/Dashboards", {formData:formData});
    } catch (error) {
      if (error.response) {
        setMessage({
          type: "error",
          text: error.response.data,
        });
        return;
      }

      setMessage({
        type: "error",
        text: "Erro, tente novamente em alguns segundos!",
      });
    }
  }

  async function handleGoogleLogin() {
    try {
      await googleLogin();
      navigate("/Dashboards");
    } catch (error) {
      if (error.message) {
        setMessage({
          type: "error",
          text: error.message,
        });
        return;
      }
      setMessage({
        type: "error",
        text: "Error, try again in a few seconds!",
      });
    }
  }

  async function handleFacebookLogin() {
    try {
      await facebookLogin();
      navigate("/Dashboards");
    } catch (error) {
      if (error.message) {
        setMessage({
          type: "error",
          text: error.message,
        });
        return;
      }
      setMessage({
        type: "error",
        text: "Error, try again in a few seconds!",
      });
    }
  }

  // async function handleGithubLogin() {
  //   try {
  //     await githubLogin();
  //     navigate("/");
  //   } catch (error) {
  //     if (error.message) {
  //       setMessage({
  //         type: "error",
  //         text: error.message,
  //       });
  //       return;
  //     }
  //     setMessage({
  //       type: "error",
  //       text: "Error, try again in a few seconds!",
  //     });
  //   }
  // }
  return (
    <>
      <div
        // class="row align-items-center pt-5 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0 "
        style={{
          backgroundImage: `url(./images/sign5.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
       
       
       {/* <card style={{height:'100vh' ,backgroundColor:'black'}} >     */}
        
        
        
       <Form onSubmit={handleSubmit}  >

          <div sx={{   display: 'flex', alignItems: 'center', justifyContent: 'center' ,width: '50%' , height:'80vh' }}>

          {/* <div
          style={{
            backgroundImage: `url(./images/sign.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "10vh",
            position: "relative",
          }}
        > */}

          <Container   >
            <Typography
              sx={{ marginBottom: "20px", color: "black" ,marginTop:'-90px' }}
              variant="h4"
              component="h1"
            >
              Sign In
            </Typography>

            {/* <Box sx={{ display: { md: "flex" } }}>
    <GoogleLoginButton onClick={handleGoogleLogin} />
    <FacebookLoginButton onClick={handleFacebookLogin} />

    
  </Box> */}

            {/* <Divider /> */}

            <Typography variant="h6" color={"black"} textAlign={"left"}>
              {" "}
              Email
            </Typography>
            <TextField
              name="email"
              sx={{ marginBottom: "19px" }}
              //  label="Email"
              type="email"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.email}
              //  InputProps={{
              //   style: { backgroundColor: 'white' }
              // }}
            />

            <Typography variant="h6" color={"black"} textAlign={"left"}>
              {" "}
              Password
            </Typography>

            <PasswordInput
              name="password"
              sx={{ marginBottom: "19px" }}
              //  label="Password"
              onChange={handleInputChange}
              value={formData.password}
              InputProps={{
                style: { backgroundColor: "white" },
              }}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                marginTop: 2,
                marginBottom: "16px",
                maxWidth:'650px',
                backgroundColor: "#00",
                "&:hover": {
                  backgroundColor: "#00",
                },
              }}
            >
              Log In
            </Button>

            <div>
              <Divider style={{}} />
            </div>

            {/* <Divider  style={{ backgroundColor: 'white'  }} /> */}

            <Box sx={{ marginTop: 2,marginLeft:'-14px' , display: { md: "flex" ,width:'480px'} }}>
              <GoogleLoginButton onClick={handleGoogleLogin} />
              <FacebookLoginButton onClick={handleFacebookLogin} style={{ width: '500px', height: '50px' }} />
              {/* <GoogleButton onClick={handleFacebookLogin}/> */}
              {/* <GithubLoginButton onClick={handleGithubLogin} /> */}
            </Box>

            <Link component={RouterLink} to="/sign-up">
              <Typography marginTop={4} variant="h6" color={"black"}>
                I don't have an account!
              </Typography>
            </Link>
          </Container>

          {/* </div> */}

          {/* </Card> */}
        
                </div>
 </Form>
        
        
        
       
      </div>
    </>
  );
}
export default SignIn;
