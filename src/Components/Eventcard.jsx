import React, { useEffect, useState } from "react"

const Eventcard = () => {
  let startDate = '2022-05-01'
  let tempDate = new Date()
  let endDate = (tempDate.getUTCFullYear()) + "-" + (tempDate.getMonth() + 1)+ "-" + (tempDate.getUTCDate());

  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let POD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY} `

  const [pictures, setPictures] = useState([])
  const fetchPod = () => {
    fetch(POD_URL)
        .then(res => res.json())
        .then(data => {
          setPictures(data)
      })
  }

  useEffect(() => {
    fetchPod()
  }, [])

  return (
    <div>
       <img src={pictures.url} style={{width: '100%'}}></img>

    </div>
  )
}

export default Eventcard