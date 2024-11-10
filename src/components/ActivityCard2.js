import React from 'react'
import './ActivityCard.css';
import Hr from './Hr.js'
import image from '../assets/doctor_treating.jpeg'
import { Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Person3Icon from '@mui/icons-material/Person3';
import AddIcon from '@mui/icons-material/Add';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import aayush from '../assets/aayush.png';
import bharti from '../assets/bharti.png';
import adrika from '../assets/adrika.png'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(4),
  },
}));
export default function ActivityCard2(props) {
  return (
    <div id="ActivityCard_container" style={{ background: `url("${props.image}")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

      <article>

        <br />
        <section id="text_container"> 
          <h3>{props.name}</h3>
          <ul>
            <li>
              <h4><CalendarMonthOutlinedIcon /></h4><p>{props.date}</p>
            </li>

            <li>
              <h4><FmdGoodOutlinedIcon /></h4><p>{props.venue}</p>
            </li>
          </ul>
          <h2 style={{ textAlign: 'left', color: 'white', padding: '0% 3%', marginTop: "30px", fontWeight: '1000', fontSize: 'large' }}>{props.subheading}</h2>
          <p id="workshop_details">
            <b>About : </b>{props.about}
          </p>
          <section id="btn_container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <CustomizedDialogs name_of_coordinator={props.hc} email={props.email_of_hc} phno={props.phone} />
            {props.forms=="" ?console.log("nothing") :<Button color="secondary" startIcon={<AddIcon/>} onClick={()=>window.location.href=props.forms}> ENROLL</Button> }
            
          </section>
         
          <br />
        </section>
      </article>

      <br />
    </div>
  )

}

function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="secondary" onClick={handleClickOpen}>Contact Coordinator</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{width:'100vw'}}
      >
        <DialogTitle sx={{ m: 0, p: 2 ,display:'flex',justifyContent:'flex-start',alignItems:'center'}} id="customized-dialog-title">
          <img src={props.name_of_coordinator == "Bharti Bhalla" && bharti || props.name_of_coordinator=="Aayush verma" && aayush || adrika} style={{width:'40px',height:'40px',borderRadius:'10px',marginRight:'10px'}}/>{props.name_of_coordinator}
        </DialogTitle>
        
        <DialogContent dividers sx={{width:'100%'}}>
        <Typography gutterBottom sx={{color:'grey',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <LocalPhoneIcon/>
          {props.phno}

          </Typography>
          <br/>
          <Typography gutterBottom sx={{color:'grey',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <AttachEmailIcon/>{props.email}
          </Typography>
          
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}