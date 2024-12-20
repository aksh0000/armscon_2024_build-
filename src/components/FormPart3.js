import React, { useState } from 'react';
import './FormPart3.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import Hr from './Hr.js';
import { useLocation } from 'react-router-dom';
import swipe from './Swipe_functions';
import back_screen from './BackSwipeFx';
import { Link } from 'react-router-dom';
export default function FormPart3(props) {
    // State to store the selected value
    const [values, setValues] = useState({
        entertainment: '', // Default value
    });
    const location = useLocation();
    const personInfo = location.state?.personInfo;
    const [btnState, setBtnState] = useState(true);

    const sendData = () => {
        const data = values;
        // Call the function passed from the parent and send the data
        props.sendDataToParent(data);
    };

    function testValues() {
        sendData();
    }

    // Function to handle change event in the RadioGroup
    const handleRadioChange = (event) => {
        setValues({
            ...values,
            entertainment: event.target.value,
        });
        setBtnState(event.target.value === "");
    };

    return (
        <div id="formpart3_container">
            <article>
                <h2>
                    Wanna have some entertainment (optional)?
                </h2>
                <br />
                <p>
                    Every year at ARMSCON we organize events such as DJ Night, Gala Night, and Comedy Night to lighten the mood and for refreshment.
                </p>
            </article>
            <Hr />
            <section id="options_holder">
                <main>
                    <FormControl>
                        
                        <FormLabel id="demo-radio-buttons-group-label" color="secondary">
                            Choose one of the following options
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={values.entertainment} // Bind the value to the state
                            name="radio-buttons-group"
                            onChange={handleRadioChange} // Handle change event
                            color="secondary"
                        >
                            <FormControlLabel
                                value="Gala night"
                                control={<Radio color="secondary" />}
                                label="Gala night"
                            />
                            <FormControlLabel
                                value="Comedy night"
                                control={<Radio color="secondary" />}
                                label="Comedy night & Retro night"
                            />
                            <FormControlLabel
                                value="Gala night & Comedy night"
                                control={<Radio color="secondary" />}
                                label="Gala night , Comedy night & Retro night"
                            />
                           
                        </RadioGroup>
                    </FormControl>
                </main>
            </section>
            <Hr />
            <section id="btn_holder">
                <Button variant="outlined" color="secondary" onClick={() => window.location.href="/login"}>
                    Cancel
                </Button>
                <Link to="/billing_of_addon" state={
                    {'entertainment':values.entertainment,'personData':personInfo}
                }><Button variant="contained" color="secondary" onClick={testValues} disabled={btnState}>
                    Next
                </Button>
                </Link>
            </section>
        </div>
    );
}
