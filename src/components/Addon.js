import React from 'react'
import FormPart3 from './FormPart3'
import './Addon.css'
import { useState } from 'react';
export default function Addon() {
    const [dataOfPerson, setDataOfPerson] = useState([]);
    const [pricing,setPricing]=useState(123);
    // Function to handle receiving data from child components
    function handleChildData(data) {
        console.log('Data from Child:', data);
        setDataOfPerson(data);
    
        // Check if it's the relevant step and call set_pricing_for_insiders
       
    }
  return (
    <div id="addon_container">
        <FormPart3 sendDataToParent={handleChildData}/>
    </div>
  )
}
