import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Accordion, Col, Form, ListGroup, Row } from 'react-bootstrap';
import  './Appointment.css'

const Appointment = () => {
    return (
        <div>
             <div className="services">
              <h2>Services</h2>
              <ListGroup>
  <ListGroup.Item>24 hrs special care</ListGroup.Item>
  <ListGroup.Item>Aftercare patient</ListGroup.Item>
  <ListGroup.Item>Emergency with Specialist</ListGroup.Item>
  <ListGroup.Item>Pharma Sector</ListGroup.Item>
  
</ListGroup>
            </div>

                <h1  className="appointment-title">Appointment</h1>
            <Accordion className="making-appointment">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Making an Appointment?</Accordion.Header>
                    <Accordion.Body>
                    <Form>
  <Row className="mb-3">
      <h2>Appointment Form</h2>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Department</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Curdiology</option>
        <option>Pulmonology</option>
        <option>Neurology</option>
        <option>Gastiology</option>
        <option>Urology</option>
        <option>Gyneycology</option>
        
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Prof M N Huda</option>
        <option>Ahseen Rehman</option>
        <option>Seher Amayra</option>
        <option>Nazneen Chowdhury</option>
        <option>Alex Kwin</option>
        <option>Lwis Martz</option>
        <option>Kabir Khan</option>
      
      </Form.Select>
    </Form.Group>
      </Row>


 


  

  <Button  type="submit" className="submit-btn">
    Submit
  </Button>
</Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Appointment;