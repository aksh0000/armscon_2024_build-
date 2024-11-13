import React from 'react'
import './TeamCard.css'
export default function TeamCard(props) {
  return (
    <div id="teamcard_container">
        <section id="image_container">
            <img src={props.dp}/>
        </section>
        <section id="info_holder">
            <ul>
                <li><h3>{props.name}</h3></li>
                <li>{props.position}</li>
                <li><p>{props.quote}</p></li>
            </ul>
        </section>
    </div>
  )
}
