import React from 'react'

  import Header from './../header/Header'
import Footer from './../footer/Footer'

import './About.css'

  // import {SearchRoundedIcon} from "@mui/icons-material/SearchRounded"

function About() {
  return (
    <>
    <Header/>
    <div className="About mt-5 pt-5">
    <div className="">
        <div className="col-lg-12 col-md-10 col-sm-10 d-flex justify-content-center">
         <div className="aboutintro">
            <p style={{fontSize:'2.3rem'}}>About</p>
            <i className='introtext'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo</i><br/>
            <i className='introtext'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo</i><br/>
            <i className='introtext'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo</i><br/>
            <button className="btn btn-primary mt-4">Available for hire</button>
         </div>

        </div>
        <div className= 'container mt-5 col-lg-10 d-flex '>
            <div className='middleimg'>
            <img src='https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
            <div className="container col-lg-10 mx-4 ">
                <h5  style={{fontSize:'1.6rem',color:'green'}}>Professional Photographer from Jaipur</h5>  

                <span  style={{color:'lightgreen'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                
                <div className='pt-3 d-flex biodata'>
                 <ul>
                  <li> <b>Birthday</b>:  1 may 1995</li>
                  <li> <b>website</b>:  RudRaj.com</li>
                  <li> <b>Phone</b>:  0020020035</li>
                  <li> <b>City</b>:  Jaipur Rajasthan India</li>
                 </ul>
                 <ul>
                  <li><b>Age</b>:  22</li>
                  <li><b>Degree</b>:  Master</li>
                  <li> <b>Email</b>:  merifakeid@gmail.com</li>
                  <li><b>Freelancing</b>:  Available</li>
                 </ul>
                  </div>
       <div className="discription pt-3 col-lg-8">
                       <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                       <p className="pt-2">
                       Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
                       </p>
                     </div>
            </div>
          </div>
    </div>
       
    </div>
    <Footer/>
    </>
  )
}

export default About
