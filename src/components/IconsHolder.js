import React from 'react'
import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function IconsHolder() {
  return (
    <div id="icons_holder"style={{color:'rgb(150,150,150)',display:'flex',justifyContent:'space-around',width:'25%'}}>
        <Instagram onClick={()=>window.location.href="https://www.instagram.com/armscon.uhsr/"}/>
        <YouTubeIcon onClick={()=>window.location.href="https://www.youtube.com/@ArmsconUHSR/"}/>
    </div>
  )
}
