import React from 'react'

import { makeStyles } from "@material-ui/core";
import {Link} from 'react-router-dom'
import AliceCarousel  from "react-alice-carousel";
import img1 from  '././../../../imges/img1.jpg'
import img2 from  '././../../../imges/img2.jpg'
import img3 from  '././../../../imges/img3.jpg'
import img4 from  '././../../../imges/img4.jpg'
import img5 from  '././../../../imges/img5.jpg'
 

const data=[{
    id:1,
    song:'Marpeet',
    img :img1,
    url:'https://youtube.com/watch?v=BNXwPJrrGyQ&si=EnSIkaIECMiOmarE'
}, {
    id:2,
    song:'High Hai',
    img:img2,
    url:'https://youtube.com/watch?v=so8PxkBcj3I&si=EnSIkaIECMiOmarE'
},{
    id:3,
    song:'RockStar Launde',
    img:img3,
    url:'https://youtube.com/watch?v=4U-4qRjbux4&si=EnSIkaIECMiOmarE'
},{
    id:4,
    song:'K.O',
    img:img4,
    url:'https://youtube.com/watch?v=7To0t2Bs_Kg&si=EnSIkaIECMiOmarE'
},{
    id:5,
    song:'Jane De',
    img:img5,
    url:'https://youtube.com/watch?v=zb-YfA4v9yA&si=EnSIkaIECMiOmarE'
},]
console.log(img1)



const useStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));


const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};


function Carousel() {
 const classes =  useStyles()
  const items= data.map((val)=>{
    return(
       <div div className={classes.carouselItem}>
       <img src={val.img} alt=''  height="50"
          style={{ marginBottom: 10 }}
          />
          {val.song}
        </div>
)
})

  return (
    <div className='classes.carousel'>
     <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        items={items}    responsive={responsive}
        autoPlay
     />
 
    </div>
  )
}

export default Carousel
