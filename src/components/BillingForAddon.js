import React, { useEffect, useState } from 'react';
import './BillingForAddon.css';
import { useLocation } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import UpiQRCodeGenerator from './UPI';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl, { formControlClasses } from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
export default function BillingForAddon() {
    const [price_for_entertainment, setPricingEntertainment] = useState("");
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const entertainment = location.state.entertainment;
    const name = localStorage.getItem('fullname');
    const phoneNumber = localStorage.getItem('phonenumber');
    console.log("daATA", name,phoneNumber)
    useEffect(() => {
        if (entertainment === "Gala night") {
            setPricingEntertainment(699);
        } else if (entertainment === "Comedy night") {
            setPricingEntertainment(399);
        } else {
            setPricingEntertainment(999);
        }
    }, [entertainment]); // Add dependency array

    const [idCardPreview, setIdCardPreview] = useState(null);
    const [values, setValues] = useState({
        gateway: '',
        idCard: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setValues((prevValues) => ({
                ...prevValues,
                idCard: file, // Update with selected file
            }));
            setIdCardPreview(URL.createObjectURL(file)); // Update preview URL
        }
    };

    const gpay_link = `upi://pay?pa=goyal.2002yash@okaxis&pn=yash+goyal&am=${price_for_entertainment}&cu=INR`;;
    const phonepe_link = `phonepe://pay?am=${price_for_entertainment}&cu=INR&pn=yash%20goyal&pa=goyal.2002yash-2@okaxis`;
    const paytm_link = `paytmmp://pay?pa=goyal.2002yash-2@okaxis&pn=yash+goyal&am=${price_for_entertainment}&cu=INR`;

    const upiLink = values.gateway === "googlepay" ? gpay_link :
        values.gateway === "paytm" ? paytm_link : phonepe_link;
    function handleClick(event) {
        setLoading(true);
        postData(event)
    }
    async function postData(event) {
        event.preventDefault(); // Prevent default form submission

        // Create FormData object to handle file and other fields
        const formData = new FormData();
        formData.append("name", name);
        formData.append('phone', phoneNumber);
        formData.append("entertainment", entertainment);
        formData.append("pricing", price_for_entertainment);
        formData.append('platform', values.gateway);
        // Append the file if it exists
        if (values.idCard) {
            formData.append("screenshot", values.idCard); // Use the file, not the preview URL
        }

        console.log('Sending FormData:', formData);

        // Send as multipart/form-data
        fetch("http://localhost:5000/addon", {
            method: 'POST',
            body: formData // Directly pass FormData
        })
            .then(response => response.json())
            .then(data => ss_data(data))
            .catch(err => console.log(err));
    }
    function ss_data(data) {
        console.log("adadadada",localStorage.getItem('personinfo'));
        if (data.message == "This screenshot is not valid") {
            alert(data.message);
            
        }
        else {
            alert(data.message);
            
           
        }
        setLoading(false);

    }
    return (
        <div id="BillingForAddon_container">
            <header>
                <h1>Billing info for entertainment:</h1>
            </header>
            <section id="details_container">
                <>
                    <p><b>Name :</b>{name}</p>
                    <p><b>Phone number:</b>{phoneNumber}</p>
                    <p><b>Entertainment : </b>{entertainment}</p>
                    <h3>Total : <mark>Rs.{price_for_entertainment} /-</mark></h3>
                </>
            </section>
            <section id="asdf">

                <FormControl color="secondary" sx={{ width: '50%', marginBottom: '20px' }}>
                    <InputLabel id="demo-simple-select-label" color="secondary">
                        payment gateway
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
                <section>
                    <UpiQRCodeGenerator link_={price_for_entertainment} />
                    {/*<Button
                        variant="contained"
                        onClick={() => window.location.href = upiLink}
                        fullWidth
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "black",
                        }}
                        disabled={values.gateway === "" ? true : false}
                    >
                        <br />
                        <img
                            src="https://imgs.search.brave.com/lSwWlBC7tbawISXPxS5QqLaAazZuLsGsdTHgigS6-c8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3VwaS11/bmlmaWVkLXBheW1l/bnRzLWludGVyZmFj/ZTQ5NDkubG9nb3dp/ay5jb20ud2VicA"
                            style={{ width: "40px", borderRadius: '5px', marginRight: '10px' }}
                        />
                        <h3 style={{ color: "white" }}>
                            Pay ₹{price_for_entertainment} via UPI
                    </h3>
                    </Button>*/}

                </section>
            </section>
            <section id="addon_screenshot_container">
                <label htmlFor='ss_addon'>
                    <img
                        src={idCardPreview || "https://imgs.search.brave.com/TogEfOIhkHkp4QJOLBoCsGLnETXquRDGJuWjmc0kM-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXBwbGUtYXBw/cy8xMDAvQXBwbGVf/UGhvdG9zLTUxMi5w/bmc"}
                        alt="ID Card Preview"
                        style={{ width: "100px", borderRadius: "5px" }}
                    />
                    <section>
                        <h4>Attach the payment screenshot</h4>
                        <p>Please attach the payment screenshot containing all the necessary details such as UPI ID, sender's name, and receiver's name.</p>
                    </section>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    name="ss_addon"
                    id="ss_addon"
                    disabled={values.gateway === "" ? true : false}
                />
                
              
                <LoadingButton
                    size="large"
                    sx={{ width: "50%" }}
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    variant="contained"
                    color="secondary"
                    
                >
                    <span style={{color:'white'}}>Submit</span>
                </LoadingButton>
                <br />
                <br />
            </section>
        </div>
    );
}
