import React, { useEffect, useState } from 'react';
import './Menu.css';
import { Button } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Outlet, Link, useNavigate } from "react-router-dom";
import DownloadButton from './DownloadBro';
import RegisterBtn from './RegisterBtn';

function UserProfile() {
  
  return (
    <>
      <article>
        <section id="image_container">
          <img src={localStorage.getItem("dp")} alt="Menu" />
        </section>
        <section id="text_container">
          <h2>{localStorage.getItem('fullname')}</h2>
          <p>{localStorage.getItem('plan')}</p>
        </section>
      </article>
    </>
  );
}

export default function Menu({ isOpen, onClose, sendChildData }) {
  
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const navigate = useNavigate(); // Hook to navigate programmatically
  function Redirect_TO_dation(){
    if(localStorage.getItem('mode')==true){
      navigate("/speeddating");
    }
    else{
      alert("Your payment is still pending to be verified! To access the speed dating your payment should be verified, to verify your payment contact 8059169497")
    }
  }
  useEffect(() => {
    const url = window.location.pathname;
    const pathIndex = ['/', '/workshops', '/activities', '/about', '/team', '/gallery', '/healing kitchen'].indexOf(url);
    if (pathIndex !== -1) {
      setSelectedIndex(pathIndex);
    }
  }, []);

  const handleClick = () => {
    sendChildData(menuOpen ? false : console.log(menuOpen)); // Call the parent's function and pass the data
  };

  const closeMenu = () => {

    if (onClose) {
      onClose(); // Call the parent function to close the menu
    }
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    handleClick();
    closeMenu(); // Close menu on item click
  };

  const handleLogout = () => {
    // Remove JWT token or any authentication token
    localStorage.removeItem('loggedin'); // Or remove JWT if stored as localStorage.removeItem('token');
    
    // Redirect to login page or home page
    navigate('/login'); // Use the correct path for your login or home page
  };

  return (
    <div 
      id="menu-container" 
      className={isOpen ? 'menu-visible' : 'menu-hidden'} 
      style={{ zIndex: isOpen ? 1 : -2 }}
    >
      <div id="overflow_area_menu_" onClick={handleClick}></div>
      <main id="main_menu_container_" style={{ transform: isOpen ? "translateX(0%)" : "translateX(-200%)" }}>
        {
          localStorage.getItem('loggedin') ?<Link to="/testing" sx={{textDecoration:'none'}} onClick={() => handleMenuItemClick(10)}><UserProfile /></Link> : <h1 id="menu_arms_heading"><span style={{color:'rgb(136,50,153)'}}>ARMS</span>CON</h1>
        }

        <br />
        <section id="menu_holder">
          <ul className='list_of_items'>
            {['Home', 'Workshops', 'Activity', 'About UHSR', 'About Team', 'Gallery'].map((item, index) => (
              <li 
                key={index} 
                className={selectedIndex === index ? 'selected' : ''} 
                onClick={() => handleMenuItemClick(index)}
              >
                <Link to={index === 0 ? '/' : `/${item.toLowerCase().replace(" ","_")}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <p className="not_selected">{item}</p>
                </Link>
              </li>
              
            ))}
            <li onClick={()=>window.location.href="https://forms.gle/oUMhCP837F17rWuN7"}>
              <p className="not_selected">Healing kitchen</p>  
            </li>
            {localStorage.getItem('loggedin') ? <li> <Button variant='contained'color="success" onClick={()=>Redirect_TO_dation()}>Speed dating</Button></li> :console.log("lola tunes")}
            <li>
              <DownloadButton/>
            </li>
            <li>
              {localStorage.getItem('loggedin') ? <Button variant='outlined' color="secondary" onClick={handleLogout}>Logout</Button> : <RegisterBtn/>}
            </li>
          </ul>
        </section>
        <section id="menu_footer_container">
          <p>&copy; ARMSCON 2024</p>
          <br />
          <p><Instagram onClick={()=>window.location.href="https://www.instagram.com/armscon.uhsr/"}/> <YouTubeIcon onClick={()=>window.location.href="https://www.youtube.com/@ArmsconUHSR/"}/></p>
        </section>
      </main>
      <Outlet />
    </div>
  );
}
