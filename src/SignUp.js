import { useState } from 'react';
import './App.css';


function SignUp(){

  const [name,setName]=useState();
  const [mobileno,setMobileno]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [gender,setGender]=useState();
  const [dateob,setDateob]=useState();
  const [hobbies,setHobbies]=useState();
  const [address,setAddress]=useState();
  const [pincode,setPincode]=useState();
  const [city,setCity]=useState();
  const [states,setStates]=useState();
  const [image,setImage]=useState();
  const [userdata,setUserData]=useState();

  function getData(){
    console.log("User Sign-up Details");
    let obj = {"Name": name,"Mobile-No": mobileno,"Email-Id":email,"Password":password,
              "Gender":gender,"Date-of=Birth":dateob,"Address":address,
              "Pincode":pincode,"State":states};
    userdata.push(obj);
    setUserData([...userdata]);
    console.log(userdata);
    }

  return(
    <>
      <h1>Registration</h1>

      Name: <input id='1' type = "text" onChange={(e)=>{setName(e.target.value)}}/><br></br>

      Mobile No: <input id='2' type = "text" onChange={(e)=>{setMobileno(e.target.value)}}/><br></br>

      Email:<input id='3' type = "email" onChange={(e)=>{setEmail(e.target.value)}}/><br></br>

      Password:<input id='4' type = "password" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>

      Gender:Female<input id='5' type = "radio" name="Female" onChange={(e)=>{setGender(e.target.value)}}/> 
             Male<input id='6' type="radio" name="Male" onChange={(e)=>{setGender(e.target.value)}}/><br></br>

      DoB:<input id='7' type = "date" onChange={(e)=>{setDateob(e.target.value)}}/><br></br>

      Hobbies:<input id='8' type = "checkbox"/>Singing
              <input id='9' type = "checkbox"/>Dancing
              <input id='10' type = "checkbox"/>Pottery<br></br>

      Address:<input id='11' type = "text" onChange={(e)=>{setAddress(e.target.value)}}/><br></br>

      Pincode:<input id='12' type="text" onChange={(e)=>{setPincode(e.target.value)}}/><br></br>

      <label for="City">Choose City:</label>
      <select name="city" id="13">
        <option value="nagpur">Nagpur</option>
        <option value="wardha">Wardha</option>
        <option value="bhandara">Bhandara</option>
        <option value="amravati">Amravati</option>
      </select>
      
      <br></br>

      State:<input id='14' type = "text" onChange={(e)=>{setStates(e.target.value)}}/><br></br>

      Image:<input id='15' type = "file" /><br></br>

      <input id='16' type = "submit" onClick={()=>{getData()}}/><br></br>
    </>
    );
  }
export default SignUp;