import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"

const PODcard = () => {
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
//what if "picture" of the day is a video
  return (
    <div>
    {(pictures.media_type === "video")
       ? 
       <iframe src={pictures.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        width="100%"
/> 
       :<img src={pictures.url} style={{width: '100%'}}></img>
    }
    <Card bg="dark" text="white">
    <Card.Text>
    <p>{pictures.title}</p>
      {pictures.explanation} - copyright - {pictures.copyright}
        <a href={pictures.url} target="_blank"> Full Image</a>
    </Card.Text>
    </Card>
    </div>
  )
}

export default PODcard