import React from 'react'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

/* global google */

const GoogleLogin = () => {
    
  const [user,setUser] = useState({});
  
  function handleCallbackResponse(response){
    let userEmail,userName,userLastName,userImage = '';
    console.log("Encoded JWT ID token " + response.credential); 
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
      userName = userObject.given_name
      userLastName = userObject.family_name
      userEmail = userObject.email
      userImage = userObject.picture
      console.log(userEmail,userName,userLastName,userImage);
      
    //   document.getElementById("signInDiv").hidden = true;
    }
  
    useEffect(() => {
    
      google.accounts.id.initialize({
        client_id:"260137955887-tj10q3rcv4rss0ok6bu4bcucki2hldiv.apps.googleusercontent.com",
        callback: handleCallbackResponse
      })
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),{
          theme:"Outline", size:"Large"  
        }
      );
  
      google.accounts.id.prompt();
  
    },[]);

  return (
    <div>
        <div id='signInDiv'></div>
        {/* {
            user && <div><img src={user.picture}></img>
                    {console.log(user.picture)}
                        <h3>{user.name}</h3>
                </div>
        } */}
    </div>
  )
}

export default GoogleLogin

    