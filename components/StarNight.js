import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './StarNight.css'
import video from '../assets/backvdo.mp4'
import { useEffect } from 'react'
export default function StarNight() {
  useEffect(() => {
    AOS.init({ // Animation duration (in milliseconds)
      once: true,     // Animation happens only once on scroll
    });
  }, []);
  return (
    <div id="starnight_container">
      <video autoPlay={true} muted={true} loop={true}>
        <source src={video} />
      </video>
      <h1 ><br/><br/><br/>THE <br/>GALA<br/>NIGHT</h1>
    </div>
  )
}
