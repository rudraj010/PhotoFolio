import { useContext } from "react";

import {BrowserRouter, Routes,Route} from'react-router-dom'
import About from './components/about/About'
import Home from '././components/home/Home'
import Service from '././components/service/Service'
import {DarkModeContext} from './Context'
import {SignUp} from './components/signup/SignUp'
import {SignIn} from './components/signin/SignIn'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode?'light':'app'}>  
    <div>
    <BrowserRouter>

    {/* <Home/> */}
      <Routes>
      <Route path ="/" element={  <Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

    </div>

         
    </div>
  );
}

export default App;
