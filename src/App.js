import React from 'react'
import {Nav} from './components/Navbar/navbar'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Login} from './components/Login/login';
import {Landing} from './components/Landing/landing'
import {Message} from './components/Message/message'
import UserProvider from './components/Firebase/context'
const App=()=>{
  return(
    <UserProvider>
      <Router>
        <Nav/>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/message" component={Message}/>
      </Router>
    </UserProvider>
  )
}

export {App}