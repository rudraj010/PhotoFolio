import React,{useState,useEffect} from 'react'

import {createUserWithEmailAndPassword} from 'firebase/auth'
import Header from './../header/Header'
import Footer from './../footer/Footer'
import {auth} from '../../config'

import './SignUp.css'

// import { ToastContainer, toast } from "react-toastify";

export function SignUp(){
    const [response,setResponse]=useState()

    const [users,setUsers]=useState({
        name:'',
        email:'',
        passward:'',
    })

    const{name,email,passward}=users;

    const OnChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUsers({...users,[name]:value});
    }

    
    const SubmitData=async (e)=>{
        e.preventDefault();
    //    await fetch('https://photofolio-22e51-default-rtdb.firebaseio.com/photofolio.json',{
    //     method:'POST',
    //     headers:{
    //         'content-type':'application/json'
    //     }, body:JSON.stringify({
    //         name,
    //         email,
    //         passward
    //     })

    //    }).then((res)=>{
    //     res.json().then((result)=>{
    //         setResponse(result)
            
    //         console.log(result,'lll')
    //     }) 
        
    //    })
                                                              
       await createUserWithEmailAndPassword(auth,users.email,users.passward).then((res)=>{
        console.log(res)
       }).catch((err)=>{console.log('err',err)})
    }

                                                      
                                                        


    return(
        <>
       <Header/>
<div className='signup pt-5'>
<div className='pt-5'>
<div className=" col-lg-12 col-md-10 col-sm-10 d-flex justify-content-center pt-3">
         <div className="signupintro">
            <h2 style={{fontSize:'2.3rem'}}>Welcome</h2> 
            <span>Please fill out thr following information</span>
        </div>
        
</div>
       <div className='container mt-5 col-lg-12 d-flex justify-content-between'>
       <div className='signupmiddleimg'>
            <img src='https://images.unsplash.com/photo-1499417267106-45cebb7187c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt=''/>
            </div>

            <div className="d-flex col-lg-6 mt-5">
            <form className='' onSubmit={SubmitData} method='POST'>
                <input type='text' placeholder='Name' className='forminputbox' name='name' value={users.name} onChange={OnChange}/>
                <input type='email' placeholder='Email' className='forminputbox'name='email' value={users.email} onChange={OnChange}/>
                <input type='passward' placeholder='Passward' className='forminputbox' name='passward' value={users.passward} onChange={OnChange}/>
                <div className='d-flex text-align-center submitbtn col-lg-10 pt-3'>
                <button type='submit' className=' submitbtn btn btn-success  '>SignUp</button>
                </div>
            </form>
            </div>
       </div>

        </div>
</div>
<Footer/>
</>
    )
}
 