import React from 'react'
import Avatar from '@mui/material/Avatar';
import p1 from './images/avatar/p1.jpg';
import p2 from './images/avatar/p2.jpg';
import p3 from './images/avatar/p3.jpg';

const Profile = () => {
  return (
    <div>
        <Avatar alt="Remy Sharp" src={p1} />
        <Avatar alt="Travis Howard" src={p2} />
        <Avatar alt="Cindy Baker" src={p3} />
    </div>
  )
}

export default Profile