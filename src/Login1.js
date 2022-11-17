import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function Login1() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = ([]);

  function loginDetails(){
    console.log("login details")
    let obj = { "email" : name , "password" : password }
    login.push(obj);
    setLogin([...login]);
    console.log(login);
  }

  return (
          <Form>
            <div class="container">
              
              <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
                <div class="row"><div class="col-sm-2">
                  <Form.Label>Email address :</Form.Label>
                </div></div>
                <div class="col-sm-6">
                  <Form.Control type="email" onChange={(e)=>{setName(e.target.value);console.log("email-id", e.target.value);}}
                  placeholder="Enter email"/>
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </div>
              </Form.Group>

              <Form.Group  className="mb-3 pt-2" controlId="formBasicPassword">
                <div class="row"></div>
                <div class="col-sm-2"><Form.Label>Password :</Form.Label></div>
                <div class="col-sm-6"><Form.Control onChange={(e)=>{setPassword("password",e.target.value)}} type="password" placeholder="Password" /></div>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              
              <Button variant="primary" type="submit" onClick={()=>{loginDetails()}}>
                Submit
              </Button>
            </div>
          </Form>
  );
}
export default Login1;