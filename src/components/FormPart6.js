import React, { useEffect, useState } from 'react';
import './FormPart6.css';
import UpiQRCodeGenerator from './UPI';
import { Button } from '@mui/material';
import back_screen from './BackSwipeFx';
import swipe from './Swipe_functions';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Hr from './Hr.js';
import { useLocation, Link, useNavigate, json } from 'react-router-dom';
import gpaynv from '../assets/gpaynv.jpg';
import gpayv from '../assets/gpayv.jpg';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';
import phonepev from '../assets/phoneprv.jpg'
import phonepenv from '../assets/phonepenv.jpg'
import phonepenv2 from '../assets/phonepenv2.jpg'
import paytmv from '../assets/paytmv.jpg'
import paytmnv from '../assets/paytmnv.jpg';
import paytmnv2 from '../assets/paytmnv2.jpg';
import gpaynv2 from '../assets/gpaynv2.jpeg';

function AlertDialog({ open, handleClose, jsonData }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"sx={{textAlign:'center',background:'rgb(30,30,30)',color:'white'}}>
          {"Screenshot requirement for " + jsonData.gateway}
          
        </DialogTitle>
        <DialogContent sx={{ background: 'rgb(30,30,30)' }}>
          <DialogContentText id="alert-dialog-description">
          <p style={{fontSize:'small',color:'rgb(241,240,240)'}}>The screenshot of your payment should contain valid details like "sender's name","receiver's name",price,upi transaction id & etc</p>
          <br/>
            <section id="uuuid_container">
              <section id="valid">
                <img src={jsonData.gateway == "googlepay" && gpayv || jsonData.gateway=="phonepe" && phonepev ||jsonData.gateway == "paytm" && paytmv} style={{ height: 'auto', width: '100%' }} />
                <h2 style={{ textAlign: 'center' }}>
                  <DoneOutlineIcon sx={{ color: 'green' }} />
                </h2>
              </section>
              <section id="invalid">
                <img src={jsonData.gateway == "googlepay" && gpaynv || jsonData.gateway=="phonepe" && phonepenv || jsonData.gateway == "paytm" && paytmnv} style={{ height: 'auto', width: '100%' }} />
                <h2 style={{ textAlign: 'center' }}>
                  <CloseIcon sx={{ color: 'red' }} />
                </h2>
              </section>
              
              <section id="invalid" >
                <img src={jsonData.gateway == "phonepe" && phonepenv2 || jsonData.gateway=="2" && phonepenv ||jsonData.gateway == "paytm" && paytmnv2 || gpaynv2} style={{ height: 'auto', width: '100%' }} />
                <h2 style={{ textAlign: 'center' }}>
                  <CloseIcon sx={{ color: 'red' }} />
                </h2>
              </section>
            </section>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{background:'rgb(30,30,30)'}}>
          <Button onClick={handleClose} color="secondary">Understood</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default function FormPart6() {
  const [click, setClick] = useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const location = useLocation();
  const jsonData = location.state;
  const gateway=jsonData.gateway;
  useEffect(() => {
    handleClickOpen();
    if (jsonData && jsonData.payment_method === "Cash") {
      setClick(false);
    }
  }, [jsonData]);
  // 
  //`gpay://upi/pay?pa=goyal.2002yash-2@okaxis&pn=yash+goyal&am=${jsonData?.data_to_send?.pricing_}&cu=INR`
const gpay_link=`upi://pay?pa=goyal.2002yash@okaxis&pn=yash+goyal&am=${jsonData?.data_to_send?.pricing_}&cu=INR`;
const phonepe_link=`phonepe://pay?am=${jsonData?.data_to_send?.pricing_}&cu=INR&pn=yash%20goyal&pa=goyal.2002yash-2@okaxis`;
const paytm_link=`paytmmp://pay?pa=goyal.2002yash-2@okaxis&pn=yash+goyal&am=${jsonData?.data_to_send?.pricing_}&cu=INR`  
//
  const upiLink =gateway=="googlepay" && gpay_link || jsonData.gateway=="paytm" && paytm_link || phonepe_link;

  function next_fxn() {
    navigate(
      jsonData.payment_method === "Cash" ? "/submit2" : "/screenshot",
      {
        state: { data_to_submit: jsonData },
      }
    );
  }

  function send_to_upi() {
    window.location.href = upiLink;
    setTimeout(() => {
      setClick(false);
    }, 2000);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="form_part_6_container">
      <main>
        <article>
          <h2>Billing Info</h2>
          <ol>
            <li>
              <b>Name:</b> {jsonData?.data_to_send?.dataOfPerson[0].fullname}
            </li>
            <li>
              <b>Phno:</b> {jsonData?.data_to_send?.dataOfPerson[0].phoneNumber}
            </li>
            <li>
              <b>Email:</b> {jsonData?.data_to_send?.dataOfPerson[0].email}
            </li>
            <li>
              <b>Plan:</b> {jsonData?.data_to_send?.dataOfPerson[1].plans}
            </li>
            
            <li>
              <h2>
                <mark>Total Bill: ₹ {jsonData?.data_to_send?.pricing_}/-</mark>
              </h2>
            </li>
          </ol>
          <br />
          {jsonData.payment_method === "Cash" ? (
            <h2 id="small_para">
              You have to do the payment at the entry gateway to registration team
              <br />
              <small>
                NOTE :please don't pay to anyone else other than armscon team.
              </small>
            </h2>) : (
            <>
              <p>
                Please do the following payment on this given upi id through UPI
                application and <mark>attach the payment screenshot.</mark>
              </p>
              
              <br />
              <br />
              <section id="qrCode_holder">
                <UpiQRCodeGenerator link_={jsonData?.data_to_send?.pricing_}/>
               
              </section>
              <br />
              <hr />
            </>
          )}
          <section id="btn_holder">
          {jsonData.payment_method === "Cash" ? console.log("working"): <AlertDialog
              open={open}
              handleClose={handleClose}
              jsonData={jsonData}
            /> }
            <Button
              variant="outlined"
              color="secondary"
              onClick={next_fxn}
             
            >
              Next
            </Button>
          </section>
        </article>
      </main>
    </div>
  );
}
