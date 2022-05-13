import './App.css';
import React, { useEffect, useState } from "react"
import Accordion from 'react-bootstrap/Accordion'
import Eventcard from './Components/Eventcard';
import Asteroids from './Components/Asteroids';
import Patents from './Components/Patents';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
    let startDate = '2022-05-01'
    let endDate = new Date()
    let DONKI_URL = `https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${API_KEY}`

  const [events, setEvents] = useState([])
  const fetchData = () => {
    fetch(DONKI_URL)
        .then(res => res.json())
        .then(data => {
          setEvents(data)
      })
  }


  useEffect(() => {
    fetchData()
  }, []);



  return (
      <div className="App">
      
      <Eventcard/>
      <Mainnav/>

     <Asteroids/> 
     <div className="donki-location">
       <Accordion >
          {events.slice(0,5).map((event, index) => (
          
            
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{event.messageType}|{event.messageID}
                </Accordion.Header>
                <Accordion.Body>
                    <p >{event.messageBody.split("#").join("\n")}</p>
                </Accordion.Body>
              </Accordion.Item>
            
            
            ))}
            </Accordion>
            </div>
      </div>
    );
};

export default App;
