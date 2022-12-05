
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout1 from './Layout1';
import Home1 from './Home1';
import AboutUs1 from './AboutUs1'
import ContactUs1 from './ContactUs1'
import Login1 from './Login1'
import Register1 from './Register1'
import NoPage1 from './NoPage1' 
import WeatherApi from './WeatherApi';
import SignIn from './SignIn';
import SignUp from './SignUp';
import WeatherApiSix from './WeatherApiSix';
import WeatherApiCards from './WeatherApiCards';
import SignUpValid from './SignUpValid';
import SignInValid from './SignInValid';
import SignInFormik from './SignInFormik';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout1 />}/>
        <Route path='home' element={<Home1/>}/>
        <Route path='aboutus' element={<AboutUs1/>}/>
        <Route path='contactus' element={<ContactUs1/>}/>
        <Route path='login' element={<Login1/>}/>
        <Route path='register' element={<Register1/>}/>
        <Route path="*" element={<NoPage1 />}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='sign-in-valid' element={<SignInValid/>}/>
        <Route path='sign-up-valid' element={<SignUpValid/>}/>
        <Route path='sign-in-formik' element={<SignInFormik/>}/>        
        <Route path='weather-api' element={<WeatherApi/>}/>
        <Route path='weather-api-six' element={<WeatherApiSix/>}/>
        <Route path='weather-api-cards' element={<WeatherApiCards/>}/>
        
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
