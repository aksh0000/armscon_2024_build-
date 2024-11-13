import React, { useState } from 'react';
import './SubmitForm.css';
import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import camera_icon from '../assets/camera_icon.png'
import { useNavigate } from 'react-router-dom';
export default function SubmitForm() {
  const navigate=useNavigate();
  const [selectedImage, setSelectedImage] = useState(camera_icon);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ attachment: '' });
  const location = useLocation();
  const json_Data = location.state;   

  let final_data = {
    personInfo: json_Data.data_to_submit.data_to_send.dataOfPerson[0],
    plans: json_Data.data_to_submit.data_to_send.dataOfPerson[1],
    entertainment: "none",
    profilePicture: json_Data.data_to_submit.data_to_send.dataOfPerson[2].profile_picture,
    screenshot: "",
    pricing:json_Data.data_to_submit.data_to_send.pricing_,
    platform:json_Data.data_to_submit.gateway,
  };

 
  console.log("THIS IS JSON DATA", json_Data.data_to_submit.data_to_send.dataOfPerson[0]);

  function check_data(message) {
    let parsedMessage = JSON.parse(message);
    if (parsedMessage.randof==true) {
      localStorage.setItem('fullname',json_Data.data_to_submit.data_to_send.dataOfPerson[0].fullname);
      localStorage.setItem('phonenumber',json_Data.data_to_submit.data_to_send.dataOfPerson[0].phoneNumber);

      alert("Registration successful!");
      console.log("pasrsed message",message);
      setLoading(false);
      navigate('/addon', {
        state: {
            personInfo: json_Data.data_to_submit?.data_to_send?.dataOfPerson?.[0]
        }
    });



      //
      
    } else {
      console.log("pasrsed message",parsedMessage.message);
      if(parsedMessage.message=="Same phone number already exists on our database."){
        alert("Sameone has already registered with same credentails.")
      }
      else{
        alert(`Sorry, the provided screenshot is invalid. It either lacks necessary transaction information or has already been submitted by another user.\nFor assistance and queries, please contact Atul: 9518899507\nJyoti:9354356598\nDivyajyoti:7982905563`);
      }
      
      setLoading(false);
    }
  }

  function POSTDATA(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('dp', final_data.profilePicture);
    formData.append('screenshot', values.attachment);
    formData.append('user_data', JSON.stringify(final_data));
    
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.text())
    .then((message) => check_data(message))
    .catch((error) => console.error(error));
  }

  const handleChange = (event) => {
    const { name, files } = event.target;
    if (files) {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          setValues((prevValues) => ({ ...prevValues, attachment: file }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  function handleClick(event) {
    setLoading(true);
    POSTDATA(event);
  }

  return (
    <main id="lalalala">
      <div id="submit_form_container">
        <article>
          <h2>Attach Screenshot of Payment!</h2>
          <p>Please attach the screenshot of the payment that you did on your respective UPI application.</p>
        </article>
        <input
          type="file"
          name="attachment"
          id="attachment"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <section id="image_holder2">
          <label htmlFor="attachment">
            <img src={selectedImage} alt="Selected Profile" />
          </label>
          <br /><br />
        </section>
        <LoadingButton
        size="large"
        sx={{width:"50%"}}
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          variant="contained"
          color="secondary"
          disabled={selectedImage==camera_icon ? true : false}
        >
          Submit
        </LoadingButton>
      </div>
    </main>
  );
}
