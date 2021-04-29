import React, {useState, useEffect} from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return(
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy;  {new Date().getFullYear()}Nwitter</footer>
    
    
    </>

  ); 
}
export default App;
