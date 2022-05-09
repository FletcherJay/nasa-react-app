import React, { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"

const Asteroids = () => {
  let startDate = '2022-05-03'
  let tempDate = new Date()
  let endDate = (tempDate.getUTCFullYear()) + "-" + (tempDate.getMonth() + 1)+ "-" + (tempDate.getUTCDate());
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let Astro_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}  `

  const [astroids, setAstroids] = useState([])
  const fetchAstro = () => {
    fetch(Astro_URL)
        .then(res => res.json())
        .then(data => {
          setAstroids(data)
      })
  }

  useEffect(() => {
    fetchAstro()
  }, [])

  return (
    <div>
    <Accordion >

    {astroids.map((astroid, index) => (
          
            
      <Accordion.Item eventKey={index.toString()}>
        <Accordion.Header>{astroid}
        </Accordion.Header>
        <Accordion.Body>
            <textarea style={{height: "50vh", width: "80vw"}}>{astroid}</textarea>
        </Accordion.Body>
      </Accordion.Item>
    
    
    ))}
    </Accordion>
    </div>
  )
}

export default Asteroids