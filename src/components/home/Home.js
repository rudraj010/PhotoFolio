import React from 'react'

import Header from './../header/Header'
import Footer from './../footer/Footer'
import Card from './card/Card'
import Middle from '././middle/Middle'
import Carousel from './carousel/Carousel'

function Home() {
  return (
    <div>
      <Header/>
      <Middle/>
      {/* <Carousel/> */}
      <Card/>
      <Footer/>

    </div>
  )
}

export default Home
