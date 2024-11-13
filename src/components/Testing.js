import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedIcon from '@mui/icons-material/Verified';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'
import { Button } from '@mui/material';
const Dashboard = () => {
  const [data, setData] = useState('');
  const [payment,setPayment]=useState("")
  const [fullname,setFullname]=useState("");
  const [plan,setplan]=useState("");
  const [dp,setDp]=useState("");
  const [Verification_code,setVerify]=useState("");
  const navigate = useNavigate(); // Replace useLocation with useNavigate

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('https://www.armscon.org.in:5000/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          setFullname(response.data.data_to_rec.fullname);
          setDp(response.data.dp);
          setplan(response.data.data_to_rec.plan);
          setData(response.data.data_to_rec);
          setPayment(response.data.payment_verification);
          setVerify(response.data.verification);
          // Check available storage space before setting items
          try {
            localStorage.setItem('fullname', response.data.data_to_rec.fullname);
            localStorage.setItem('phonenumber',response.data.data_to_rec.phonenumber);
            localStorage.setItem('plan', response.data.data_to_rec.plan);
            localStorage.setItem('loggedin', true);
            // Remove storing dp to reduce storage usage
            // localStorage.setItem('dp', response.data.dp);
          } catch (error) {
            if (error.name === 'QuotaExceededError') {
              console.error('Storage quota exceeded');
              // Handle error or provide alternative storage solution
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching dashboard:', error);
          localStorage.removeItem('token');
          navigate('/login');
        });
    }
  }, [navigate]); // Dependency on navigate to prevent infinite re-renders

  return (
    <div id="dashboard_container">
      <h2 id="dddd" style={{textAlign:"center"}}>User profile</h2>
      <section id="section1_container">
      <img src={dp} style={{width:'100px',height:'100px'}}/>
      
      <artilce>
        <h2 style={{display:'flex',alignItems:'center'}}><PersonIcon sx={{border:'1px solid white',padding:'2%',borderRadius:'5px',marginRight:'5%'}}/> {localStorage.getItem('fullname')}</h2>

        <h3 style={{display:'flex',alignItems:'center'}}><SchoolIcon sx={{border:'1px solid white',padding:'2%',borderRadius:'5px',marginRight:'5%'}}/> {data.course} {data.year}</h3>
        <h3 style={{display:'flex',alignItems:'center',textAlign:'left'}}><LocationOnIcon sx={{border:'1px solid white',padding:'2%',borderRadius:'5px',marginRight:'5%'}}/> {data.college}</h3>
      </artilce>
      </section>
      <h2 id="details_heading_container">Details</h2>
      <ol>
        <li>
          <b>Plan : </b> <p>{data.plan}</p>
        </li>
        <li>
          <b>Entertainment : </b> <p>{data.entertainment}</p>
        </li>
        <li>
          <b>Full Day workshops : </b> <p>{data.full_day_workshops}</p>
        </li>
        <li>
          <b>Halfday workshops : </b><p>{data.half_day_workshops}</p>
        </li>
        <li>Payment Verification : <p>{Verification_code?  <span style={{color:'rgb(68,237,123)',display:'flex',justifyContent:'center',alignContent:'center'}}><VerifiedIcon/> <b>Verified</b></span> : <span style={{color:'red',display:'flex',justifyContent:'center',alignContent:'center'}}><InfoIcon/> Pending</span>}</p></li>
      </ol>
      <section id="control_buttons">
        <Link to="/addon"><Button color='secondary' variant='outlined' onClick={()=>alert("Your add on will be updated after 12 hours. \nWe will inform you via email.")}><AddIcon/> Add ons</Button></Link>
        <Button color='secondary' variant='outlined' onClick={()=> {localStorage.removeItem('token') 
        localStorage.removeItem('loggedin')
        navigate('/login') }}><LogoutIcon/> Logout</Button>
      </section>
      <footer>
        <p>
          &copy; ARMSCON 2024
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
