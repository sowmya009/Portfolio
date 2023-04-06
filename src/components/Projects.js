import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import details from './details';

const Projects = () => {
    return(
        <>
        <div className="projects">
            <h2>Projects</h2>
            {
            details.map((a,index)=>{
                return(
                    <>
                    <div  className="project-card">
                        <Card style={{width : '80%', justifyContent : 'center'}}>
                        <Card.Body style={{justifyContent : 'center'}}>
                            <Card.Title>{a.Name}</Card.Title>
                            <Card.Text>{a.text}
                            </Card.Text>
                            <Button variant="primary">
                                <a href={a.Github}>More Details</a>
                                
                            </Button>

                        </Card.Body>
                        </Card>
                    </div>
                    </>
                )
            })
            
        }
        
        </div>
        </>

    )
}

export default Projects;
