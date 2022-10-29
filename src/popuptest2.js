import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { UserContext } from './useContext';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog2(props) {
  const [open, setOpen] = React.useState(false);
  const [Posts, setPosts] = React.useState(null);
  const {value} = React.useContext(UserContext)
  console.log(value)
  
  useEffect(() => {
     
      fetch('http://localhost:8000/challeng2posts/')
      .then(response =>{
        if(response.ok){
          console.log('success')
        } else {
          console.log('not success')
        }
       return response.json()})
      .then((res) => setPosts(res.data))
      .catch(error =>console.log(error))
      
    },[])
    
    const handleClickOpen = () => {
      setOpen(true);
      };

  const handleClose = () => {
    setOpen(false);
  };
  

  const addPost = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: value,
      comment: data.get('comment')
    });

    if(value == 'Anonymous'){
        alert('Please sign in to post a comment')
        return
    }
    
    (async () => {
      const response = await fetch('http://localhost:8000/setpost2/', {
          method: 'POST',
          body: JSON.stringify({
            name: value,
            comment: data.get('comment')
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8'
          },
      })
    
      let res = await response.json()

       //////
    fetch('http://localhost:8000/challeng2posts/')
    .then(response =>{
      if(response.ok){
        console.log('success')
      } else {
        console.log('not success')
      }
     return response.json()})
    .then((res) => setPosts(res.data))
    .catch(error =>console.log(error))
  //////
    
      
    })()

  }

  return (
    <div>
      <Button color="anger" variant="outlined" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{backgroundColor:'red'}}  sx={{ position: 'sticky',}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>
        {Posts && Posts.map((post,index) =>{
             return <ListItem key={index}>
               <ListItemText primary={post.userpost} secondary={post.username} />
             </ListItem>
            })}
            <ListItem>
               <ListItemText primary="Can Some help download the App?😿" secondary="Rushan" />
             </ListItem>
             <ListItem>
               <ListItemText primary="You can vist the Google playstore or Appstore the app is free too 😎" secondary="Palesa" />
             </ListItem>
             <ListItem>
               <ListItemText primary="I use the website,it has all the same functions the link is kingwebsites.co.za 😀" secondary="Alec Shelembe" />
             </ListItem>
            </List>
             <Box component="form" onSubmit={addPost}>
             <ListItem>
               <TextField name="comment" id="outlined-basic" style={{marginRight:'10px'}} label="Add your post here" variant="outlined" />
               <Button type="submit" color="anger" variant="contained">Post</Button>
             </ListItem>
             </Box>
        
      </Dialog>
    </div>
    
  );
}
