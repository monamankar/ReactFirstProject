import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'



    function Register1(){

      return(
    
    <Form>
      
      <div class="container">

          <Form.Group className="mb-3 pt-2" controlId="formBasicName">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Name:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="text" placeholder="Enter Full Name" /></div>
            </Form.Group>

          <Form.Group className="mb-3 pt-2" controlId="formBasicMobileNo">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Mobile No:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="text" placeholder="Enter Mobile No" /></div>
          </Form.Group>

          <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Email address:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="email" placeholder="Enter email" /></div>
          </Form.Group>

          <Form.Group className="mb-3 pt-2" controlId="formBasicPassword">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Password:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="password" placeholder="Enter password" /></div>
          </Form.Group>

          <Form.Group className="mb-3 pt-2" controlId="formBasicGender">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Gender:</Form.Label></div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="radio1" name="optradio" value="male" />
              <label class="form-check-label" for="radio1">Male</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="radio2" name="optradio" value="female"/>
              <label class="form-check-label" for="radio2">Female</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="radio2" name="optradio" value="other"/>
              <label class="form-check-label">Other</label>
            </div>
          </Form.Group>
          
          <div className="container">
            <div class="row">
              <label for="date" class="col-1 col-form-label">Date of Birth:</label>
            <div class="col-5">
            <div class="input-group date" id="datepicker">
              <input type="text" class="form-control" id="date"/>
              <span class="input-group-append">
              <span class="input-group-text bg-light d-block">
              <i class="fa fa-calendar"></i>
              </span></span>
            </div>
            </div>
            </div>
          </div>
          
          <Form.Group className="mb-3 pt-2" controlId="formBasicHobbies">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Hobbies:</Form.Label></div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check1" name="singing" value="something" />
              <label class="form-check-label" for="check1">Singing</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check2" name="dancing" value="something"/>
              <label class="form-check-label" for="check2">Dancing</label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check3" name="cricket" value="something"/>
              <label class="form-check-label">Cricket</label>
            </div>
          </Form.Group>
    
          <Form.Group className="mb-3 pt-2" controlId="formBasicAddress">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Address:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="text" placeholder="Enter Address " /></div>
          </Form.Group>
          
          <Form.Group className="mb-3 pt-2" controlId="formBasicPincode">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Pincode:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="text" placeholder="Enter Pincode" /></div>
          </Form.Group>
          
          <div className="container mt-3">
          <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
             Select City:
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Nagpur</a></li>
              <li><a class="dropdown-item" href="#">Wardha</a></li>
              <li><a class="dropdown-item" href="#">Bhandara</a></li>
            </ul>
          </div></div>
          
          <Form.Group className="mb-3 pt-2" controlId="formBasicState">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>State:</Form.Label></div>
            <div class="col-sm-6">
            <Form.Control type="text" placeholder="Enter State" /></div>
          </Form.Group>
          
          <Form.Group className="mb-3 pt-2" controlId="formBasicImage">
            <div class="row"/>
            <div class="col-sm-2"><Form.Label>Image:</Form.Label></div>
            <div class="col-sm-6">
            <img src="Image.jpg" class="rounded" alt="Image" width="304" height="236"/></div> 
          </Form.Group>

          <div className="container mt-3">
            <div class="row"/>
            <button type="button" class="btn btn-secondary">Submit</button></div>
          </div>
          
  
      </Form>


      );
    }
    
 export default Register1;