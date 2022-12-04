import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function SignInValid()
{ 
  const [username,setUsername]= useState();
  const [password,setPassword]= useState();
  const [userdata,setUserdata]= useState([]);

  function loginDetails(){
  console.log("User Login Details");
  let obj = {"Username":username,"Password":password}
  userdata.push(obj);
  setUserdata([...userdata]);
  console.log(userdata);
  document.getElementById(1).value= '';
  document.getElementById(2).value= '';
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
