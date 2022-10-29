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
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleLogin from './GoogleLogin';
import Album from './blog';
import {UserContext} from './useContext'
import { Link as Thelink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© ABSA hackathon 2022 - '}
      <Link color="inherit" href="https://alecshelembe.github.io/site/">
        See Developer Profile
      </Link>{' '}
    </Typography>
  );
}


const theme = createTheme();

export default function SignInSide() {

  let navigate = useNavigate();
  const {value,setValue}= React.useContext(UserContext)

  const [logName, setlogName] = useState('None');
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('StatusNotice').hidden = true;
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
    let userEmail = data.get('email')
    let userPassword = data.get('password')
    //checking if empty inputs
    if (!userEmail || !userPassword) {
      let message = 'Form fields incomplete';
      document.getElementById('StatusMessage').innerHTML = message;
      document.getElementById('StatusNotice').hidden = false;
      console.log('Inputs Empty')
      return
     } else {
      
      (async () => {
        const response = await fetch('http://localhost:8000/signin/', {
            method: 'POST',
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
      
        let res = await response.json()
        if(res.data =='Account Credentials are incorrect'){
          let message = res.data
          document.getElementById('StatusMessage').innerHTML = message;
          document.getElementById('StatusNotice').hidden = false;
          return
        }
        setlogName(res.data)
        setValue(res.data)
      
        console.log(value)
        console.log(res)
        let message = 'Welcome back '+ res.data
        document.getElementById('StatusMessage').innerHTML = message;
        document.getElementById('StatusNotice').hidden = false;

        navigate('/')

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
          <Typography component="h1" sx={{ mb: 2 }} variant="h5">
            Sign in 
          </Typography>

          {/* <GoogleLogin></GoogleLogin> */}

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                <div id='StatusNotice' style={{color:'purple', fontWeight:'bold'}}><span style={{margin:'8px'}} id='StatusMessage'></span></div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'#ba000d'}}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Thelink to="/Sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Thelink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>

    </ThemeProvider>
    
  );
}