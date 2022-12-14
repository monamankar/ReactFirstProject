import './App.css';
import { Outlet } from 'react-router-dom';

function Layout1() {
  return (
    <div className="App">
      <h1>This is layout</h1>
      <a href='/home'>Home</a> <br />
      <a href='/aboutus'>About-Us</a><br/>
      <a href='/contactus'>Contact-Us</a><br/>
      <a href='/login'>Log-in</a><br/>
      <a href='/register'>Registeration</a><br/>
      <a href='/sign-in'>Sign-In</a><br/>
      <a href='/sign-up'>Sign-Up</a><br/>
      <a href='/sign-in-valid'>Sign-In-Valid</a><br/>
      <a href='/sign-up-valid'>Sign-Up-Valid</a><br/>
      <a href='/sign-in-valid'>Sign-In-Valid</a><br/>
      <a href='/weather-api'>WeatherApi</a><br/>
      <a href='/weather-api-six'>WeatherApiSix</a><br/>
      <a href='/weather-api-cards'>WeatherApiCards</a><br/>
      
      <Outlet/>
    </div>
  );
}

export default Layout1;