
    function Register1(){

      return(

        <div>
    Name: <input type = "text"/><br></br>

    Mobile No: <input type = "text"/><br></br>

    Email:<input type = "email"/><br></br>

    Password:<input type = "password"/><br></br>

    Gender:Female<input type = "radio" name="Female"/> Male<input type="radio" name="Male" /><br/>

    DoB:<input type = "date" /><br/>

    Hobbies:<input type = "checkbox"/>Singing<input type = "checkbox"/>Dancing<input type = "checkbox"/>Pottery<br/>

    Address:<input type = "text"/><br/>

    Pincode:<input type="text"/><br/>

    <label for="City">Choose City:</label>
    <select name="city" id="city">
      <option value="nagpur">Nagpur</option>
      <option value="wardha">Wardha</option>
      <option value="bhandara">Bhandara</option>
      <option value="amravati">Amravati</option>
    </select>
    
    <br/>

    State:<input type = "text"/><br></br>

    Image:<input type = "file"/><br></br>

    <input type = "submit"/><br></br>
    </div>
    );
  }
    
 export default Register1;