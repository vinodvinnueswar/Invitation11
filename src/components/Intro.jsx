import React from 'react'
import VideoBg from '../videos/FireWorks2.mp4'
import Hall from '../images/Hall/Hall.png'
import Road from '../images/Road/Road.png'
import BRGR from '../images/BRGR/BrideGroom.png'
import Garden from '../images/Garden/Garden.png'
import Tree from '../images/Garden/Tree.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"

 
const Intro = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="Intro_Container">
        <div className="Intro_Page">
          <video src={VideoBg} autoPlay loop muted/>
          <div className="Hall">
          <img src={Hall} alt="" />
          </div>
          <div className="Road">
            <img src={Road} alt="" />
          </div>
          <div className="Tree">
            <img src={Tree} alt="" />
          </div>
          <div className="BRGR">
            <img src={BRGR} alt="" />
          </div>
    
          <div className="Garden">
            <img src={Garden} alt="" />
        </div>
        <div className="Names" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <h2>Rachana & Rohan</h2>
            <p>25th - 28th | May 2025</p>
            <p>The Raj Banjara </p>
            <p>Banjara Hills , Hyderabad 📍</p>
        </div>
        </div>

    </div>
  )
}

export default Intro