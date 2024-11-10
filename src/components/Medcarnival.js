import React from 'react'
import './Medcarnival.css'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
export default function Medcarnival() {
  return (
    <div id="medcarnival_container">
        <header>
            <h2>MedCarnival</h2>
           
        </header>
        <img src="https://img.freepik.com/free-photo/fantasy-dj-illustration_23-2151642121.jpg?ga=GA1.1.1437162065.1729175038&semt=ais_hybrid"/>
        
        <section>
            
            <p>
              <section style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',margin:'5% auto'}}>
              <h4 style={{border:'1px solid white',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'7px',borderRadius:'5px'}}><CalendarMonthOutlinedIcon />Day 3</h4>
              <h4 style={{border:'1px solid white',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'7px',borderRadius:'5px'}}><FmdGoodOutlinedIcon/> Auditorium main hall</h4>
              </section>
            </p>
            <ol>
                <li>PAVANPUTRA-HANUMAN</li>
                <li>NRITYA VIGHNESHWARA</li>
                <li>ALPHA BHANGRA CREW</li>
                <li>ILLUMINATI</li>
                <li>EPILEPTIC DANCE CREW</li>
                <li>SOCIETY’S REAL HEROES</li>
                <li>HARYANVI DANCE TROUPE</li>
            </ol>
        </section>
        
    </div>
  )
}
