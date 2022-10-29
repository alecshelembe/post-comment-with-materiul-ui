import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect} from 'react';
import axios from 'axios';
import { Link as Thelink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Copyright(props) {

  useEffect(() => {
    document.getElementById('SignUpStatusNotice').hidden = true;
  });
  

  return (
    <Typography variant="body2" style={{paddingBottom:'20px'}} color="text.secondary" align="center" {...props}>
      {'© ABSA hackathon 2022 - '}
      <Link color="inherit" href="https://alecshelembe.github.io/site/">
        See Developer Profile
      </Link>{' '}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpSide() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('SignUpStatusNotice').hidden = true;
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      number: data.get('number'),
      password: data.get('password'),
      name: data.get('name'),
      confirmPassword: data.get('confirmpassword'),
    });
    let userEmail = data.get('email')
    let userNumber = data.get('number')
    let userPassword = data.get('password')
    let userName = data.get('name')
    let userconfirmPassword = data.get('confirmpassword')
    //checking if empty inputs
    if (!userEmail || !userPassword || !userName || !userconfirmPassword || !userNumber) {
      let message = 'Form fields incomplete';
      document.getElementById('SignUpStatusMessage').innerHTML = message;
      document.getElementById('SignUpStatusNotice').hidden = false;
      console.log('Inputs Empty')
      return
     } 
    // checking 4if passwords match 
    if (data.get('password') !== data.get('confirmpassword')) {
      let message = 'Passwords do not match';
      document.getElementById('SignUpStatusMessage').innerHTML = message;
      document.getElementById('SignUpStatusNotice').hidden = false;
      console.log('did not run')
    } else {
      
      (async () => {
        const response = await fetch('http://localhost:8000/signup/', {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
                number: userNumber,
                name: userName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
      
        const data = await response.json()
      
        console.log(data)
        let message = data.Status
        document.getElementById('SignUpStatusMessage').innerHTML = message;
        document.getElementById('SignUpStatusNotice').hidden = false;
        navigate('/Sign-in')
      })()
     
    } 

  } 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Number"
                  name="number"
                  required
                  fullWidth
                  id="numebr"
                  label="Phone Number"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <div id='SignUpStatusNotice' style={{color:'purple', fontWeight:'bold'}}><span style={{margin:'8px'}} id='SignUpStatusMessage'></span></div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  name="confirmpassword"
                  autoComplete="Confirm Password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'#ba000d'}}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Thelink to="/Sign-in" variant="body2">
                  Already have an account? Sign in
                </Thelink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}