import React from 'react'

import './Middle.css'
function Middle() {
  return (
    <div className="container middle pt-5 ">
    
    <div className="row d-flex justify-content-center col-lg-6 col-md-12 col-sm-12 pt-2">
    
       <div className='intro pt-5'>
       
          <i className='maini'> Hi I'm <span className='namecss'>RudRaj</span> a</i> <br/>
          <i>Professional Photographer</i> <br/>
          <i>from New York City</i>
       </div>
        <div>
            <p style={{color:'white' ,fontSize:'1.2rem'}}>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
            <div className='hirebtn'>
            <button className='btn btn-danger '>AVAILABLE FOR HIRE</button>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Middle
