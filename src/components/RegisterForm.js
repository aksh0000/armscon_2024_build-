import React, { useState } from 'react';
import './RegisterForm.css'
import { Button } from '@mui/material';
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';
import FormPart4 from './FormPart4';
import FormPart5 from './FormPart5';
import FormPart6 from './FormPart6';
import SubmitForm from './SubmitForm';
import { Link } from 'react-router-dom';

import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const RegisterForm = () => {
    // State to store the data from child components
    const [dataOfPerson, setDataOfPerson] = useState([]);
    const [pricing,setPricing]=useState(123);
    // Function to handle receiving data from child components
    function handleChildData(data) {
        console.log('Data from Child:', data);
        setDataOfPerson(prevData => [...prevData, data]);
    
        // Check if it's the relevant step and call set_pricing_for_insiders
       
    }
    

    // Function to handle form submission
    function handleFormSubmit(event) {
        // Prevent the default form submission behavior (since you are using onClick)
        event.preventDefault();
        // Output the data collected from the form parts
        alert(JSON.stringify(dataOfPerson, null, 2));
    }
    function set_pricing_for_insiders() {
        console.log("YOOO pricing college is", dataOfPerson[0].college);
      
        if (dataOfPerson[0]?.collge === "PGIMS" || 
            dataOfPerson[0]?.collge === "PGIDS" || 
            dataOfPerson[0]?.collge === "College of nursing" || 
            dataOfPerson[0]?.collge === "College of pharmacy" || 
            dataOfPerson[0]?.collge === "College of physiotherapy") {
      
          if (dataOfPerson[1]?.plans === "Basic Registeration (BR)") {
            setPricing(() => 399);
          } else if (dataOfPerson[1]?.plans === "BR + Full Day Workshops") {
            setPricing(1499);
          } else if (dataOfPerson[1]?.plans === "BR + Halfday workshops") {
            setPricing(1199);
          } else if (dataOfPerson[1]?.plans === "BR + Fullday workshops + Halfday workshops") {
            setPricing(1999);
          }
      
        } else {
      
          if (dataOfPerson[1]?.plans === "Basic Registeration (BR)") {
            setPricing(() => 499);
          } else if (dataOfPerson[1]?.plans === "BR + Full Day Workshops") {
            setPricing(1599);
          } else if (dataOfPerson[1]?.plans === "BR + Halfday workshops") {
            setPricing(1299);
          } else if (dataOfPerson[1]?.plans === "BR + Fullday workshops + Halfday workshops") {
            setPricing(1999);
          }
        }
      
        console.log("PRICING DATA IS :", pricing);
        return pricing;
      }
    const data={
        name:'akshansh kumar',
        age:20
    } 
    return (
        <div id="register_container" >
            <h1 id="heading_of_armscon">ARMSCON <br/> <h3>User Sign up</h3></h1>
            
            <section id="form_outside_container">
                <form id="register_form">
                    <div id="form_items_container">
                        <FormPart1 sendDataToParent={handleChildData} />
                    </div>
                    <div id="form_items_container">
                        <FormPart2 sendDataToParent={handleChildData} />
                    </div>
                    <div id="form_items_container">
                        <FormPart4 sendDataToParent={handleChildData} function_to_call_for_pricing={set_pricing_for_insiders}/>
                    </div>
                    <div id="form_items_container">
                        <FormPart5 sendDataToParent={handleChildData} dataOfPerson={dataOfPerson} pricing_={pricing}/>
                    </div>
                    <div id="form_items_container">
                    <FormPart3 sendDataToParent={handleChildData} />
                    </div>
                    
                    
                </form>
                <br/>
                
                
            </section>
            <footer>
                <p>
                    &copy; ARMSOCON 2024
                </p>
                <br/>
                <p id="uoiupouu">
                    <Instagram/>
                    <YouTubeIcon/>
                    <FacebookIcon/>
                </p>
            </footer>
        </div>
    );
}

export default RegisterForm;
