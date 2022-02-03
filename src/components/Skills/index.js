import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import tick from '../images/tick.png';
import '../css/skill.css';

const Skills = () => {
    return(
        <Container fluid id="skills" style={{padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px"}}>Skills</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={tick} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Web Development</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={tick} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Backend Development</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={tick} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Mobile App Development</h4>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className='skill'>
                        <img src={tick} alt="Proficient in " className='tick'/>
                        <h4 style={{display: 'inline-block', fontWeight: '300', margin: '0 10px'}}>Devops</h4>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Skills;