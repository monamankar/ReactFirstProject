import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function SignInValid()
{ 
  const [username,setUsername]= useState();
  const [password,setPassword]= useState();

  function loginDetails(){
  console.log("User Login Details");

  if(!username){
    alert("Please Enter Username")
    return false;
  }
  if(!password){
    alert("Please Enter Password")
    return false;
  }
  
  

  const formData = new FormData ();
  formData.append("username",username);
  formData.append("password",password);
  
  axios.post("user-login",formData,{header:{"content-type":"multipart/form-data"}})
  }

  return(
    <>
    Username:<input id='1' type="text" onChange={(e)=>{setUsername(e.target.value);}}/><br/>
    Password: <input id='2' type="password" onChange={(e)=>{setPassword(e.target.value);}}/><br></br>

    <Button onClick={()=>{loginDetails()}}>Login</Button>
    </> 
  ); 
}
export default SignInValid;
