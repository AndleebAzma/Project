import React, { useState } from 'react';
import LoginForm from './LoginForm';
import NavigationBar from './NavigationBar';
const Home = () => {
    return(
<div> <NavigationBar></NavigationBar>
      <h1> Welcome to  Food Application</h1>
      <LoginForm> </LoginForm></div>
    )
}
export default Home