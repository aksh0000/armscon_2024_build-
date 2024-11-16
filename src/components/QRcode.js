import React from 'react'
import { QRCodeCanvas } from 'qrcode.react';
export default function () {
  return (
    <div>

<QRCodeCanvas
          value={"this is some link"}
          size={256}
          fgColor="#2FA1F5"
          bgColor="#ffffff"
        />

    </div>
  )
}
