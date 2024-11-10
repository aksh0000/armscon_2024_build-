import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width:'70%',
            fontSize: '16px',
            padding: '2% 5%',
            background:'rgb(136,50,153)',
            marginTop:'30px',
            color:'white',
            '&:hover': {
              backgroundColor: '',
            },
          },
        },
      },
    },
  });
export default function RegisterBtn() {
  return (
    <div style={{width:"50%",margin:'30px auto 0px auto'}}>
      <h3>Registrations will start from 10 Nov</h3>
    {/*<Link to="/register"><Button fullWidth  variant='contained' color="secondary">Register</Button></Link>*/}
    <Button fullWidth disabled variant='contained' color="secondary">Register</Button>
  </div>
  )
}
