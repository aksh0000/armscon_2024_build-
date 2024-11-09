import React, { useState } from 'react';
import './FormPart5.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Hr from './Hr.js';
import swipe from './Swipe_functions';
import back_screen from './BackSwipeFx';
import { Link, Outlet } from 'react-router-dom';

export default function FormPart5(props) {
  const [values, setValues] = useState({
    mode_of_payment: '',
    gateway: '',
  });
  const [btnState, setBtnState] = useState(true);

  const sendData = () => {
    const data = values;
    props.sendDataToParent(data);
  };

  function testValues() {
    sendData();
    swipe(5);
  }

  const data_to_send = {
    dataOfPerson: props.dataOfPerson,
    pricing_: props.pricing_,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => {
      const newValues = { ...prevValues, [name]: value };
      return newValues;
    });
    setBtnState(value === ''); // Enable button only when a payment method is selected
  };

  return (
    <div id="formpart5_container">
      <article>
        <h2 id="heading_of_payment">Payment Options</h2>
        <p id="lolp">Select the payment methods : either UPI or Cash ,</p>
        <br />
      </article>
      <Hr />
      <section id="main_items_holder">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" color="secondary">
            Choose the following options
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={values.mode_of_payment}
            name="mode_of_payment"
            onChange={handleChange}
            color="secondary"
          >
            <section id="asdf">
              <FormControlLabel
                value="UPI"
                control={<Radio color="secondary" />}
                label="UPI"
              />
              <FormControl fullWidth color="secondary" disabled={values.mode_of_payment=="UPI" ? false : true}>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Choose payment gateway
                </InputLabel>
                <Select
                  name="gateway"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.gateway}
                  label="Choose payment gateway"
                  color="secondary"
                  onChange={handleChange}
                >
                  <MenuItem value="googlepay">Google pay</MenuItem>
                  <MenuItem value="paytm">PayTm</MenuItem>
                  <MenuItem value="phonepe">PhonePe</MenuItem>
                </Select>
              </FormControl>
            </section>
            <FormControlLabel
              value="Cash"
              control={<Radio color="secondary" />}
              label="Cash"
            />
          </RadioGroup>
        </FormControl>
      </section>
      <Hr />
      <section id="btn_holder">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => back_screen(2)}
        >
          BACK
        </Button>
        <Link
          to="/billing"
          state={{
            data_to_send: data_to_send,
            payment_method: values.mode_of_payment,
            gateway:values.gateway
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={testValues}
            disabled={btnState}
          >
            NEXT
          </Button>
        </Link>
      </section>
    </div>
  );
}