import React from 'react';
import './Dashboard.css';
import './Dashadmin.css';
import { Button, TextField, responsiveFontSizes } from '@mui/material';
import { useEffect ,useState} from 'react';
export default function Dashboard() {
  const [data,setData]=useState(()=>"");
  useEffect(()=>{
    fetch("https://www.armscon.org.in:5000/admin_panel").then(response=>response.json()).then(data=>setData(data)).catch(err=>console.log(err));
  },[data])
  function delete_record(event, data_) {
    event.preventDefault();
    console.log("sending data", data_);
  
    fetch("https://www.armscon.org.in:5000/delete_data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: data_ }) // Send JSON directly
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  
  console.log("data is thuis ",data.data)
  return (
    <div id="dashboard_container">
        <header>
          <h2>ARMSCON Admin panel</h2>
        </header>
        <p style={{color:'white'}}>Dashboard</p>
        <main>
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Pricing</th>
      <th>Plan</th>
      <th>Half-Day Workshops</th>
      <th>Full-Day Workshops</th>
      <th>College</th>
      <th>Course</th>
      <th>Year</th>
      <th>Entertainment:</th>
      <th>email:</th>
    </tr>
  </thead>
  <tbody>
    {data.data && data.data.map((item) => (
      <tr key={item.fullname} style={{background:item.extra=="0" ? "red" : ''}}>
        <td>{item.fullname}</td>
        <td>{item.phonenumber}</td>
        <td>{item.pricing}</td>
        <td>{item.plan}</td>
        <td>{item.half_day_workshops}</td>
        <td>{item.full_day_workshops}</td>
        <td>{item.college}</td>
        <td>{item.course}</td>
        <td>{item.year}</td>
        <td>{item.entertainment}</td>
        <td>{item.email}</td>
        <td><Button variant='contained' color="error" onClick={(event)=>delete_record(event,item)}>DELETE</Button></td>
      </tr>
    ))}
  </tbody>
</table>

        </main>
        </div>
  )
}
