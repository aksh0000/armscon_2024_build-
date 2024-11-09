import React from 'react'
import './ActivityCard.css';
import { Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import himanshu from '../assets/himanshu.jpeg';
import taha from '../assets/taha.png';
import tanisha from '../assets/tanisha.png';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export default function ActivityCard(props) {
  return (
    <div id="ActivityCard_container"style={{background:`url("${props.image}")`,backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
      
        <article>
        
        <br/>
        <section id="text_container">
        <h3>{props.name}</h3>
          <ul>
            <li>
              <h4><CalendarMonthOutlinedIcon/></h4><p>{props.date}</p>
            </li>
            <li>
              <h4><AccessTimeOutlinedIcon/></h4><p>{props.time}</p>
            </li>
            <li>
              <h4><FmdGoodOutlinedIcon/></h4><p style={{fontSize:'small'}}>{props.venue}</p>
            </li>
          </ul>
          <p id="workshop_details">
          <b>About : </b>{props.about}
          </p>
          <section id="btn_container">
          <CustomizedDialogs name_of_coordinator={props.head_coordinator} email={props.email_of_hc} phno="6396233297" />
          
        </section>
        </section>
        </article>
        
        <br/>
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
          <img src={
            props.name_of_coordinator === "Himanshu digwal" && himanshu ||
            props.name_of_coordinator === "Mohommad Taha" && taha ||
            tanisha
          } style={{width:'40px',height:'40px',borderRadius:'10px' ,marginRight:'10px'}}/>{props.name_of_coordinator}
        </DialogTitle>
        
        <DialogContent dividers sx={{width:'100%'}}>
        <Typography gutterBottom sx={{color:'grey',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <LocalPhoneIcon/>
  {
    props.name_of_coordinator === "Himanshu digwal" && 9671715162 ||
    props.name_of_coordinator === "Mohommad Taha" && 9811336243 ||
    9811290953
  }

          </Typography>
          <br/>
          <Typography gutterBottom sx={{color:'grey',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <AttachEmailIcon/>{
    props.name_of_coordinator === "Himanshu digwal" && "himanshudi149@gmail.com" ||
    props.name_of_coordinator === "Mohommad Taha" && "Siddiquitaha007@gmail.com" ||
    "tanisha100204@gmail.com"
  }
          </Typography>
          
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
