import React from 'react'
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import SignInSide from './SignInSide';
import SignUpSide from './SignUpSide';
import Album from './blog';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { UserContext } from './useContext';
import { useState } from 'react';


const App = () => {
    // const userName = React.useContext(UserContext)
    const [value,setValue] = useState('Anonymous')

  return (
    <Router>
        <UserContext.Provider value={{value,setValue}}>
      <Routes>
          <Route path="/Sign-in" element={<SignInSide />}></Route> 
          <Route path="/Sign-up" element={<SignUpSide />}></Route>
          <Route path="/" element={<Album />}></Route>
      </Routes>
        </UserContext.Provider>
    </Router>
  )
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
