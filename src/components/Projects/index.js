import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
const Projects = () => {
    return (
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{
                width: "100%",
                textAlign: "center",
                marginBottom: "50px",
                marginTop: "20px",
                color: "#dee2e6"
            }}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{width: '100%'}}>
                        <Card.Body>
                            <Card.Title>Numerical Reasoning IQ Test Android application</Card.Title>
                            <Card.Text>
                                A mini Multiple Choice Quiz on Android,by request the question from API , stores the
                                playing record and shows all the game result by pie chart and bar chart
                            </Card.Text>
                            <Button href={"https://github.com/ChrisWK51/ITP4501-Assignment-IQ-Test"}
                                    variant="primary"><BsGithub/> repo link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{width: '100%', margin: "20px 0"}}>
                        <Card.Body>
                            <Card.Title>TimelyTaste</Card.Title>
                            <Card.Text>
                                Containerized event-based microservices for supporting a RESTful API which is similar to
                                the service provided by the Uber Eat API,including logging function.
                            </Card.Text>
                            <Button href={"https://github.com/ChrisWK51/TimelyTaste"} variant="primary"><BsGithub/> repo link</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{width: '100%'}}>
                        <Card.Body>
                            <Card.Title>KillMushroomBot</Card.Title>
                            <Card.Text>
                                A bot for Discord.Contains many function such as clear message , send a image or quote
                                when triggered by keywords and send weather forecast everyday at 8pm etc.
                            </Card.Text>
                            <Button href={"https://github.com/ChrisWK51/CDCBot"} variant="primary"><BsGithub/> repo link</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;