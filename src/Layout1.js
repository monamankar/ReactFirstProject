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
      <Outlet/>
    </div>
  );
}

export default Layout1;