import React from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FaWeight } from "react-icons/fa";

const Skills = () => {
    return(
        <>
        <div className="skills">
            <h2>Skills</h2>
            <div className="diff-skills">
                <div className="inner-skills">
                    <Card className="card" style={{height:'150px'}}>
                        <Card.Body>
                            <Card.Title style={{color:'rgb(52, 69, 148)'}}>Web Development using Python</Card.Title>
                            <Card.Text>I have learnt web development using Python and falsk API, I have developed a website with a chatbot which gives medical information.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="inner-skills"> 
                    <Card className="card" style={{height:'150px'}}>                        
                        <Card.Body>
                            <Card.Title style={{color:'rgb(52, 69, 148)'}}>Web Development using MERN Stack</Card.Title>
                            <Card.Text>I have learnt web development using MERN Stack.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="inner-skills">
                    <Card className="card" style={{height:'150px'}}>
                        <Card.Body>
                            <Card.Title style={{color:'rgb(52, 69, 148)'}}>Python Programming</Card.Title>
                            <Card.Text>I have been practicing coding using Python language and also used Hacker rank platform to learn coding.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="tech">
                <h3>Technologies known</h3>
                <Table className=".nostyle table">
                    <thead>
                        <tr>
                            <th>Web Technologies</th>
                            <th>Scrpting Languages</th>
                            <th>Database</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML5</td>
                            <td>Python</td>
                            <td>MongoDB</td>
                            <td>VS Code</td>
                        </tr>
                        <tr>
                            <td>CSS, Bootstrap</td>
                            <td>Java</td>
                            <td>MySQL</td>
                            <td>GitHub</td>
                        </tr>
                        <tr>
                            <td>Javascript</td>
                            <td></td>
                            <td></td>
                            <td>Postman</td>
                        </tr>
                        <tr>
                            <td>React JS</td>
                            <td></td>
                            <td></td>
                            <td>Selenium</td>
                        </tr>
                        <tr>
                            <td>Node JS</td>
                            <td></td>
                            <td></td>
                            <td>Splunk</td>
                        </tr>
                        <tr>
                            <td>Express</td>
                            <td></td>
                            <td></td>
                            <td>Jira</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        </>
    );
}

export default Skills;