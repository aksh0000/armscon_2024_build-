import React, { useEffect, useState } from 'react';
import Hr from './Hr.js';
import './FormPart1.css';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import swipe from './Swipe_functions.js';
import Autocomplete from '@mui/material/Autocomplete';

export default function FormPart1(props) {
    const [values, setValues] = useState({
        fullname: '',
        phoneNumber: '',
        email: '',
        collge: '',
        course: '',
        year: '',
        idCard: null,  // New field for ID card
    });

    const [idCardPreview, setIdCardPreview] = useState(null); // State for image preview
    const [btnState, setBtnState] = useState(true);

    // Function to send data to parent component
    const sendData = () => {
        const data = values;
        props.sendDataToParent(data); // Call parent's function
    };

    const testValues = () => {
        console.log(values.fullname, values.phoneNumber, values.email, values.collge, values.course, values.year, values.idCard);
        sendData();
        swipe(1); // Move to next slide
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Handle change for Autocomplete component
    const handleAutocompleteChange = (event, newValue) => {
        setValues((prevValues) => ({
            ...prevValues,
            collge: newValue || '',
        }));
    };

    // Handle change for ID card upload
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

    // Validation: Use `useEffect` to validate the form whenever the values change
    useEffect(() => {
        formValidation();
    }, [values]); // Trigger when any form value changes

    // Validate form fields
    const formValidation = () => {
        if (
            values.fullname === '' ||
            values.phoneNumber === '' ||
            values.email === '' ||
            values.year === '' ||
            values.course === '' ||
            !values.idCard // Ensure ID card is uploaded
        ) {
            setBtnState(true); // Disable button if any field is empty
        } else {
            setBtnState(false); // Enable button if all fields are filled
        }
    };

    // Course options
    const courses = [
         "MBBS", "BDS", "MD/MS/DNB", "Mch/DM", "B.Pharma", "B.Nursing", "BPT"
    ];

    // Year options
    const years = [
        "Older",2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
    ];

    // College options
    const colleges = [
        ,"PGIMS", "PGIDS", "College of nursing (Rohtak)", "College of pharmacy (Rohtak)", "College of physiotherapy (Rohtak)", "Kalpana Chawla medical college",
        "BPS Government Medical College for Women", "ESIC Medical College, Faridabad",
        "SHKM Nalhar", "Shri Atal Bihari Vajpayee Government Medical College, Faridabad",
        "SGT University, Gurgaon", "Adesh Medical College and Hospital, Bathinda",
        "N.C. Medical College and Hospital, Moga","Others, please specify :"
    ];

    return (
        <div id="formpart1_container" className='first_slide'>
            <article>
                <h2>Basic details</h2>
                <p>Please fill your personal details in the below mentioned form.</p>
            </article>
            <Hr />
            <section className='text_holder'>
                <TextField
                    variant='outlined'
                    color="secondary"
                    label="Full name"
                    fullWidth
                    onChange={handleChange}
                    value={values.fullname}
                    name="fullname"
                />
            </section>
            <section className='text_holder'>
                <TextField
                    variant='outlined'
                    color="secondary"
                    label="Phone number"
                    fullWidth
                    onChange={handleChange}
                    value={values.phoneNumber}
                    name="phoneNumber"
                />
            </section>
            <section className='text_holder'>
                <TextField
                    variant='outlined'
                    color="secondary"
                    label="Email address"
                    fullWidth
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                />
            </section>
            <section className='text_holder' id="select_holder">
                <TextField
                    id="outlined-select-course"
                    select
                    label="Course"
                    helperText="Select your Course"
                    onChange={handleChange}
                    value={values.course}
                    name="course"
                    color="secondary"
                >
                    {courses.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-year"
                    select
                    label="Year"
                    helperText="Select your year"
                    onChange={handleChange}
                    value={values.year}
                    name="year"
                    color="secondary"
                >
                    {years.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </TextField>
            </section>
            <section className='text_holder'>
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={colleges}
                    renderInput={(params) => (
                        <TextField
            {...params}
            label="College"
            color="secondary"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
                    )}
                    onChange={handleAutocompleteChange}
                    value={values.collge}
                    sx={{ width: 300 }}
                />
            </section>
            <section className='text_holder idcard_holder'>
                <label htmlFor='idcard'>
                    <img src={idCardPreview || "https://imgs.search.brave.com/sTgCGpiYZmAFRXqIMkfwiGt6c8Pdgsfau7X6gD_FE6U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMS8yNi91/bmtub3duLXBlcnNv/bi1jb25jZXB0LW1h/bi13aXRoLW5vLWZh/Y2UtdmVjdG9yLTM0/MTkyMTI2LmpwZw"} 
                         alt="ID Card Preview" 
                         style={{ width: "100px", borderRadius: "5px" }} />
                    <section>
                        <h4>Attach College Id card</h4>
                        <p>If you don't have any ID card of your college, attach the admission letter.</p>
                    </section>
                </label>
                <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} name="idcard" id="idcard" />
            </section>
            <Hr />
            <section className='text_holder'>
                <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    onClick={testValues}
                    disabled={btnState}
                >
                    Next
                </Button>
            </section>
        </div>
    );
}
