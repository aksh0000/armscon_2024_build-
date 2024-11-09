import { Button } from '@mui/material';
import React from 'react';

const DownloadButton = () => {
  const handleRedirect = () => {
    // Redirect to the Google Drive view link
    window.location.href = "https://drive.google.com/file/d/1XJXglzmi5I8Y3R3rF8fvHAF9SvWU51o7/view?usp=drivesdk";
  };

  return <Button onClick={handleRedirect} variant='outlined' color="secondary">Read Brochure</Button>;
};

export default DownloadButton;
