import './App.css';
import React, { useEffect, useState } from "react"
import Accordion from 'react-bootstrap/Accordion'
import Eventcard from './Components/Eventcard';
import Asteroids from './Components/Asteroids';
import Patents from './Components/Patents';
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
     {/* <Asteroids/>  */}
       <Accordion >
          {events.slice(0,5).map((event, index) => (
          
            
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{event.messageType}|{event.messageID}
                </Accordion.Header>
                <Accordion.Body>
                    <textarea style={{height: "50vh", width: "80vw"}}>{event.messageBody.split("#").join("\n")}</textarea>
                </Accordion.Body>
              </Accordion.Item>
            
            
            ))}
            </Accordion>
      </div>
    );
};

export default App;
