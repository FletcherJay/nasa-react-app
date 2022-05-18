import React, { useEffect, useState } from "react"
import axios from "axios"
import { Accordion } from "react-bootstrap"
import Projectdesc from "./Projectdesc"

const Projects = () => {
  
  let tempDate = new Date()
  let endDate = (tempDate.getUTCFullYear()) + "-" + (tempDate.getMonth() + 1)+ "-" + "01";
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let Projects_URL = `https://api.nasa.gov/techport/api/projects?updatedSince=${endDate}&api_key=${API_KEY} `
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async() => {
     await axios.get(Projects_URL)
        .then((res) => {
          setProjects(res.data);
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setError(true);
          setProjects();
            console.log(err)
     })
    }
    fetchProjects()
  }, [])
  
 


  return loading ? (
    "loading..." 
    ) : error ? (
      "Error!"
    ) : projects ? (
    <div className="project-location">
    <Accordion >
    {projects.projects.slice(0,5).map((project, index) => (
      
   <Projectdesc project={project}  />))}
   </Accordion>
    </div>
  ): null;
}

export default Projects