import React,{useContext} from 'react'

import {Link} from 'react-router-dom'
 import {DarkModeContext} from './../../Context.js'

import './Header.css'

function Header() {
  const {dispatch}=useContext(DarkModeContext)
 
  return (
    <>

    <div className='header d-flex justify-content-between fixed-top '>
     <div> <img src ="https://t3.ftcdn.net/jpg/04/19/98/82/360_F_419988231_YcqRjexNKhqSJclhRJfIhH4kPvFHN3Um.jpg" alt= '' className='cameraicon'
   style={{width:'7rem'}}
  />
    <button className='btn btn-primary mx-0' onClick={()=>dispatch({type:'TOGGLE'})}>CLICK</button>
</div>
  
    <nav className="navbar navbar-expand-lg">

  <div className="container-fluid d-flex " >
 
     <button class="navbar-toggler" style={{color:'red'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{color:'red' ,backgroundColor:'green'}}></span>
    </button>

    <div class="collapse navbar-collapse navcenter " id="navbarNavDropdown" style={{color:'red'}}>
      <ul class="navbar-nav navcenter  style={{color:'red' ,backgroundColor:'green'}}">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
         
         <li class="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>
         <li class="nav-item">
          <Link className="nav-link" to="/signin">LogIn</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 <div>
<div className='mt-4 mx-1'>
</div>
     
 </div>
    </div>
    </>
  )
}

export default Header
