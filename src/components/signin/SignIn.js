import React from 'react'

import Header from './../header/Header'
import Footer from './../footer/Footer'

import './SignIn.css'

export function SignIn(){
    return(
        <>
       <Header/>
       <div className="signin mt-5 pt-5">
       <div className=' pt-5'>
       <div className='col-lg-12 d-flex justify-content-center signinmargin '>
         <div className='signinintro pt-3'>
         <h1>Welcome</h1>

            <div className='col-lg-12 pt-5 '>
            <form className='signinformdata '>
                 
                <input type='email' placeholder='Email' className='forminputbox'/>
                <input type='passward' placeholder='Password' className='forminputbox'/>
            </form>
            </div>
         </div>
       </div>

       </div>

       </div>
          
 
 
        <Footer/>
 
       </>
 
    )
}
 