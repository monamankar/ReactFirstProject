import { useState } from 'react';
import './App.css';
import axios from 'axios';


function SignUpValid(){

  const [name,setName]=useState();
  const [mobileno,setMobileno]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [gender,setGender]=useState();
  const [dateob,setDateob]=useState();
  const [hobbies,setHobbies]=useState([]);
  const [address,setAddress]=useState();
  const [pincode,setPincode]=useState();
  const [city,setCity]=useState();
  const [states,setStates]=useState();
  const [image,setImage]=useState();
  const [userdata,setUserData]=useState([]);

  function submitData(){
    console.log("User Sign-up Details");
    const formData = new FormData ();
    formData.append("name",name);
    formData.append("mobileno",mobileno);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("gender",gender);
    formData.append("dateob",dateob);
    formData.append("hobbies",hobbies);
    formData.append("address",address);
    formData.append("pincode",pincode);
    formData.append("city",city);
    formData.append("states",states);
    if(image && image.target.files)
    formData.append("image",image.target.files[0],image.target.files[0].name)
  
    axios.post("user-register",formData,{header:{"content-type":"multipart/form-data"}})
  }

  return(
    <>
      <h1>Registration with Validation</h1>

      Name: <input id='1' type = "text" onChange={(e)=>{setName(e.target.value)}}/><br></br>

      Mobile No: <input id='2' type = "text" onChange={(e)=>{setMobileno(e.target.value)}}/><br></br>

      Email:<input id='3' type = "email" onChange={(e)=>{setEmail(e.target.value)}}/><br></br>

      Password:<input id='4' type = "password" onChange={(e)=>{setPassword(e.target.value)}}/><br></br>

      Gender:Female<input id='5' type = "radio" name="gender" onChange={(e)=>{setGender("Female")}}/> 
             Male<input id='6' type="radio" name="gender" onChange={(e)=>{setGender("Male")}}/><br></br>

      DoB:<input id='7' type = "date" onChange={(e)=>{setDateob(e.target.value)}}/><br></br>

      Hobbies:<input id='8' type = "checkbox" name="hobbies" onChange={(e)=>{setHobbies(e,"Singing")}}/>Singing
              <input id='9' type = "checkbox" name="hobbies" onChange={(e)=>{setHobbies(e,"Dancing")}}/>Dancing
              <input id='10' type = "checkbox" name="hobbies" onChange={(e)=>{setHobbies(e,"Pottery")}}/>Pottery<br></br>

      Address:<input id='11' type = "text" onChange={(e)=>{setAddress(e.target.value)}}/><br></br>

      Pincode:<input id='12' type="text" onChange={(e)=>{setPincode(e.target.value)}}/><br></br>

      <label for="City">Choose City:</label>
      <select name="city" id="13" onChange={(e)=>{setCity(e.target.value)}}>
        <option value="nagpur">Nagpur</option>
        <option value="wardha">Wardha</option>
        <option value="bhandara">Bhandara</option>
        <option value="amravati">Amravati</option>
      </select>
      
      <br></br>

      State:<input id='14' type = "text"  onChange={(e)=>{setStates(e.target.value)}}/><br></br>

      Image:<input id='15' type = "file" onChange={(e)=>{setImage(e)}}/><br></br>

      <input id='16' type = "submit" onClick={()=>{submitData()}}/><br></br>
    </>
    );
  }
export default SignUpValid;