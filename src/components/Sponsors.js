import React from 'react'
import './Sponsors.css'
import Sponsor_card from './Sponsor_card'
import dell from '../assets/Dell-removebg-preview.png';
import IBM from '../assets/IBM-Company-Logo-Design-removebg-preview.png';
import FedX from '../assets/FedEx-removebg-preview.png';
import adidas from '../assets/adidas-removebg-preview.png';
import Hr from './Hr';
import { useEffect } from 'react'
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Sponsors() {
  useEffect(() => {
    AOS.init({ // Animation duration (in milliseconds)
      once: true,     // Animation happens only once on scroll
    });
  }, []);
  return (
    <div id="sponsors_container">
        <header>
            <h1 data-aos="fade-right" data-aos-offset="30">Sponsors</h1>
            

        </header>
        
        <main>
            <Sponsor_card image="https://imgs.search.brave.com/xug4Wo3qivIZobRD2jBvHWIcKe-fVYe31BXZIXCSIVU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhLzJj/LzFkLzJhMmMxZDkw/MDc1MzkwYjIyZTdl/NjA2MDI1NGRhYjBk/LmpwZw" title="Dell" />
            <Sponsor_card image={sponsor2} title="Adidas"/>
          
        </main>
        <Hr/>
    </div>
  )
}

