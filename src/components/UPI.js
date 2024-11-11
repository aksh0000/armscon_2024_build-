import React, { useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Button } from '@mui/material';

export default function UpiQRCodeGenerator(props) {
  const upiLink = `upi://pay?pa=goyal.2002yash-2@okaxis&pn=yash+goyal&am=${props.link_}&cu=INR`;
  const qrRef = useRef();

  const downloadQRCode = () => {
    const originalCanvas = qrRef.current.querySelector('canvas');

    if (!originalCanvas) return;

    // Create a new canvas with additional space for padding/border
    const borderSize = 40;
    const newSize = originalCanvas.width + borderSize * 2;
    const newCanvas = document.createElement('canvas');
    newCanvas.width = newSize;
    newCanvas.height = newSize;
    const context = newCanvas.getContext('2d');

    // Fill the background with white and then add a red border
    context.fillStyle = '#ffffff'; // Background color (white)
    context.fillRect(0, 0, newSize, newSize);
    context.fillStyle = 'white'; // Border color (red)
    context.fillRect(0, 0, newSize, newSize);

    // Draw the original QR code in the center, with padding for the red border
    context.drawImage(originalCanvas, borderSize, borderSize);

    // Convert the canvas to a PNG and download it
    const url = newCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code-with-red-border.png';
    link.click();
};


  useEffect(() => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      canvas.style.border = '1px solid white';
      canvas.style.borderRadius = '10px';
      canvas.style.boxShadow = '0 0 10px rgba(255, 255, 255, 1)';
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan to Pay</h2>
      <div 
        ref={qrRef} 
        style={{
          padding: '20px', 
          display: 'inline-block', 
          backgroundColor: 'white', 
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0,1)'
        }}
      >
        <QRCodeCanvas
          value={upiLink}
          size={256}
          fgColor="#2FA1F5"
          bgColor="#ffffff"
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={downloadQRCode}
        style={{ marginTop: '20px', padding: '10px' }}
      >
        <p style={{color:'white'}}>Download QR Code</p>
      </Button>
    </div>
  );
}
