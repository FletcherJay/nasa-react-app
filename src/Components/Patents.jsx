import React, { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import axios from "axios"

const Patents = () => {

  let startDate = '2022-05-01'
  let tempDate = new Date()
  let endDate = (tempDate.getUTCFullYear()) + "-" + (tempDate.getMonth() + 1)+ "-" + (tempDate.getUTCDate());
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let Patents_URL = `https://api.nasa.gov/techtransfer/patent/?api_key=${API_KEY} `

  const [patents, setPatents] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPatents = async() => {
     await axios.get(Patents_URL)
        .then((res) => {
          setPatents(res.data);
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setError(true);
          setPatents();
            console.log(err)
     })
    }
    fetchPatents()
  }, [])

  return loading ? (
    "loading..." 
    ) : error ? (
      "Error!"
    ) : patents ? (
    <div>
    <Accordion >
          
          
            
              <Accordion.Item eventKey={patents.results[0][2]}>
                <Accordion.Header>{patents.results[0][2]}
                </Accordion.Header>
                <Accordion.Body>
                    <textarea style={{height: "50vh", width: "80vw"}}>{patents.results[0][3]}</textarea>
                </Accordion.Body>
              </Accordion.Item>
            
            
            
            </Accordion>
    </div>
  ): null;
}

export default Patents