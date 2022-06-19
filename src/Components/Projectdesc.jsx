import React, { useEffect, useState } from "react"
import axios from "axios"
import { Accordion, Button } from "react-bootstrap"

const Projectdesc = (props) => {

  let tempDate = new Date()
  let endDate = (tempDate.getUTCFullYear()) + "-" + (tempDate.getMonth() + 1)+ "-" + "01";
  let API_KEY = 'qnijM37ihRFu5YgP4NdXg2fn3xUIqVUqxcy5ZxZy'
  let Projects_URL = `https://api.nasa.gov/techport/api/projects/${props.project.projectId}?api_key=${API_KEY} `
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState([])

  useEffect(() => {
    const fetchProject = async() => {
     await axios.get(Projects_URL)
        .then((res) => {
          setProject(res.data);
          setLoading(false);
        }).catch((err) => {
          setLoading(false);
          setError(true);
         setProject();
            console.log(err)
     })
    }
    fetchProject()
  }, [])

  return loading ? (
    "loading..." 
    ) : error ? (
      "Error!"
    ) : project ? (
    <div>
    
    <Accordion.Item eventKey={project.project.projectId}>
                <Accordion.Header>{project.project.title} | {project.project.acronym}
                </Accordion.Header>
                <Accordion.Body style={{ width: "40vw"}}>
                    {project.project.description} {project.project.benefits}
                    <p>Research Location: {project.project.leadOrganization.organizationName}
                     </p>
                     <Button href= {`${project.project.website}`} target="_blank"  >{project.project.title}</Button>
                </Accordion.Body>
              </Accordion.Item>
    
              
    </div>
  ): null;
}

export default Projectdesc