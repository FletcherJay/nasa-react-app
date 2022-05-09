import React, { useEffect, useState } from "react"

const Projects = () => {
  
  let startDate = '2022-05-01'
  let tempDate = new Date()
  let endDate = (tempDate.getUTCFullYear()) + "-" + (tempDate.getMonth() + 1)+ "-" + (tempDate.getUTCDate());
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let Projects_URL = `https://api.nasa.gov/techport/api/projects?updatedSince=2022-05-01&api_key=${API_KEY} `

  const [projects, setProjects] = useState([])
  const fetchProjects = () => {
    fetch(Projects_URL)
        .then(res => res.json())
        .then(data => {
          setProjects(data)
      })
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div>Projects</div>
  )
}

export default Projects