import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Workshops.css'
import { Button } from '@mui/material';
import Footer from '../components/Footer.js'
import ActivityCard2 from '../components/ActivityCard2';
import events_data from '../data/events';
import culturals from '../data/culturals';
import Medcarnival from '../components/Medcarnival';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Activities() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}} id="workshops_container">
        <h1 id="heading_">
            Activities
        </h1>
        <p id="subheading_">We host 50+ events & cultural activities encompassing all genres ensuring no stone is left un-turned.</p>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,position:'sticky',top:'0px',background:'black',color:'white'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons={false} variant='fullWidth' indicatorColor="secondary" textColor='secondary' sx={{zIndex:1000,background:'black'}}>
          <Tab label="Events" {...a11yProps(0)} sx={{color:'white'}}/>
          <Tab label="Cultural" {...a11yProps(1)} sx={{color:'white'}}/>
          <Tab label="MedCarnival" {...a11yProps(1)} sx={{color:'white'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h2 id="jjj_heading">Formal & Informal Events</h2>
        {
          events_data && events_data.map(index=><ActivityCard2 name={index.name} about={index.about} date={index.date} venue={index.venue} hc={index.hc} email_of_hc={index.email_of_hc} phone={index.hc=="Bharti Bhalla" ? 8708180252 : 8950359876} image={index.image} subheading={index.subheading} forms={index.register_form}/>)
        }
        
        
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <h2 id="jjj_heading">Cultural Activities</h2>
        {
          culturals && culturals.map(index=><ActivityCard2 name={index.name} about={index.about} date={index.date} venue={index.venue} hc="Adrika pal" email_of_hc="paladrika45@gmail.com" image={index.image} subheading={index.subheading} phone={9310230170} forms={index.register_form}/>)
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Medcarnival/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Three
      </CustomTabPanel>
      <Footer/>
    </Box>
  );
}
