import React from 'react'
import './Testimonials_container.css'
import Testimonial_card from './Testimonial_card'
import Sponsors from './Sponsors'
import Hr from './Hr'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import testimonials_data from '../data/testimonials'
import i0 from '../testimonials/0.jpeg'
import i1 from '../testimonials/1.jpeg'
import i2 from '../testimonials/2.jpeg'
import i3 from '../testimonials/3.jpeg'
import i4 from '../testimonials/4.jpeg'
import i5 from '../testimonials/5.jpeg'
import i6 from '../testimonials/6.jpeg'
export default function Testimonials_container() {
  const dps=[i0,i1,i2,i3,i4,i5,i6]
  useEffect(() => {
    AOS.init({ // Animation duration (in milliseconds)
      once: true,     // Animation happens only once on scroll
    });
  }, []);
  return (
    <div id="Testimonials_container">
        <header id="heading_container">
            <h1 data-aos="fade-right" data-aos-offset="100">From The Desk</h1>
            <p data-aos="fade-right" data-aos-offset="80" data-aos-delay="20">Voices of Experience: College authorities share their insights, reflections, and expert views on ARMSCON</p>
        </header>
        <div id="mmmm_container">
        <section id="main_cards_holder" data-aos="fade-right" data-aos-offset="80">

          {
            testimonials_data && testimonials_data.map((item,index)=><Testimonial_card name={item.name} position={item.position} short_testicle= {item.shortdata} long_testicle={item.longdata} image={dps[index]} />)
          }
            
            
        </section>
        </div>
        <br/>
        <br/>
        <br/>
        <Hr/>
        <Sponsors/>
    </div>
  )
}
