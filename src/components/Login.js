import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('https://www.armscon.org.in:5000/login', {
        fullname,
      });  

      // Save the token to localStorage and navigate to dashboard
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('logged',true);
      navigate('/testing'); 
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{  }} id="login_form_container">
      <header>
        <h1>ARMSCON</h1>
      </header>
      <fieldset id="login_fieldset_container">
        
        
        
      
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p>Please enter your email address which you used to register on armscon.</p>
        <div id="input_login_holder">
          
          <TextField
            sx={{margin:'5% auto'}}
            label="email address"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            variant='outlined'
            color="secondary"
            fullWidth
          />
          
        </div>
        <Button type="submit"  variant='contained' color="secondary" id="login_btn_sender">Login</Button>
        <Link to="/register"><Button color="secondary"id="create_account_button_id" fullWidth >Create Account</Button></Link>
        
      </form>
      
      </fieldset>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <section id="menu_footer_container">
          <p>&copy; ARMSCON 2024</p>
          <br />
          <p><Instagram /> <FacebookIcon /> <YouTubeIcon /></p>
        </section>
    </div>
  );
};

export default Login;
