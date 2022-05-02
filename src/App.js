import './App.css';
import React, { useEffect, useState } from "react"
import Accordion from 'react-bootstrap/Accordion'

function App() {

    let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
    let startDate = '2021/05/05'
    let endDate = new Date()
    let API_URL = `https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${API_KEY}`

  const [events, setEvents] = useState([])
  const fetchData = () => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          setEvents(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
      <div className="App">
       
       <Accordion >
          {events.map((event, index) => (
          
            
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{event.messageType}|{event.messageID}
                </Accordion.Header>
                <Accordion.Body>
                    {event.messageBody}
                </Accordion.Body>
              </Accordion.Item>
            
            
            ))}
            </Accordion>
      </div>
    );
};

export default App;
