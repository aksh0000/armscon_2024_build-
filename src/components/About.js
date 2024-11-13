import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
import image from '../assets/jack1.png'
import image_culturals from '../assets/pirate_singing.png'
import image_events from '../assets/commodore.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import image_comedy from '../assets/pirate_laughing-removebg-preview.png'
export default function About() {
    useEffect(() => {
      AOS.init({ // Animation duration (in milliseconds)
        once: true,     // Animation happens only once on scroll
      });
    }, []);
  return (
    <div id="about_container">
      <div id="about_heading_container">
        <section id="text_section">
          <h1 data-aos="fade-up" data-aos-offset="-100">What is ARMSCON?</h1>
          <p data-aos="fade-right" data-aos-delay="50" >Calling all brilliant minds in the medical world! Join us at ARMSCON 2024, The X edition of this incredible event is where creativity and intellect collide to create an unforgettable experience. With a legacy of 10+ years, ARMSCON is officially recognized by organizations like HMC, HDC and Indian Pediatrics Association.</p>
        </section>


        <div data-aos="fade-right"  data-aos-offset="30">
          <AboutCard image={image} title="20+ Workshops" subheading={["Medical", "Dental","Nursing", "Physiotherapy"]} direction={false} />
        </div>
        <div data-aos="fade-right"data-aos-offset="30">
          <AboutCard image={image_culturals} title="20+ Culturals" subheading={[
            "Dancing", "Singing", "Battle Of Bands","Dramatics"
          ]} direction={true} />
        </div>
        <div data-aos="fade-right"data-aos-offset="30">
          <AboutCard image={image_events} title="50+ Events" subheading={["Academic events", "Informal events", "Artistic events"]} />
        </div>
        <div data-aos="fade-right" data-aos-offset="30">
          <AboutCard image={image_comedy} title="Comedy Night" subheading={["Why did the pirate get kicked off the ship? \n He was always hooked on his phone."]} direction={true} />
        </div>
        <br />
        <br />
        <h1  data-aos="fade-right" data-aos-offset="30" style={{width:"80%",margin:'auto'}}>Introducing!!</h1>
      </div>

    </div>
  )
}

