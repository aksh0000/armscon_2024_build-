import React from 'react'
import './Feedback.css'
import { Button, TextField } from '@mui/material';
import Footer from './Footer.js'
export default function Feedback() {
    function senddata(){
    
    }
  return (
    <div id="feedback_container">
        <header>
            <h1>
                <span>ARMS</span>CON
            </h1>
            <p>Feedback is necessary for us and for our upcoming teams to organise even better event.</p>
        </header>
        <main>
            
                <h2>Feedback form</h2>
                <TextField placeholder='Your email address' label="your email address"variant='outlined'color="secondary" name="email_address_for_feedback"fullWidth />
                <br/>
                <br/>
                <TextField label="Your message..." multiline={true} rows={5} variant='outlined' color="secondary" fullWidth/>
                <br/>
                <br/>
                <Button color='secondary' variant='contained'>Send Feedback</Button>
          
        </main>
        <Footer/>
    </div>
  )
}
