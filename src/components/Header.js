import React from 'react'
import './Header.css';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import RegisterBtn from './RegisterBtn';
import LoginBtn from './LoginBtn';
import IconsHolder from './IconsHolder';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@mui/material';
export default function Header() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
}, []);
  return (
    <div id="header_container">
        <div id="div_header_linear_grad"></div>
        <section>
           
        <h1 data-aos="fade-right">ARMSCON <br/> 2024</h1>
        <h2 data-aos="fade-right"data-aos-delay="100" style={{width:'100%'}}>"Innovate, Integrate, Serve "<br/> 21<super>st</super> to 23rd November</h2>
        <div
        id="register_container_"data-aos="fade-right"data-aos-delay="200">
          <RegisterBtn />
        </div>
        <br/>
        <div
        id="register_container_"data-aos="fade-right"data-aos-delay="200">
          <Button variant='contained' color='warning' onClick={()=>window.location.href="https://forms.gle/oUMhCP837F17rWuN7"}>Healing kitchen</Button>
        </div>
        <br/>
        <div id="login_container" data-aos="fade-right"data-aos-delay="250">
          {localStorage.getItem('loggedin')?<Button variant="outlined"color="secondary" onClick={()=>window.location.href="/addon"}>ADD ons</Button>: <LoginBtn/>}
        </div >
        
        <div id="icons_container" data-aos="fade-right"data-aos-delay="300" data-aos-offset="-500">
        <IconsHolder/>
        </div>
        
        </section>
    </div>
  )
}
