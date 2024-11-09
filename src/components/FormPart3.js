import React, { useState } from 'react';
import './FormPart3.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import Hr from './Hr.js';
import swipe from './Swipe_functions';
import back_screen from './BackSwipeFx';

export default function FormPart3(props) {
    // State to store the selected value
    const [values, setValues] = useState({
        entertainment: '', // Default value
    });
    const [btnState, setBtnState] = useState(true);

    const sendData = () => {
        const data = values;
        // Call the function passed from the parent and send the data
        props.sendDataToParent(data);
    };

    function testValues() {
        console.log(values.entertainment);
        sendData();
        swipe(3);
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
                    Wanna have some entertainment?
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
                                label="Comedy night"
                            />
                            <FormControlLabel
                                value="Gala night & Comedy night"
                                control={<Radio color="secondary" />}
                                label="Gala night & Comedy night"
                            />
                            <FormControlLabel
                                value="None"
                                control={<Radio color="secondary" />}
                                label="None"
                            />
                        </RadioGroup>
                    </FormControl>
                </main>
            </section>
            <Hr />
            <section id="btn_holder">
                <Button variant="outlined" color="secondary" onClick={() => back_screen(1)}>
                    Back
                </Button>
                <Button variant="contained" color="secondary" onClick={testValues} disabled={btnState}>
                    Next
                </Button>
            </section>
        </div>
    );
}
