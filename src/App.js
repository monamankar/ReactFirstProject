
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
        <Route path='weather-api' element={<WeatherApi/>}/>
        <Route path="*" element={<NoPage1 />}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
