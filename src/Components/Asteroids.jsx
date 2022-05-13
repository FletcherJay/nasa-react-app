import React, { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import axios from "axios"

const Asteroids = () => {
  let today = new Date().toISOString().slice(0, 10);
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let Astro_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}  `
  const [loading, setLoading] = useState(true);
  const [asteroids, setAsteroids] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAstro = async() => {
     await axios.get(Astro_URL)
        .then((res) => {
          setAsteroids(res.data);
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setError(true);
          setAsteroids();
            console.log(err)
     })
    }
    fetchAstro()
  }, [])

  return loading ? (
    "loading..." 
    ) : error ? (
      "Error!"
    ) : asteroids ? (
    <div className="asteroid-location">
    <Accordion >
          {asteroids.near_earth_objects[today].map((event, index) => (
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{event.id}|{event.name}
                </Accordion.Header>
                <Accordion.Body>
                    <p >{event.absolute_magnitude_h}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
            </Accordion>
    </div>
  ) : null;
}

export default Asteroids