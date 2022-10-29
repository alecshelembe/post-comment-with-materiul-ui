import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FullScreenDialog from './popuptest';
import FullScreenDialog2 from './popuptest2';
import {Link as Thelink} from 'react-router-dom'

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
     {'© ABSA hackathon 2022 - '}
      <Link color="inherit" href="https://alecshelembe.github.io/site/">
        See Developer Profile
      </Link>{' '}
    </Typography>
  );
}

const cards = [1,2,3,4,5];

const theme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
  },
});

export default function Album(props) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar style={{backgroundColor:'#d32f2f'}} position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Team Social Hackers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Absa Community Website
            </Typography>
            <Typography variant="p" align="center" color="text.secondary" paragraph>
              Our Hackathon idea is to build a social media platorm for Absa clients and others to interact with learn and grow
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Improving customer education
                    </Typography>
                    <Typography>
                      Here you can post a comment and others can respond
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    <Button style={{fontColor:'red'}} size="small">{FullScreenDialog(props)}</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Super App Enquireies
                    </Typography>
                    <Typography>
                      Ask questions about The "Super App"
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    <Button size="small">{FullScreenDialog2(props)}</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Understanding customers financial goals
                    </Typography>
                    <Typography>
                      Here you can post a comment and others can respond
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    <Button color="anger" size="small">Same Function</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  /> */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bankking For Gen Z
                    </Typography>
                    <Typography>
                      Here you can post a comment and others can respond
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button> */}
                    <Button color="anger" size="small">Same Function</Button>
                  </CardActions>
                </Card>
              </Grid>

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Thelink style={{marginBottom:'20px'}} to="/Sign-in" variant="body2">
                  Already have an account? Sign in
                </Thelink>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
