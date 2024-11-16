import React from 'react'
import TeamCard from './TeamCard'
import './Team.css'
import team from '../data/team'
export default function Team() {
  return (
    <div id="team_container">
        <header><h1><span>ARMS</span>CON</h1><br/>
        <p>Everything is possible when the crew is ALL IN! Each member brings a unique set of skills and a passion for excellence. From meticulous planners and creative visionaries to tech-savvy operators and charismatic hosts, our team is united by a shared commitment to deliver memorable experience.</p>
        </header>
        <main>
            {
                team && team.map(index=> <TeamCard name={index.name} position={index.position} dp={index.dp} quote={index.quote}/>)
            }
        </main>
        <footer>
            &copy;ARMSCON 2024;
        </footer>
    </div>
  )
}
