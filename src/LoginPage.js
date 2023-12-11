import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./LoginPage.css"; 

function LoginPage({email ,setEmail, password, setPassword, handleSubmit}) {

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };



  return (
    <form onSubmit={handleSubmit}>

      <h1 style={{fontStyle:'italic'}}>Admin Login</h1>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} style={{width:305,marginLeft:19}}/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit" style={{borderRadius: 40, textAlign:"center",fontSize:18,marginTop:15}}>Login</button>
      <button type="submit" style={{borderRadius: 40, textAlign:"center",fontSize:18,marginTop:15, marginLeft:220,marginBottom:22}}>User Login</button>



    


    </form>
  );
}

export default LoginPage;
