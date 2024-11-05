import React from 'react'
import i1 from '../gallery/i (1).jpg'
import i2 from '../gallery/i (2).jpg'
import i3 from '../gallery/i (3).jpg'
import i4 from '../gallery/i (4).jpg'
import i5 from '../gallery/i (5).jpg'
import i6 from '../gallery/i (6).jpg'
import i7 from '../gallery/i (7).jpg'
import i8 from '../gallery/i (8).jpg'
 
import i9 from '../gallery/i (9).jpg'
import i10 from '../gallery/i (10).jpg'
import i11 from '../gallery/i (11).jpg'
import i12 from '../gallery/i (12).jpg'
import i13 from '../gallery/i (13).jpg'
import i14 from '../gallery/i (14).jpg'
import i15 from '../gallery/i (15).jpg'
import i16 from '../gallery/i (16).jpg'
import i17 from '../gallery/i (17).jpg'
import i18 from '../gallery/i (18).jpg'
import i19 from '../gallery/i (19).jpg'
import i20 from '../gallery/i (20).jpg'
import './Gallery.css';
export default function Gallery() {
    const images=[i1,i2,i3,i4,i5,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20]
  return (
    <div id="gallery_container">
        <header>
            <h1><span>ARMS</span>CON</h1>
            <p>Some memorable moments from the last year's ARMSCON.</p>
        </header>
        <main>
            {
                images && images.map(item=><img src={item}/>)
            }
            
        </main>
    </div>
  )
}
