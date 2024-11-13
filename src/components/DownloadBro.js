import { Button } from '@mui/material';
import React from 'react';

const DownloadButton = () => {
  const handleRedirect = () => {
    // Redirect to the Google Drive view link
    window.location.href = "https://drive.google.com/file/d/1n3TZgsFNSuo0bSbNnsiRCWJQCGqB5M6Q/view?usp=sharing";
  };

  return <Button onClick={handleRedirect} variant='outlined' color="secondary">Read Brochure</Button>;
};

export default DownloadButton;
