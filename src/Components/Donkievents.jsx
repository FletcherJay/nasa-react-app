import React, { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import axios from "axios"

const Donkievents = () => {
  let startDate = '2022-05-01'
  let endDate = new Date()
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let DONKI_URL = `https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${API_KEY}`
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async() => {
     await axios.get(DONKI_URL)
        .then((res) => {
          setEvents(res.data);
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setError(true);
          setEvents();
            console.log(err)
     })
    }
    fetchEvents()
  }, [])

  return loading ? (
    "loading..." 
    ) : error ? (
      "Error!"
    ) : events ? (
    <div className="donki-location">
    <Accordion >
          {events.slice(0,5).map((event, index) => (
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{event.messageType}|{event.messageID}
                </Accordion.Header>
                <Accordion.Body>
                    <textarea style={{height: "50vh", width: "60vw"}}>{event.messageBody}</textarea>
                </Accordion.Body>
              </Accordion.Item>
            ))}
            </Accordion>
    </div>
  ) : null;
}

export default Donkievents