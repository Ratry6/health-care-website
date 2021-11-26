import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceDetail.css'


const ServiceDetail = (props) => {
    const {name,img,description,key} = props.service;
    const history = useHistory();
    const handleDetailsButton = ()=>{
      history.push(`/details/${key}`);
      
    }
    return (
        <div className="service-cards">
            <Col>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">
            
            <p> {description}</p>
            <Button className="details-btn"
            onClick={handleDetailsButton}
            >Click to see Details</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default ServiceDetail;